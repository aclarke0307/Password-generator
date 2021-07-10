// Assignment code here
function getRandom(arr){
  var randomIndex = Math.floor(Math.random() * arr)
  var randomElement = arr[randomIndex];
  return randomElement;
}
function generatePassword() {
  var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseChar =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialChar =[" ", "#", "$", "%", "&", "( )", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\ ","|" ]; 
  var passwordArray = [];
  var letterArray =[];
  var passwordResult =[];


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
     console.log("special charcters: " + passwordArray)
     letterArray.push(getRandom(specialChar));
  }

  var confirmNumeric = window.confirm('Click OK to confirm including numeric characters');
  if(confirmNumeric){
    passwordArray = passwordArray.concat(numChar);
    console.log("numbers: " + passwordArray)
    letterArray.push(getRandom(numChar));
  }

   var confirmLowerCase = window.confirm('Click OK to confirm including lowercase characters');
   if(confirmLowerCase){
     passwordArray = passwordArray.concat(lowerCaseChar);
     console.log("lowercase: " + passwordArray)
     letterArray.push(getRandom(lowerCaseChar));
   }

  var confirmUpperCase = window.confirm('Click OK to confirm including Uppercase characters');
    if(confirmUpperCase){
      passwordArray = passwordArray.concat(upperCaseChar);
      console.log("uppercase: "+ passwordArray)
      letterArray.push(getRandom(upperCaseChar));
    }

    for(var i=0; i < promptCharacterNumber.length; i++){
      var possiblePassword = getRandom(passwordArray);
      passwordResult.push(possiblePassword)
      console.log(passwordResult)
    }
    for (var i =0; i < letterArray.length; i++){
      passwordResult[i] = letterArray[i];
    }
    return passwordResult.join("");
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
