# k2validator


This is a pure javascript based form validation plugin. Validations range from Email, Phone, Alphanumeric, Numeric and Decimal and IP. It used regex for validation. 

// Example - HOW TO USE THE k2validator.js

####Code Blocks (Indented style)
    fields = [
        {
            option: "Alphanumeric",
            value: document.getElementById("firstName").value,
            lengthMin: "1",
            lengthMax: "20",
            errorMessage: "Enter First Name",
        },
        {
            option: "Email",
            value: document.getElementById("emailID").value,
            errorMessage: "Enter Email",
        }
    ];
    var validationResult = validate(fields);

    validationResult returns True on success else error message on validation error.
//ENDS

<b>Please note</b> :- This plugin is under development.