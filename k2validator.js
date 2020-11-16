/*
 * k2validator.js 0.0.2 - 16 - November - 2020
 * Copyright (c) 2020 Basant Mandal, https://wwww.techbasant.in
 * k2validator.js is open sourced under the MIT license.
 * https://github.com/basantmandal/k2validator
 */

var defaults = {
    messages: {
        required: "The %s field is required."
    },
    options: {
        version: "0.0.2",
        last_update: "16-November-2020",
        debug: false,
        test: false,
        errorClass: "is-invalid"
    }
};
console.log("K2 Validator - Enabled - Version " + defaults.options.version + "\nLast Updated :- " + defaults.options.last_update + "\n\n");

/*
 * PURPOSE : CHECKS FOR EMPTY STRING
 *  PARAMS :  str
 * RETURNS :  True/False
 */

function isEmpty(str) {
    return (!str || 0 === str.length);
}

/*
 * PURPOSE : Validates with validationEngine Function
 *  PARAMS : formName, Debug as Boolean
 * RETURNS : Erros if any with status and messages as an object
 */
let validateMyForm = (formName, debug = defaults.options.debug) => {
    try {
        var form = document.getElementById(formName);
        var allFormControls = form.elements;
        var errors = [];
        for (let cell of allFormControls) {
            let result = validationEngine(cell);
            if (!isEmpty(result)) {
                if (debug) {
                    console.log("Validation Status = " + result);
                }
                errors.push(result);
            }
        }
        // LETS RETURN VALIDATION RESULT
        if (errors.length < 1) {
            return {
                status: true,
                message: "validation success",
            };
        }
        else {
            let errorLog = "";
            errors.forEach(function (value) {
                errorLog += value;
            });
            return {
                status: false,
                message: errorLog,
            };
        }
    }
    catch (e) {
        console.log("Catched Error \n" + e);
    }
};

var validationEngine = (cell, debug = defaults.options.debug) => {
    var errors = [];
    var status = true;

    if (cell.getAttribute("type") != "button" && cell.getAttribute("type") != "submit" && cell.getAttribute("data-required") == "required") {
        // Input Tags Attribute
        input_id = cell.getAttribute("id");
        input_type = cell.getAttribute("type");
        input_required = cell.getAttribute("data-required");
        input_max_length = cell.getAttribute("data-maxlength");
        input_min_length = cell.getAttribute("data-minlength");
        input_value = isEmpty(cell.value) ? "" : sanitizeInput(cell.value);
        input_field_name = isEmpty(cell.getAttribute("data-field-name")) ? input_id : cell.getAttribute("data-field-name").trim();
        input_error_message = isEmpty(cell.getAttribute("data-error-message")) ? input_field_name + " is required." : cell.getAttribute("data-error-message").trim();

        result = regexTester(input_type);
        if (debug) {
            console.log("Input ID = " + input_id);
            console.log("Type = " + input_type);
            console.log("Required = " + input_required);
            console.log("Max Length = " + input_max_length);
            console.log("Min Length = " + input_min_length);
            console.log("Value = " + input_value);
            console.log("Error Msg = " + input_error_message);
            console.log("\n");
            console.log("Regex Result = " + result);
            console.log("\n\n");
        }

        // CHECK FOR DATA MATCH
        if (!isEmpty(cell.getAttribute("data-match"))) {
            let pass1 = document.getElementById(cell.getAttribute("data-match"));
            let data_set = pass1.getAttribute("data-field-name");
            if (input_value != document.getElementById(cell.getAttribute("data-match")).value) {
                input_error_message += "<br>Both " + data_set + " & " + input_field_name + " must match " + "<br>";
                result = false;
            }
        }

        //WHEN VALIDATION FAILS
        if (!result) {
            // ADD CLASS BOTOSTRAP ERROR - is-invalid IN INPUT TAG
            cell.classList.add(defaults.options.errorClass);
            return (input_error_message + "<br>");
        }
        else {
            cell.classList.remove(defaults.options.errorClass);
            return false;
        }
    }
}

/*
 * PURPOSE : Test Values Against Types (text, number, email & etc)
 *  PARAMS : input_type
 * RETURNS :  True/False
 */

function regexTester(input_type) {
    switch (input_type) {
    case "text":
        if (input_min_length < 1) {
            input_min_length = 1;
        }
        if (input_max_length < 1) {
            input_max_length = 100;
        }
        regex = new RegExp("^[a-zA-Z0-9]{" + input_min_length + "," + input_max_length + "}$");
        break;
    case "number":
        regex = new RegExp("^-?[0-9]*.?[0-9]+$");
        break;
    case "email":
        regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
        break;
    default:
        regex = new RegExp("^[A-Za-z0-9 ]+$");
    }

    return input_value.match(regex) ? true : false;
}

/*
 * PURPOSE : Sanitize The Input
 *  PARAMS : String to be Sanitized
 * RETURNS : Safe string
 */

function sanitizeInput(string) {
    return string.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;').trim();
}
