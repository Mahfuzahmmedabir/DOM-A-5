
// Noakhali part
document.getElementById('btn-Noakhali').addEventListener('click', function () {
  const cash = getCurrentNumber('cash-balance');
  const getInput = getDonationInputNumber('Noakhali-input');
  const donationNumber = getCurrentNumber('get-balance');
  if (isNaN(getInput) || getInput <= 0 || getInput > cash ) {
    alert("Opps something worng")
    return alert
  } 
  const decreaseNumber = cash - getInput;
  const addedNumber = getInput + donationNumber;
  document.getElementById('cash-balance').innerText = decreaseNumber;
  document.getElementById('get-balance').innerText = addedNumber;
}); 
// feni part 
document.getElementById('feni-btn').addEventListener('click', function () {
  const cash = getCurrentNumber('cash-balance');
  const getInput = getDonationInputNumber('feni-input');
  const donationNumber = getCurrentNumber('get-balance-feni');
  if (isNaN(getInput) || getInput <= 0 || getInput > cash) {
    alert('Oops something worng');
    return alert;
  }
  const decreaseNumber = cash - getInput;
  const addedNumber = getInput + donationNumber;
  document.getElementById('cash-balance').innerText = decreaseNumber;
  document.getElementById('get-balance-feni').innerText = addedNumber;
});
// quota part
document.getElementById('quota-btn').addEventListener('click', function () {
  const cash = getCurrentNumber('cash-balance');
  const getInput = getDonationInputNumber('quota-input');
  const donationNumber = getCurrentNumber('quota-balance');
  if (isNaN(getInput) || getInput <= 0 || getInput > cash) {
    alert('Oops something worng');
    return alert;
  }
  const decreaseNumber = cash - getInput;
  const addedNumber = getInput + donationNumber;
  document.getElementById('cash-balance').innerText = decreaseNumber;
  document.getElementById('quota-balance').innerText = addedNumber;
});


// history

document.getElementById('history-btn').addEventListener('click', function () {
   console.log("hek")
});


