
// Validate that the name, email, and message parts of the form are filled out before submitting.
function validate() {
    var contactName = document.getElementById("name").value;
    var contactEmail = document.getElementById("email").value;
    var contactMessage = document.getElementById("message").value;
    if (contactName == "") {
        document.getElementById("name").style.border = "2px solid #E52A6F";
        document.getElementById("nameError").innerHTML = "<p>Please enter your name.</p>";
        return false;
    } else if (contactEmail == '') {
        document.getElementById("email").style.border = "2px solid #E52A6F";
        document.getElementById("emailError").innerHTML = "<p>Please enter your email address.</p>";
        return false;        
    } else if (contactMessage == '') {
        document.getElementById("message").style.border = "2px solid #E52A6F";
        document.getElementById("messageError").innerHTML = "<p>Please enter a message.</p>";
        return false;
    }

}