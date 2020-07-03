// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  // Prompt to ask how many characters that want in the password
  var length = prompt("How many characters do you want in your passsword?");
  // Convert length from a string to an integer
  var num = parseInt(length);
  // After they choose an acceptable amount of characters, allow them to choose what types of characters they want in their password. If they dont choose an acceptable amount, prompt them to try again.
  if(num >= 8 && num <= 128){
    var numbers = confirm("Do you want numbers in your password?");
    var symbols = confirm("Do you want symbols in your password?");
    var upper = confirm("Do you want capitol letters in your password?");
    var lower = confirm("Do you want lowercase letters in your password?");
  } else{
    length = alert("Your number needs to be between 8 and 128. Try again.");
  }
  // Set up separate arrays of number, uppercase, lowercase, and symbol characters.
  var arrNum = [0,1,2,3,4,5,6,7,8,9];
  var arrUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // map method applied toLowercase() to all elements in the uppercase array to create this lowercase array
  var arrLow = arrUp.map(elem => elem.toLowerCase());
  var arrSym = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
  // Set up an empty array
  var final = [];

  // Push the character types that they want included in their passcode into the empty final array.
  if(numbers == true){
    final.push(arrNum);
  }
  if(symbols == true){
    final.push(arrSym);
  }
  if(upper == true){
    final.push(arrUp);
  }
  if(lower == true){
    final.push(arrLow);
  }
  
  // Flatten the final array to convert it from a 2 dimentional array to a on dimentional array.
  var trueFinal = final.flat();

  // Create another empty array to store the randomly selected password characters.
  var code = [];
  
  // Randomly select characters from the trueFinal array and push them into the code array.
  for(var i = 0; i < num; i++){
    var character = trueFinal[Math.floor(Math.random() * trueFinal.length)];
    code.push(character);
  }
  // Combine the code array into a string and return the string.
  return code.join("");
}

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
