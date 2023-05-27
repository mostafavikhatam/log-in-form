
// .......................Random Background...................
function changebackground(){
      const imageobject = [
        'url("1.jpg")',
        'url("2.jpg")',
        'url("3.jpg")',
        'url("4.jpg")',
        'url("5.jpg")',
        'url("6.jpg")',
        'url("7.jpg")',
      ]
      const bodybg = document.querySelector('.container');
      const bg = imageobject[Math.floor(Math.random()*imageobject.length)];
      
        bodybg.style.backgroundImage = bg

};

setInterval(changebackground,3000)

// ........................Determine............................
const usernameElem =document.getElementById("username"); 
const passwordElem = document.getElementById("password");
const emailElem = document.getElementById("email");
const errorusername = document.querySelector(".Error--username");
const errorpassword = document.querySelector(".Error--password");
const erroremail = document.querySelector(".Error--email");
 

  
//...............................Condition........................
  usernameElem.addEventListener("keyup",(event)=>{
    errorpassword.style.display = "none"
    erroremail.style.display = "none"
    const letter = /^[a-zA-Z]+$/;
    
    if(usernameElem.value===""||usernameElem.value.length>15||!usernameElem.value.match(letter)){
   
      errorusername.style.display="block";
      return false
    
  }else {
    errorusername.style.display = "none"
    return true
    
  }
    
   });
   passwordElem.addEventListener("keyup",(event)=>{ 
    const letterNumber =  /^[a-zA-Z0-9]+$/;
    errorpassword.style.display = "none"
    erroremail.style.display = "none"
      if(passwordElem.value===""||passwordElem.value.length<8||!passwordElem.value.match(letterNumber)){
        errorpassword.style.display = "block"
        return false
      }
      
      return true
     
   });
   emailElem.addEventListener("keyup",(event)=>{
      if(emailElem.value.search("@gmail.com") == -1 ){
        erroremail.style.display = "block"
        return false
      }
      erroremail.style.display = "none"
      return true
   });








  


