
console.log("bonus connected");

document.getElementById("coupon-btn").addEventListener("click", function () {
  const coupon = getInputFromId("coupon-input");

  
 
  const balance = getBalanced();
  if (coupon == "payoo") {
    let newBalance =balance + 1000;
    updateBalance(newBalance);
    alert("Successfully added bonus");
  } else {
    alert("Bonus failed");
    return;
  }
});
