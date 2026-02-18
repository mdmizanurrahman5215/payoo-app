console.log("withdraw connected");

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const agentNumber = getInputFromId("agent-number");
  const amount = getInputFromId("withdraw-amount");
  if (amount < 1) {
    alert("Invalid balanced");
    return;
  }
  const pin = getInputFromId("withdraw-pin");
  const balance = getBalanced();
  if (agentNumber == "01234567890" && amount > 0 && pin == "1234") {
   
    let newBalance = balance - Number(amount);
    updateBalance(newBalance);

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
        <h1> Withdraw </h1>
       <p>${new Date().toLocaleString()}</p>
      </div>
    </div>
    <div class="right">
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
`;

    transaction.appendChild(div);

    alert(`Successfully withdraw ${amount}`);
  } else {
    alert("Withdraw failed");
    return;
  }
});
