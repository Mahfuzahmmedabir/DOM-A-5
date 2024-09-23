// Noakhali part
document.getElementById('btn-Noakhali').addEventListener('click', function () {
  const cash = getCurrentNumber('cash-balance');
  const getInput = getDonationInputNumber('Noakhali-input');
  const donationNumber = getCurrentNumber('get-balance');
  if (isNaN(getInput) || getInput <= 0 || getInput > cash) {
    alert('Opps something worng');
    return alert;
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
  document.getElementById('donation').classList.remove('bg-btn');
  document.getElementById('history-btn').classList.add('bg-btn');
  document.getElementById('donate-histoy').classList.remove('hidden');
  document.getElementById('main-hide').classList.add('hidden');
  // copy text
  const donationNumber = getCurrentNumber('get-balance');
  //  const donationNumber1 = getCurrentNumber('get-balance')

  // copy text end
  const div = document.createElement('div');
  console.log('hello');
  div.classList.add(
    'border-2',
    'w-10/12',
    'mx-auto',
    'mt-10',
    'h-32',
    'rounded-xl'
  );
  div.innerHTML = `
  <div class="p-4">
  <h1 class ="text-left font-bold">software ${donationNumber}  </h1>
  <h1 class ="text-left">Date: ${new Date()}(Bangladesh Time zone) </h1>
  </div>
  `;
  console.log('heoo')
  document.getElementById('donate-histoy').append(div);
});

document.getElementById('donation').addEventListener('click', function () {
  document.getElementById('donation').classList.add('bg-btn');
  document.getElementById('history-btn').classList.remove('bg-btn');
  document.getElementById('main-hide').classList.remove('hidden');
  document.getElementById('donate-histoy').classList.add('hidden');
});
