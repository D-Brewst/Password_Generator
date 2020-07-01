// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var length = prompt("How many characters do you want in your passsword?");
  var num = parseInt(length);
  if(num >= 8 && num <= 128){
    var numbers = confirm("Do you want numbers in your password?");
    var symbols = confirm("Do you want symbols in your password?");
    var upper = confirm("Do you want capitol letters in your password?");
    var lower = confirm("Do you want lowercase letters in your password?");
  } else{
    length = alert("Your number needs to be between 8 and 128. Try again.");
  }
  var arrNum = [0,1,2,3,4,5,6,7,8,9];
  var arrUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var arrLow = arrUp.map(elem => elem.toLowerCase());
  var arrSym = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
  var final = [];

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
  
  var trueFinal = final.flat();
  var code = [];
  
  for(var i = 0; i < num; i++){
    var character = trueFinal[Math.floor(Math.random() * trueFinal.length)];
    code.push(character);
  }
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
