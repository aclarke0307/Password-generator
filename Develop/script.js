// Assignment code here
var numChar = "0123456789";
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar = "ABCDEVGHIJKMNOPQRSTUVWXYZ";
var specialChar ="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //Ask the length of password
  var promptCharacterNumber = window.prompt('How many characters would you like your password?');

  //validate prompt answer
  if (promptCharacterNumber < 8 || promptCharacterNumber > 128) {
    // an alert if number is less than 8 or greater than 128
    alert("Must be at least 8 to 128 in length")
    return writePassword();
  }
//Confirm prompts for generating password
  var confirmSpecial = window.confirm('Click ok to confirm including characters');

  var confirmNumeric = window.confirm('Click OK to confirm including numeric characters');

  var confirmLowerCase = window.confirm('Click OK to confirm including lowercase characters');

  var confirmUpperCase = window.confirm('Click OK to confirm including Uppercase characters');

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
