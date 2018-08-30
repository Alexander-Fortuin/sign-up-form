"use strict"

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Your Name must be filled out");
        return false;
    }
     var y = document.forms["myForm"]["lname"].value;
    if (y == "") {
        alert("Your Last name must be filled out");
        return false;
    }
     var z = document.forms["myForm"]["email"].value;
    if (z == "") {
        alert("Your Email must be filled out");
        return false;
    }
}
