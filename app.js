// 1

document.getElementById('btn-Noakhali').addEventListener('click', function () {
  const current = getCurrentNumber('current-balance');
  const getInput = getDonationInputNumber('Noakhali-input');
  const donationNumber = getCurrentNumber('get-balance');
  if (isNaN(getInput) || getInput <= 0 || getInput > current ) {
    alert("Opps something worng")
    return alert
  } 
  const updetNumber = current - getInput;
  const addeNumber = getInput + donationNumber;
  document.getElementById('current-balance').innerText = updetNumber;
  document.getElementById('get-balance').innerText = addeNumber;
});



