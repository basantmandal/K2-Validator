/*
 * k2validator.js 0.0 .1 - 13 - November - 2020
 * Copyright (c) 2020 Basant Mandal, http://wwww.techbasant.in
 * k2validator.js is open sourced under the MIT license.
 * https://github.com/basantmandal/k2validator
 */

var defaults = {
    messages:
    {
        required: 'The %s field is required.',
    },
    options:
    {
        version: "0.0.1",
        last_update: "13-November-2020",
        debug: false,
        test: false
    }
};

console.log("Validation JS Enabled :- " + defaults.options.version + "\nLast Updated :- " + defaults.options.last_update);
/**
 * This Function Basically Loops
 *
 * @param arrayFields
 * option: option
 * value: value of input
 * lengthMin: "1",
 * lengthMax: "20",
 * errorMessage: "Enter First Name",
 * @param {boolean} [debug=false]
 * @return {object {status, message}}
 */
function validate(arrayFields, debug = defaults.options.debug)
{
    console.log("debug" + debug);
    var error = [];
    var errorLog = "";
    if (arrayFields.length > 0)
    {
        for (i = 0; i < arrayFields.length; i++)
        {
            let option = arrayFields[i]["option"];
            let value = arrayFields[i]["value"];
            let lengthMin = arrayFields[i]["lengthMin"] < 0 ? 1 : arrayFields[i]["lengthMin"];
            let lengthMax = arrayFields[i]["lengthMax"] < 0 ? 1 : arrayFields[i]["lengthMax"];
            let matches = arrayFields[i]["matches"].trim() = = "" ? false : arrayFields[i]["matches"];
            if (debug)
            {
                console.log("Option =" + option);
                console.log("Value =" + value);
                console.log("Length Min =" + lengthMin);
                console.log("Length Max = =" + lengthMax);
                console.log("\n");
            }
            if (!regexTester(option, value, lengthMin, lengthMax, matches))
            {
                error.push(arrayFields[i]["errorMessage"] + "<br>");
            }
        }

        // Let's check if any errors then push to return
        if (error.length < 1)
        {
            return {
                status: true,
                message: "validation success",
            };
        }
        else
        {
            error.forEach(function(value)
            {
                errorLog += value;
            });
            return {
                status: false,
                message: errorLog,
            };
        }
    }
}

function regexTester(option, value, lengthMin = 1, lengthMax = 20, matches = false, debug = defaults.options.debug)
{
    var regex = "";
    switch (option)
    {
        case "Alphanumeric":
            regex = new RegExp("^[a-zA-Z0-9]{" + lengthMin + "," + lengthMax + "}$");
            break;
        case "Integer":
            regex = new RegExp("^[0-9]{" + lengthMin + "," + lengthMax + "}$");
            break;
        case "Decimal":
            regex = new RegExp("^-?[0-9]*.?[0-9]+$");
            break;
        case "Email":
            regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
            break;
        case "IP":
            regex = new RegExp("^ ((25[0-5] | 2[0-4][0-9] | 1[0-9]{ 2 }| [0-9]{ 1, 2 }) .) { 3 } (25[0-5] | 2[0-4][0-9] | 1[0-9]{ 2 }| [0-9]{ 1, 2 }) $ / i");
            break;
        case "DATE":
            regex = new RegExp("d{4}-d{1,2}-d{1,2}");
            break;
        default:
            regex = new RegExp("^[A-Za-z0-9 ]+$");
    }
    let result = value.trim().match(regex) ? true : false;
    if (debug)
    {
        console.log("Result = " + result);
    }
    return result;
}

if (defaults.options.test)
{
    console.clear();
    console.log("Test Mode Enabled\n\n");
    test1 = ["ab", "a b 1c", "abced1", "12", "12345 012344", "      ", "122323.0087", "1234545", "basant@gmail.com", "basant_mandal@led.in"];
    for (testvalue of test1)
    {
        console.log("Test Alphanumeric on " + testvalue + " = " + regexTester("Alphanumeric", testvalue));
        console.log("Test Numeric on " + testvalue + " = " + regexTester("Integer", testvalue));
        console.log("Test Email on " + testvalue + " = " + regexTester("Email", testvalue));
        console.log("Test Decimal on " + testvalue + " = " + regexTester("Decimal", testvalue));
        console.log("\n");
    }
}