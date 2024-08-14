const otpinputs = document.querySelectorAll("input"),
    button = document.querySelector("button"),
    mobile=document.getElementById("mobile"),
    expire = document.getElementById("expire");
   let otp=""
   let expireInterval="";
  
function OTPgenerator() {
    otp  =
        Math.floor(Math.random() * 10) +
        "" +
        Math.floor(Math.random() * 10) +
        "" +
        Math.floor(Math.random() * 10) +
"" +
Math.floor(Math.random() * 10);

       
       alert("Your OTP is :  " +otp)      
    
       window.onload= ()=> otpinputs[0].focus();
expire.innerText=20;
 expireInterval= setInterval(function()
{
    expire.innerText--;
    if(expire.innerText==0)
    {
        clearInterval(expireInterval);
    }
},1000);
}

otpinputs.forEach((input)=>
{
input.addEventListener('input',()=>
{
 const currentInput=input
 const nextInput=currentInput.nextElementSibling
 if(currentInput.value.length>1 && currentInput.value.length==2)
 {
    currentInput.value=""
 }
 if(nextInput!==null && nextInput.hasAttribute('disabled')&& currentInput.value!=="")
 {
    nextInput.removeAttribute('disabled')
    nextInput.focus()
 }
if(!otpinputs[3].disabled && otpinputs[3].value!=="")
{
    button.classList.add("active")

}
else
{
    button.classList.remove("active")
}

});
});
function clearotp()
    {
        
        otpinputs.forEach((input)=>
        {
           
        input.setAttribute("disabled",true);
         
            });
            clearInterval(expireInterval);

            expire.innerText==0;
           
            button.classList.remove("active");
          
           
    }

window.addEventListener("load",() =>
{
   let mobinput=prompt("Please Enter your mobile number to verify your account");
   
   if(mobinput)
   {
    mobile.innerText=mobinput;
    OTPgenerator();
   }
});

 button.addEventListener('click',()=>
{

    let verifyotp="";
    otpinputs.forEach((input)=>
    {
        verifyotp += input.value;
        });
       
         if(verifyotp===otp)
        {
alert("You are successfully logged in ! Congratulations")
    
    
        clearotp();
        
        
 
        }

        else{
            alert("Enter correct OTP code");
            return false;
           
            
        
    }

})




 

