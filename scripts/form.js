//Last modified Date as value
let dv= document.lastModified;
document.querySelector(".full-datev").value=dv;

//This function validates if a name was submited properly was submitted properly
function validate(){
  const input = document.querySelector('.Validator').value;
  const phoneInput =document.querySelector('.phoneValidator').value;
  let validation2= /^[0-9\s]*$/;
  let validation = /^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/;
  let result = validation.test(input);
  let result2 = validation2.test(phoneInput);
  if(result == false && input!=="")
  {
    alert("Please enter a name");
    document.querySelector('.Validator').style.border="red solid 2px";
    return false;
  }
  if(result2 == false && phoneInput!=="")
  {
    alert('Please enter a valid phone number');
    document.querySelector('.phoneValidator').style.border="red solid 2px";
    return false;
  }
  return true;
};