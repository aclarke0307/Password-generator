// Assignment code here
function generatePassword() {
  var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseChar =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialChar =[" ", "#", "$", "%", "&", "( )", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\ ","|" ]; 
  var passwordArray = [ ];
  var thePassword ="";


  //Ask the length of password
 var promptCharacterNumber = window.prompt('How many characters would you like your password?');

   //validate prompt answer
  if (promptCharacterNumber <8 || promptCharacterNumber >128) {
  // an alert if number is less than 8 or greater than 128
  alert("Must be at least 8 to 128 in length");
 }
 
  //Confirm prompts for generating password
  var confirmSpecial = window.confirm('Click ok to confirm including Special characters');

  if(confirmSpecial){
     passwordArray = passwordArray.concat(specialChar);
  }

  var confirmNumeric = window.confirm('Click OK to confirm including numeric characters');
  if(confirmNumeric){
    passwordArray = passwordArray.concat(numChar);
  }

   var confirmLowerCase = window.confirm('Click OK to confirm including lowercase characters');
   if(confirmLowerCase){
     passwordArray = passwordArray.concat(lowerCaseChar);
   }

  var confirmUpperCase = window.confirm('Click OK to confirm including Uppercase characters');
    if(confirmUpperCase){
      passwordArray = passwordArray.concat(upperCaseChar);
    }

    for(var i=0; i > promptCharacterNumber; i++){
      thePassword += passwordArray[Math.floor(Math.random() * passwordArray.length)];
    }
    return thePassword;

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
