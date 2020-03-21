// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword() {
  var passLength = prompt("How many characters would you like your password to be? Please enter a number between 8 and 128.");
  if (passLength > 7 && passLength < 128) {
    console.log(passLength);
  } else if (passLength < 8) {
    alert("Not a valid selection. Please enter a number between 8-128.");
    //ADD LOOP TO RE-ENTER SELECTION
  } else if (passLength > 128) {
    alert("Not a valid selection. Please enter a number between 8-128.");
    //ADD LOOP TO RE-ENTER SELECTION
  }
  var numbers = confirm("Would you like to use numbers?");
  if (numbers === true) {
    console.log("yes");
  } else if (numbers === false) {
    console.log("no");
  }
  var lowercase = confirm("Would you like to use lowercase letters?");
  if (lowercase === true) {
    console.log("yes");
  } else if (lowercase === false) {
    console.log("no");
  }
  var uppercase = confirm("Would you like to use uppercase letters?");
  if (uppercase === true) {
    console.log("yes");
  } else if (uppercase === false) {
    console.log("no");
  }
  var specialChar = confirm("Would you like to use special characters?");
  if (specialChar === true) {
    console.log("yes");
  } else if (specialChar === false) {
    console.log("no");
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

