let balance = 0;
function updateBalance() {
    document.getElementById("balance").innerText = "₹" + balance;
}
function addMoney(amount) {
    balance += amount;
    updateBalance();
    document.getElementById("message").innerText = "Money Added Successfully!";
}
function withdrawMoney() {
    let withdrawAmount = parseInt(document.getElementById("withdrawAmount").value);
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        document.getElementById("message").innerText = "Enter valid amount!";
        return;
    }
    if (withdrawAmount > balance) {
        document.getElementById("message").innerText = "❌ Insufficient Balance!";
    } else {
        balance -= withdrawAmount;
        updateBalance();
        document.getElementById("message").innerText = "Withdrawal Successful!";
    }
    document.getElementById("withdrawAmount").value = "";
}