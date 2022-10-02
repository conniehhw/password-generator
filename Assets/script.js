// Assignment code here


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

////////////////////////////////////////////////////////////////////////////////////////

// This runs the function - when press button "generate password", pop up questions
function myFunction() { 
  let charLength = prompt("How many characters would you like your password to contain?");
    if (charLength <8 || charLength > 128) {
      prompt("Please choose a number between 8 & 128");
      let charNum = confirm("Do you want numbers for your password?");
      let charSpec = confirm("Do you want special characters in your password");
      let charUppLow = confirm("Do you want Upper and Lower case letters in your password"); 
    }
  }

function generateRandomNum () {
  return Math.floor(Math.random() * 99 ) + 10;
}
  console.log(generateRandomNum());


function generateRandomLow () {
  const charDefault = "abcdefghijklmnopqrstuvwxyz"
  return charDefault[Math.floor(Math.random() * charDefault.length)]
  } 
  console.log(generateRandomLow());

 //Number randomizer broken// 

// Q2. Do you want special? function to execute a random spec if true
function generateRandomSpec () {
  const specChar = "!@#$%^&*"
  return specChar[Math.floor(Math.random() * specChar.length)]
}
  console.log(generateRandomSpec());

  if (charSpec = true) {
    generateRandomSpec();
    console.log();
    //document.getElementById("demo").innerHTML = specLib;
  } else {
    /*document.getElementById("demo").innerHTML = charSpec;*/
  console.log(charDefault);
  }


  //Q3. Do you want Upper? function to execute 
function generateRandomUpp () {
  const uppChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return uppChar[Math.floor(Math.random() * uppChar.length)]
}
console.log(generateRandomUpp());

  if (charUpp = true) {
    generateRandomUpp();
      console.log();
  } else{ 
    console.log(charDefault);
  }
  
/*let z = 0;
z = z + 1;
z = z + 1;

let stringNum = "99";
Math.floor((Math.random() * 99) + 10);

let stringSpec = "#$";
let stringUpper = "CH";
let stringLower = "th";
let passwordString = (stringNum + stringSpec + stringUpper + stringLower);
console.log(passwordString); {
    document.getElementById("demo").innerHTML = alert("Thank you for your input");
       } else {prompt("Please choose a number between 8 & 128");
      }
    */