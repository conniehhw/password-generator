// Password Generator

// References to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Functions to generate Random Numbers, Special characters & Upper & lower case letters
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

// The generated Password will consist of Fragment 1 + Frag 2 + Frag 3 + Frag 4 (Fragment 4 being a filler)
var genPass = "";
var frag1 = "";
var frag2 = "";
var frag3 = "";
var frag4 = "";

// Click on button to begin
function myFunction () {
  counter = 0;
  var charLength = prompt("How many characters would you like your password to contain?");
  if (charLength >= 8 && charLength <=128) {
    console.log(charLength); // Testing purposes
      } else {
        charLength = prompt("Please enter a number between 8 & 128");
        console.log(charLength);
      }
var charNum = confirm("Would you like to include numbers for your password? (Okay means yes, Cancel means no)");
  if (charNum == true) {
      counter = counter + 1;
      frag1 = generateRandomNum();
      document.getElementById("password").innerHTML = generateRandomNum();
      console.log(frag1); // Testing purposes
      console.log(counter);
      } else {
      document.getElementById("password").innerHTML = generateRandomLow();
      console.log(counter);
      }
var charSpec = confirm("Would you like to include special characters in your password? (Okay means yes, Cancel means no)");
  if (charSpec == true) {
    counter = counter + 1;
    frag2 = generateRandomSpec() + generateRandomSpec();
    document.getElementById("password").innerHTML = (generateRandomSpec());
    console.log(frag2); //Testing purposes
    console.log(counter);
  } else { 
    document.getElementById("password").innerHTML = generateRandomLow();
    console.log(generateRandomLow());
    console.log(counter);
  }
var charUpp = confirm("Would you like to include upper case letters in your password? (Okay means yes, Cancel means no)");
  if (charUpp == true) {
    counter = counter + 1;
    frag3 = generateRandomUpp() + generateRandomUpp();
    console.log(frag3); // Testing purposes
    console.log(counter);
      } else {
      console.log(generateRandomLow());
  }
  
 // To generate the number of lower case letters (fillers) needed to fulfill length of characters in password
 // and also count the number of 'Yes/Okay' replies to criterias selected for password (#, Special Characters, Uppercase) 
var genLowNum = charLength - (counter*(2));

// To generate number of filler lower case letters for fragment 4
var i = genLowNum 
for (var i = 0; i < genLowNum; i++) { // i++ = i + 1 // i = initiate starting pt; 0 < genLowNum; 0 + 1
  frag4 = frag4 + generateRandomLow();
}

// Generate and write the password in the browser
  genPass = frag1 + frag2 + frag3 + frag4;
  document.getElementById("password").innerHTML = genPass;
  console.log(genPass); // testing purposes
}



      