// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

////////////////////////////////////////////////////////////////////////////////////////

function generateRandomNum () {
  return Math.floor(Math.random() * 99 ) + 10;
  }

function generateRandomSpec () {
    const specChar = "!@#$%^&*"
    return specChar[Math.floor(Math.random() * specChar.length)]
    }
      

function generateRandomUpp () {
    const uppChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
          return uppChar[Math.floor(Math.random() * uppChar.length)]
    }

function generateRandomLow () {
    const charDefault = "abcdefghijklmnopqrstuvwxyz"
          return charDefault[Math.floor(Math.random() * charDefault.length)]
      } 

var genPass = "";
var frag1 = "";
var frag2 = "";
var frag3 = "";
var frag4 = "";

function myFunction () {
  counter = 0;
  var charLength = prompt("How many characters would you like your password to contain?");
  if (charLength >= 8 && charLength <=128) {
    console.log(charLength);
      } else {
        charLength = prompt("Please enter a number between 8 & 128");
        console.log(charLength);
      }
var charNum = confirm("Do you want numbers for your password?");
  if (charNum == true) {
      counter = counter + 1;
      frag1 = generateRandomNum();
      document.getElementById("password").innerHTML = generateRandomNum();
      console.log(frag1);
      console.log(counter);
      } else {
      document.getElementById("password").innerHTML = generateRandomLow();
      console.log(counter);
      }
var charSpec = confirm("Do you want special characters in your password");
  if (charSpec == true) {
    counter = counter + 1;
    frag2 = generateRandomSpec() + generateRandomSpec();
    document.getElementById("password").innerHTML = (generateRandomSpec());
    console.log(frag2);
    console.log(counter);
  } else { 
    document.getElementById("password").innerHTML = generateRandomLow();
    console.log(generateRandomLow());
    console.log(counter);
  }
var charUpp = confirm("Do you want upper cases letters in your password?");
  if (charUpp == true) {
    counter = counter + 1;
    frag3 = generateRandomUpp() + generateRandomUpp();
    console.log(frag3);
    console.log(counter);
      } else {
      console.log(generateRandomLow());
  }
  
  var genLowNum = charLength - (counter*(2));

var i = genLowNum //4
for (var i = 0; i < genLowNum; i++) { // i++ = i + 1 // i = iniat starting pt; 0 < genLowNum; 0 + 1
  frag4 = frag4 + generateRandomLow();
}
  genPass = frag1 + frag2 + frag3 + frag4;
  document.getElementById("password").innerHTML = genPass;
  console.log(genPass);
}



      