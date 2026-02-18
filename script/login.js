
document.getElementById("login-btn").addEventListener("click", function(){
  
    // get mobile number 
    const numberInput = document.getElementById("input-number")
   const number = numberInput.value;
   console.log(number);
//    get pin 
   const pinInput = document.getElementById("input-pin")
   const pin = pinInput.value;
   console.log(pin);
    
   if(number == "01234567890" && pin == "1234"){
   console.log("login sucess");
   window.location.assign("./pages/home.html")
//    window.location.replace("./pages/home.html")
   
   }else{
    console.log("login failed");
    return;
    
   }

   
    
})