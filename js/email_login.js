

function loginform()
{
  const mobileno=document.forms['myform']['mobile'].value;
   if((mobileno.charAt(0)!=9) && (mobileno.charAt(0)!=8) && (mobileno.charAt(0)!=7)&&(mobileno.charAt(0)!=6))
   {
    alert("Mobile number must start with 9,8,7 or 6");
    return false;
   }
    else
    if(mobileno.length<10)
  {
    alert("Please Enter a 10-digit number");
    return false;
  }
  else
  if(mobileno.length>10)
  {
    alert("Mobile number must be of 10 digits");
    return false;
  }
 
}


