
console.log("bonus connected");

document.getElementById("coupon-btn").addEventListener("click", function () {
  const coupon = getInputFromId("coupon-input");

  const amount = 1000
 
  const balance = getBalanced();
  if (coupon == "payoo") {
    let newBalance =balance + amount;
    updateBalance(newBalance);

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
        <h1> Get Bonus ${amount} </h1>
        <p>${new Date().toLocaleString()}</p>
      </div>
    </div>
    <div class="right">
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
`;

    transaction.appendChild(div);


    alert("Successfully added bonus");
  } else {
    alert("Bonus failed");
    return;
  }
});
