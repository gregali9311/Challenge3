// Assignment Code
var generateBtn = document.querySelector("#generate");



var charlength=10;
var upper = true;
var special = true;
var addnumbers = true;



  charlength = prompt("How many characters would you like? (Range between 8-128)");
  console.log(charlength)
  for( i=0; i<5000; i ++){
    if( charlength< 8) {
      alert("You haven't followed instructions");
      charlength = window.prompt("Password Length (Greater than 8 char, but less than 128");
    }else if (charlength>128) {
      alert("Not so good with instructions, are we?");
      charlength = window.prompt("Password Length (Greater than 8 char, but less than 128");
    } else{
      break;
    }
      }
  
    

  upper = confirm ("Would you like an upper case character? Okay= Yes, Cancel=No");
 

  special = confirm("Do you want any special characters? Okay= Yes, Cancel = No");
  

  addnumbers = confirm ("Do you want numbers in password? Okay = Yes, Cancel = No");
  


  var upperalphabet ="BCDEFGHIJKLMNOPQRSTUVWXYZ";
  var loweralphabet ="abcdefghijklmnopqrstuvwxyz";
  var numbers = "123456789"
  var specoptions = "#$%^&!)(*?"

  var password1 ="";
  var upperstring ="";
  var lowerstring ="";

  var randnum= numbers.charAt(Math.floor(Math.random()*numbers.length));
  var randspec =specoptions.charAt(Math.floor(Math.random()*specoptions.length));

  for( var i=0; i<128; i++){
    upperstring +=upperalphabet.charAt(Math.floor(Math.random()*(upperalphabet.length))); 
  }
  for( var i=0; i<128; i++){
    lowerstring +=loweralphabet.charAt(Math.floor(Math.random()*(upperalphabet.length))); 
  }


  console.log(upperstring)
  console.log(upperstring.length)
  console.log(lowerstring)
  console.log(lowerstring.length)

  function misc(){
    if(upper == false && special == false && addnumbers == false){
      password1 = lowerstring.slice(0,charlength);
      } else if (upper == false && special == true && addnumbers == false){
        password1 = lowerstring.slice(0,charlength-1)+randspec;
      } else if (upper == false && special == false && addnumbers == true) {
        password1 =lowerstring.slice(0,charlength-1)+randnum;
      } else if (upper == false && special == true && addnumbers == true) {
        password1 =lowerstring.slice(0,charlength-2)+randnum + randspec;
      } else if (upper == true && special == true && addnumbers == true) {
        password1 =lowerstring.slice(0,charlength/2-2)+randnum + randspec+ upperstring.slice(0,charlength/2);
      } else if (upper == true && special == false && addnumbers == true) {
        password1 =lowerstring.slice(0,charlength/2-1)+randnum + upperstring.slice(0,charlength/2);
      } else if (upper == true && special == true && addnumbers == false) {
        password1 =lowerstring.slice(0,charlength/2-1)+ randspec + upperstring.slice(0,charlength/2);
  }     
  }

  misc();
console.log(misc())
console.log(password1.length)
console.log(password1)


String.prototype.shuffle = function () {
  var a = this.split(""),
      n = a.length;

  for(var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
  }
  return a.join("");
}

// Write password to the #password input
function writePassword() {
  
  var password = password1.shuffle();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
console.log(password1.shuffle())
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




