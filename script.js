// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword(charset, passLength) {
  var passLength = prompt("How many characters would you like your password to be? Please enter a number between 8 and 128.");
  if (passLength > 7 && passLength < 129) {
    console.log(passLength);
  } else if (passLength < 8) {
    alert("Not a valid selection. Please enter a number between 8-128.");
    return;
    //ADD LOOP TO RE-ENTER SELECTION
  } else if (passLength > 128) {
    alert("Not a valid selection. Please enter a number between 8-128.");
    return;
    //ADD LOOP TO RE-ENTER SELECTION
  }
  var numbers = confirm("Would you like to use numbers?");
  if (numbers === true) {
    array[0] = numbersDef;
  } else if (numbers === false) {
    array[0] = "";
  }
  var lowercase = confirm("Would you like to use lowercase letters?");
  if (lowercase === true) {
    array[1] = lowercaseDef;
  } else if (lowercase === false) {
    array[1] = "";
  }
  var uppercase = confirm("Would you like to use uppercase letters?");
  if (uppercase === true) {
    array[2] = uppercaseDef;
  } else if (uppercase === false) {
    array[2] = "";
  }
  var specialChar = confirm("Would you like to use special characters?");
  if (specialChar === true) {
    array[3] = specialCharDef;
  } else if (specialChar === false) {
    array[3] = "";
  }

  var numbersDef = '1234567890';
  var lowercaseDef = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseDef = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var specialCharDef = '!@#$%^&*()-_=+`~,.<>/?\|;:';

  //THIS IS  N O T  AR
  var array = [numbersDef, lowercaseDef, uppercaseDef, specialCharDef];
  var arrayEmpty = [];
  var charset = (ar[0] + ar[1] + ar[2] + ar[3]);

	var result = "";
	for (var i = 0; i < len; i++)
		result += charset[randomInt(charset.passLength)];
	return result;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

