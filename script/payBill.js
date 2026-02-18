console.log("pay bill");

console.log("cash in connected");

document.getElementById("pay-btn").addEventListener("click", function () {
  // get bank

  const method = getInputFromId("select-method");
  console.log(method);
  if (method === "") {
    alert("Select a method");

    return;
  }

  const billerAccount = getInputFromId("biller-account-number");
  if (billerAccount.length !== 11) {
    alert("invalid account number");
    return;
  }

  console.log(billerAccount);

  const ammount = getInputFromId("pay-amount")
  if(ammount < 1){
    alert("Invalid ammount")
    return

  }
  const pin = getInputFromId("pay-pin")
   if (pin.length !== 4) {
  alert("invalid pin number");
    return;
  }
   const balance = getBalanced()
   console.log(balance);



 if( method && billerAccount == "01234567890" && ammount && pin =="1234" ){
    const newBalance = balance - Number(ammount)
    updateBalance(newBalance)
    alert("Bill payed successfully")
    

 }else{
    alert("Something Wrong ! please give valid input")
    return
}

   


});
