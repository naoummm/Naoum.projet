var Fname = document.getElementById("form3Example1");
var lblError0 = document.getElementById("lblError0");
var Lname = document.getElementById("form3Example2");
var lblError1 = document.getElementById("lblError1");

var email = document.getElementById("form3Example3");
var lblError = document.getElementById("lblError");
var passwd1 = document.getElementById("form3Example5");
var lblError3 = document.getElementById("lblError3");
var passwd = document.getElementById("form3Example4");
var lblError2 = document.getElementById("lblError2");
var t;
document.getElementById("form3Example3").onkeyup = function() {
  var email = document.getElementById("form3Example3");
  var lblError = document.getElementById("lblError");
  lblError.innerHTML = "s";
  lblError.style.color = 'transparent';
  email.style.borderColor = "";
t= 0;
  var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if(email.value === ""){
      email.style.borderColor = 'red';
      lblError.style.color = 'red';
      lblError.innerHTML = "Empty";
      t = 1;
  }
  else if (!expr.test(email.value)) {
      email.style.borderColor = 'red';
      lblError.style.color = 'red';
      lblError.innerHTML = "Email wrong Format";
      t = 1;

  }
}
var d;
document.getElementById("form3Example4").onkeyup = function() {
      
      lblError2.innerHTML = "s";
      lblError2.style.color = 'transparent';
      passwd.style.borderColor = "";
   d = 0;
      var exp= /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
      if(passwd.value === ""){
        passwd.style.borderColor = 'red';
        lblError2.style.color = 'red';
        lblError2.innerHTML = "Empty";
        d = 1;
    }
     else if(!exp.test(passwd.value)){
          passwd.style.borderColor = 'red';
          lblError2.style.color = 'red';
          lblError2.innerHTML = "Password Not Secure Enough";
          d=1
      }
  }
  
  var u;
document.getElementById("form3Example5").onkeyup = function() {
  
      lblError3.innerHTML = "Password is the Same";
      lblError3.style.color = 'green';
      passwd1.style.borderColor = "green";
   u = 0;
   if(!(passwd.value === passwd1.value )){
    passwd1.style.borderColor = 'red';
          lblError3.style.color = 'red';
          lblError3.innerHTML = "Doesn't Match";
          u=1;
   }

}
var p;
document.getElementById("form3Example1").onkeyup = function namefunction()
 {
      lblError0.innerHTML = "s";
      lblError0.style.color = 'transparent';
      Fname.style.borderColor = "";
      p = 0;
      if( Fname.value === ""){
        lblError0.innerHTML = "Enter YOUR NAME";
        lblError0.style.color = 'red';
        Fname.style.borderColor = "red";
        p =1;
      }else if(Fname.value.length <=3 || Fname.value.length>25)
      {
        lblError0.innerHTML = "between 3 and 25 ";
        lblError0.style.color = 'red';
        Fname.style.borderColor = "red";
        p = 1;
      } 
      }
      var o
      document.getElementById("form3Example2").onkeyup = function namefunction()
 {
      lblError1.innerHTML = "s";
      lblError1.style.color = 'transparent';
      Lname.style.borderColor = "";
      o = 0;
      if( Lname.value === ""){
        lblError1.innerHTML = "Enter YOUR SURNAME";
        lblError1.style.color = 'red';
        Lname.style.borderColor = "red";
        o =1;
      }else if(Lname.value.length <=3 || Lname.value.length>25)
      {
        lblError1.innerHTML = "between 3 and 25 ";
        lblError1.style.color = 'red';
        Lname.style.borderColor = "red";
        o = 1;
      } 
      }
document.getElementById("LOL").onclick = function()
{  
     if (t == 0 && d == 0 && u == 0 && (p==0 && o==0)) 
    document.getElementById("LOL").href="main.html" ;
 
    
} 

// // const form = document.getElementById('my_form');

// // form.addEventListener('submit', function handleSubmit(event) {
// //   event.preventDefault();

// //   // 👇️ Send data to server here

// //   // 👇️ Reset form here
// //   form.reset();
// // });