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

// This runs the function - when press button "generate password", pop up questions

function myFunction() { 
  let charLength = prompt("How many characters would you like your password to contain?");
  if (charLength >= 8 && charLength <=128) {
    let charNum = "Do you want numbers for your password?";
    let charSpec = "Do you want special characters in your passoword?"
    let charUpp = "Do you want upper cases letters in your password?"
    if (confirm(charNum) == true, confirm(charSpec) == true, confirm(charUpp) == true) {
        document.getElementById("password").innerHTML = generateRandomNum() + generateRandomSpec() + generateRandomUpp() + generateRandomLow();
    } else if (confirm(charNum) == false, confirm(charSpec) == true, confirm(charUpp) == true) {
      document.getElementById("password").innerHTML = generateRandomSpec() + generateRandomUpp + generateRandomLow();
} else if (confirm(charNum) == false, confirm(charSpec) == false, confirm(charUpp) == true) {
      document.getElementById("password").innerHTML = + generateRandomUpp + generateRandomLow();
} else (confirm(charNum) == false, confirm(charSpec) == false, confirm(charUpp) == false) 
      document.getElementById("password").innerHTML = generateRandomLow();
      } else {document.getElementById("password").innerHTML = "nothing"}
}
  
  
  
 /* if (confirm(charNum) == false, confirm(charSpec) == true, confirm(charUpp) == true) {
        document.getElementById("password").innerHTML = generateRandomSpec() + generateRandomUpp + generateRandomLow();
  } else if (confirm(charNum) == false, confirm(charSpec) == false, confirm(charUpp) == true) {
        document.getElementById("password").innerHTML = + generateRandomUpp + generateRandomLow();
  } else (confirm(charNum) == false, confirm(charSpec) == false, confirm(charUpp) == false) 
        document.getElementById("password").innerHTML = generateRandomLow();
  } else {document.getElementById("password").innerHTML = "nothing"}
}
    


  /*if (confirm(charNum) == true, confirm(charSpec) == true, confirm(charUpp) == true) {
    generatePassword = generateRandomNum() + generateRandomSpec() + generateRandomUpp()


  /*let charSpec = confirm("Do you want special characters in your password");
    if (confirm(charSpec) == true) {
      generateRandomSpec();
      document.getElementById("demo").innerHTML = generateRandomSpec();
    } else {
    generateRandomLow();
    document.getElementById("demo").innerHTML = generateRandomLow();
    }     
  


  /*let charSpec = "Do you want special characters in your password";
      if (confirm(charSpec) == true) {
        generateRandomSpec();
        document.getElementById("demo").innerHTML = generateRandomSpec();
      } else {
        generateRandomLow();
        document.getElementById("demo").innerHTML = generateRandomLow();
      }

  
  let charUppLow = "Do you want Upper and Lower case letters in your password"; 
        if (confirm(charUppLow) == true) {
            generateRandomUpp();
            document.getElementById("demo").innerHTML = generateRandomUpp();
        } else {
        generateRandomLow();
        document.getElementById("demo").innerHTML = geneateRandomLow();
      }
    

      /*let charLength = prompt("Please choose a number between 8 & 128");
      let charNum = confirm("Do you want numbers for your password?");
      let charSpec = confirm("Do you want special characters in your password");
      let charUppLow = confirm("Do you want Upper and Lower case letters in your password"); 
    }
  }*/
  
/*function myFunction() { 
  let charLength = prompt("How many characters would you like your password to contain?");
  if (charLength >= 8 && charLength <=128) {
    let charNum = confirm("Do you want numbers for your password?");
      let charSpec = confirm("Do you want special characters in your password");
      let charUppLow = confirm("Do you want Upper and Lower case letters in your password"); 
  } else {
      prompt("Please choose a number between 8 & 128");
      let charNum = confirm("Do you want numbers for your password?");
      let charSpec = confirm("Do you want special characters in your password");
      let charUppLow = confirm("Do you want Upper and lower case letters in your password"); 
    } 
  }
*/


  function generateRandomNum () {
    return Math.floor(Math.random() * 99 ) + 10;
    } console.log(generateRandomNum());

  function generateRandomLow () {
  const charDefault = "abcdefghijklmnopqrstuvwxyz"
  return charDefault[Math.floor(Math.random() * charDefault.length)]
  } 
    console.log(generateRandomLow());

function generateRandomSpec () {
  const specChar = "!@#$%^&*"
  return specChar[Math.floor(Math.random() * specChar.length)]
  }
    console.log(generateRandomSpec());

function generateRandomUpp () {
  const uppChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return uppChar[Math.floor(Math.random() * uppChar.length)]
  }
  console.log(generateRandomUpp());

/*let text = charNum;
  if (confirm(text) == true) {
      generateRandomNum();
      document.getElementById("demo").innerHTML = generateRandomNum();
  } else {generateRandomLow();
    document.getElementById("demo").innerHTML = generateRandomLow();
  }*/

  /*
  document.getElementById("demo").innerHTML = charNum;

    generateRandomNum();
    document.getElementById("demo").innerHTML = generateRandomNum();
  



/*
if (charNum = true) {
  document.getElementById("demo").innerHTML = true
} else {
  /*document.getElementById("demo").innerHTML = charSpec;
console.log(charDefault);
}

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