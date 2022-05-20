
function matchPassword() {  
    var pw1 = document.getElementById("pass1").value;  
    var pw2 = document.getElementById("pass2").value;  

    var main=document.getElementById("main");
    var main_2=document.getElementById("main_2");

    if(pw1 != pw2)  
    {   
      alert("plz check the following condition if your password getting wrong : 1.both password should be match. 2.password length should be less than 8.  3.the password contains characters only from the alphabet");  
    } else {  
      main.style.display="none"; 
      main_2.style.display="block";
      alert("Password reset successfully"); 
    }  
  }  
