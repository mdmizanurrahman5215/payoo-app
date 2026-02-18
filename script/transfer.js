console.log("withdraw connected");

document.getElementById("transfer-btn").addEventListener("click", function () {
  const userAccountNumber = getInputFromId("user-account-number");
  const amount = getInputFromId("transfer-amount");
  if(amount < 1){
    alert("Invalid balanced")
  return;
  }

  const pin = getInputFromId("transfer-pin");
  const balance = getBalanced();
  if (userAccountNumber == "01234567890" && amount > 0 && pin == "1234") {
    let newBalance = balance - Number(amount);
    updateBalance(newBalance);
    alert(`Successfully Transfer ${amount}`);
  } else {
    alert("Transfer failed");
    return;
  }
});
