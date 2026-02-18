console.log("cash in connected");

document.getElementById("addmoney-btn").addEventListener("click", function () {
  // get bank

  const bank = getInputFromId("select-bank");
  console.log(bank);
  if (bank === "") {
    alert("Select a bank");

    return;
  }
  const bankAccount = getInputFromId("account-number");
  if (bankAccount.length !== 11) {
    alert("invalid account number");
    return;
  }

  console.log(bankAccount);

  const ammount = getInputFromId("addmoney-amount")
  if(ammount < 1){
    alert("Invalid ammount")
    return

  }
  const pin = getInputFromId("addmoney-pin")
   if (pin.length !== 4) {
  alert("invalid pin number");
    return;
  }
   const balance = getBalanced()
   console.log(balance);

 if( bank && bankAccount == "01234567890" && ammount && pin =="1234" ){
    const newBalance = balance + Number(ammount)
    updateBalance(newBalance)
    alert("balanced added successfully")

 }else{
    alert("Something Wrong")
    return
}

   


});
