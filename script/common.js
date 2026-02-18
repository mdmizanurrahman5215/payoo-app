console.log("common connected");



const getInputFromId = (id) => {
  const getResult = document.getElementById(id);
  const result = getResult.value;

  return result;
};

const getBalanced = () => {
  const balanceElem = document.getElementById("balance");
  const balance = balanceElem.innerText;
  return Number(balance);
};

const updateBalance = (newBalance)=>{
  const balanceElem = document.getElementById("balance");
 balanceElem.innerText = newBalance;
}
const showOnly =(id)=>{
    const addmoney = document.getElementById("add-money-container")
    addmoney.classList.add("hidden")
    const withdraw = document.getElementById("withdraw-container")
    withdraw.classList.add("hidden")
    
    const transfer = document.getElementById("transfer-container")
    transfer.classList.add("hidden")
    const bonus = document.getElementById("bonus-container")
    bonus.classList.add("hidden")
    const transactionHistory = document.getElementById("transaction-container")
    transactionHistory.classList.add("hidden")
    const pay = document.getElementById("pay-container")
    pay.classList.add("hidden")
    
  const getElem = document.getElementById(id); 
  console.log(getElem);
  
  getElem.classList.remove("hidden")
}

