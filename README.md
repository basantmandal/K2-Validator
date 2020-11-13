# K2 Validator - A Javascript Validation Plugin


This is a pure javascript based form validation plugin. Validations range from Email, Phone, Alphanumeric, Numeric and Decimal and IP. It used regex for validation.

**How can you use for test or learning purpose ?**

   ```javascript
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
```

<pre>validationResult returns True on success else error message on validation error.</pre>

Please note:- **This plugin is under development.**