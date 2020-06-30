// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = prompt("How long do you want your password to be?");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
