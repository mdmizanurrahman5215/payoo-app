console.log("withdraw connected");

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const agentNumber = getInputFromId("agent-number");
  const amount = getInputFromId("withdraw-amount");
  if(amount < 1){
    alert("Invalid balanced")
  return;
  }
  const pin = getInputFromId("withdraw-pin");
  const balance = getBalanced();
  if (agentNumber == "01234567890" && amount > 0 && pin == "1234") {
    let newBalance = balance - Number(amount);
    updateBalance(newBalance);
    alert(`Successfully withdraw ${amount}`);
  } else {
    alert("Withdraw failed");
    return;
  }
});
