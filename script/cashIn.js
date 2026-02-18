 console.log("cash in connected");

 document.getElementById("cashin-btn").addEventListener("click", function(){
    // get bank 
 const selectedBank = document.getElementById("select-bank")
 const bank  = selectedBank.value;
 const accountNumber = document.getElementById("account-number")
 const account  = accountNumber.value;
 const cashinAmount = document.getElementById("cashIn-amount")
 const amount  = cashinAmount.value;
 const accountPin = document.getElementById("account-pin")
 const pin  = accountPin.value;
 const balanceElem = document.getElementById("balance")
 let balance = balanceElem.innerText
 console.log(balance);
 

 if(amount < 1){
    console.log("invalid ammount");
    
 return;
 }

 if(  (bank === "BRAC" || bank === "DUTCH" || bank === "CITY") && account == "01234567890" && Number(amount) > 0 && pin == "1234"){
     
      let newBalance = Number(balance) + Number(amount);
      balanceElem.innerText = newBalance
      console.log(newBalance);
      
       console.log("cash in successfully");
      
     
      
 }
 else{
    
    console.log("invalid input");
    
    return
 }
 

    
 })
 