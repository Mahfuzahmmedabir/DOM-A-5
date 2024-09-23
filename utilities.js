// function for input value
function getDonationInputNumber(id) {
  const inputNumber = document.getElementById(id).value;
  const convartTextNumber = parseFloat(inputNumber);
  return convartTextNumber
}
// function for inner.tertext
function getCurrentNumber(id) {
  const currentNumber = document.getElementById(id).innerText;
  const convartNumber = parseFloat(currentNumber);
  return convartNumber
}
