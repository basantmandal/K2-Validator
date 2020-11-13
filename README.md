# k2validator


This is a pure javascript based form validation plugin. Validations range from Email, Phone, Alphanumeric, Numeric and Decimal and IP. It used regex for validation. 

Usage Example :- 

// Example - HOW TO USE THE k2validator.js
    form.addEventListener("submit", (event) => {
        fields = [{
            option: "Alphanumeric",
            value: document.getElementById("firstName").value,
            lengthMin: "1",
            lengthMax: "20",
            errorMessage: "Enter First Name",
        }, {
            option: "Alphanumeric",
            value: document.getElementById("lastName").value,
            lengthMin: "1",
            lengthMax: "20",
            errorMessage: "Enter Last Name",
        }, {
            option: "Email",
            value: document.getElementById("emailID").value,
            errorMessage: "Enter Email",
        }, {
            option: "Alphanumeric",
            value: document.getElementById("pass1").value,
            errorMessage: "Enter Password",
        }, {
            option: "Alphanumeric",
            value: document.getElementById("pass2").value,
            errorMessage: "Enter Confirm Password",
        }, ];
        var validationResult = validate(fields);
        if (!validationResult["status"]) {
            console.log(validationResult["message"]);
            console.log("Form has error we cannot continue....");
        } 
        else {
            alert("Lets Submit....");
        }
        event.preventDefault();
    });
//ENDS


Please note :- This plugin is under development.