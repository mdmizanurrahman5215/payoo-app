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

    // transfer history 
    const transaction = document.getElementById("transaction-container");
    const div = document.createElement("div");
    div.className =
      "flex justify-between items-center rounded-md shadow-md bg-base-100 py-4 px-4 mb-4";

    div.innerHTML = `
    <div class="left flex gap-4 items-center">
      <div class="border-4 border-primary bg-base-200 p-2 rounded-full">
        <img src="../assets/opt-1.png" alt="" />
      </div>
      <div class="flex flex-col">
        <h1> Add Money ${ammount} from ${bank} </h1>
        <p>${new Date().toLocaleString()}</p>
      </div>
    </div>
    <div class="right">
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
`;

    transaction.appendChild(div);


    alert("balanced added successfully")


 }else{
    alert("Something Wrong")
    return
}

   


});
