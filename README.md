# K2 Validator - A JavaScript Validation Plugin

This is a pure JavaScript based form Validation Plugin.
Validations range from Email, Phone & Text. It uses regex for validation.
Apart from Validation, It even sanitize, user input value.


## Features
    * Easy & Lightweight (~6kb)
    * User Form Data Sanitization
    * Very Easy to Customize as per your needs

## Compatibility

## K2 Validator has been tested on all major browsers
    * Chrome    > 85
    * Firefox   > 82
    * Opera     > 72


## Problems/Questions/Bugs?
* Yes! You can contribute opening - https://github.com/basantmandal/k2validator/issues. Fix it and help others
* Do you think that something in our document should be better? Do you have a cool idea to increase the awesomeness? Summit your pull request with your idea!


**How can you use for test or learning purpose ? You can go through the index.html or else read below**

<pre>EXAMPLE</pre>
   ```javascript
<input id="firstName" name="firstName" type="text" class="form-control" data-error-message="Enter First Name" data-maxlength="20" data-minlength="2" data-required="required" data-field-name="First Name" />
data-error-message="Enter First Name"  // ERROR MESSAGE
data-maxlength="20"                    // MAX LENGTH
data-minlength="2"                     // MIN LENGTH
data-required="required"               // VALIDATION WILL RUN IF REQURED IS THERE IN VALUE
data-field-name="First Name"           // FIELD NAME TO SHOW DURING ERROR

var formError = validateMyForm("formID");

if (!formError.status){
  formError.status  // RETURN TRUE/FALSE ON VALIDATION
  formError.message // ALL ERROR MESSAGES
}
```

<pre><b>validateMyForm</b> returns True on success else error message on validation error.</pre>


Please note:- **This plugin is under development.**
