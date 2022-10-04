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

/*function generatePassword () {
if (confirm(charNum === true)) {
  counter = 0;
  counter = counter + 1;
  document.getElementById("password").innerHTML = generateRandomNum();
} else {
  document.getElementById("password").innerHTML = "";
}

if (confirm(charSpec) === true) {
  counter = counter + 1;
  document.getElementById("password").innerHTML = generateRandomSpec();
} else { 
  document.getElementById("password").innerHTML = "";
}

if (confirm(charUpp) === true) {
  counter = counter + 1;
  document.getElementById("password").innerHTML = generateRandomUpp();
} else { 
  document.getElementById("password").innerHTML = "";
}
}*/

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
var charNum = confirm("Do you want numbers for your password?");
  if (charNum == true) {
      counter = counter + 1;
      frag1 = generateRandomNum();
      document.getElementById("password").innerHTML = generateRandomNum();
      console.log(frag1);
      console.log(counter);
      } else if (charNum == false) {
      document.getElementById("password").innerHTML = generateRandomLow();
      console.log(counter);
      }
var charSpec = confirm("Do you want special characters in your password");
  if (charSpec == true) {
    counter = counter + 1;
    frag2 = generateRandomSpec() + generateRandomSpec();
    //frag2 = frag2 + generateRandomSpec();
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
    //frag3 = frag3 + generateRandomUpp();
    //document.getElementById("password").innerHTML = generateRandomUpp();
    console.log(frag3);
    console.log(counter);
      } else {
      //document.getElementById("password").innerHTML = generateRandomLow();
      console.log(generateRandomLow());
  }
  
  var genLowNum = charLength - (counter*(2));

var i = genLowNum //4
for (var i = 0; i < genLowNum; i++) { // i++ = i + 1
  // i = iniat starting pt; 0 < genLowNum; 0 + 1
  frag4 = frag4 + generateRandomLow();
}

  genPass = frag1 + frag2 + frag3 + frag4;
  document.getElementById("password").innerHTML = genPass;
  console.log(genPass);

  

  /*var wrtPassword = concat(charNum, charSpec, charUpp);
  console.log(wrtPassword);
  
  var i = charLowRandNum;
  for (var i = 0; i < 8; i++) {
    console.log("The number is " + i);
  }*/

  //var genPassword = charLength + charNum + charSpec + charUpp;
  //console.log(genPassword);
}
}



/*var charLength = charLength;
console.log(charLength);

var charLow = (charLength) - ((counter)*2)
console.log(charLow);

/*var i = 5; // i = password // password = frg 1 + frg 2 + frg 3 + frg 4 
//frg 4 = generateRandomLow * (charLength)-((counter)*2)
// output = generateRandom Low * ((14)-((3)*2) = 14 - 6 = 8
// yes yes yes filler = 12#$AAbbbbbbbb = password

for (var i = 0; i < 10; i++) {
  //some code
}

//Here is 10

function writePassword() {
  document.getElementById("password").innerHTML = generateRandomNum() + generateRandomSpec() + generateRandomUpp();
};*/

/*function myFunction() { 
  var charLength = prompt("How many characters would you like your password to contain?");
  if (charLength >= 8 && charLength <=128) {
    charNum = confirm("Do you want numbers for your password?");
    charSpec = confirm("Do you want special characters in your passoword?");
    charUpp = confirm("Do you want upper cases letters in your password?");
  } else {  prompt("Please choose a number between 8 & 128");
    charNum = confirm("Do you want numbers for your password?");
    charSpec = confirm("Do you want special characters in your passoword?");
    charUpp = confirm("Do you want upper cases letters in your password?");
    }
}

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
    console.log(generateRandomUpp());*/




/*let charLength = i;
for (let i = 0; i >= 8 && i <=128; i - counter(2)) {
  document.getElementById("password").innerHTML = generateRandomLow() * charLength;
}

if (confirm(charNum) == true, confirm(charSpec) == true, confirm(charUpp) == true) {
        document.getElementById("password").innerHTML = generateRandomNum() + generateRandomSpec() + generateRandomUpp() + generateRandomLow();
    } else if (confirm(charNum) == false, confirm(charSpec) == true, confirm(charUpp) == true) {
      document.getElementById("password").innerHTML = generateRandomSpec() + generateRandomUpp + generateRandomLow();
} else if (confirm(charNum) == false, confirm(charSpec) == false, confirm(charUpp) == true) {
      document.getElementById("password").innerHTML = + generateRandomUpp + generateRandomLow();
} else (confirm(charNum) == false, confirm(charSpec) == false, confirm(charUpp) == false) 
      document.getElementById("password").innerHTML = generateRandomLow()
      } else {document.getElementById("password").innerHTML = "nothing"}
}
  */
  
 /* if (confirm(charNum) == false, confirm(charSpec) == true, confirm(charUpp) == true) {
        document.getElementById("password").innerHTML = generateRandomSpec() + generateRandomUpp + generateRandomLow();
  } else if (confirm(charNum) == false, confirm(charSpec) == false, confirm(charUpp) == true) {
        document.getElementById("password").innerHTML = + generateRandomUpp + generateRandomLow();
  } else (confirm(charNum) == false, confirm(charSpec) == false, confirm(charUpp) == false) 
        document.getElementById("password").innerHTML = generateRandomLow();
  } else {document.getElementById("password").innerHTML = "nothing"}
}*/
    


  /*if (confirm(charNum) == true, confirm(charSpec) == true, confirm(charUpp) == true) {
    generatePassword = generateRandomNum() + generateRandomSpec() + generateRandomUpp()


  /*let charSpec = confirm("Do you want special characters in your password");
    if (confirm(charSpec) == true) {
      generateRandomSpec();
      document.getElementById("demo").innerHTML = generateRandomSpec();
    } else {
    generateRandomLow();
    document.getElementById("demo").innerHTML = generateRandomLow();
    }  */   
  


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


/*let text = charNum;
  if (confirm(text) == true) {
      generateRandomNum();
      document.getElementById("demo").innerHTML = generateRandomNum();
  } else {generateRandomLow();
    document.getElementById("demo").innerHTML = generateRandomLow();
  }

  document.getElementById("demo").innerHTML = charNum;

    generateRandomNum();
    document.getElementById("demo").innerHTML = generateRandomNum();


if (charNum = true) {
  document.getElementById("demo").innerHTML = true
} else {
document.getElementById("demo").innerHTML = charSpec;
console.log(charDefault);
}

  if (charUpp = true) {
    generateRandomUpp();
      console.log();
  } else{ 
    console.log(charDefault);
  }
  
let z = 0;
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