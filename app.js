document.getElementById('blog-page').addEventListener('click', function () {
  window.location.href = '/blog.html'
});






// Noakhali part
document.getElementById('btn-Noakhali').addEventListener('click', function () {
  const cash = getCurrentNumber('cash-balance');
  const getInput = getDonationInputNumber('Noakhali-input');
  const donationNumber1 = getCurrentNumber('get-balance');
  if (isNaN(getInput) || getInput <= 0 || getInput > cash) {
    alert('Opps something worng');
    return alert;
  }
  const decreaseNumber = cash - getInput;
  const addedNumber = getInput + donationNumber1;
  document.getElementById('cash-balance').innerText = decreaseNumber;
  document.getElementById('get-balance').innerText = addedNumber;

});
// feni part
document.getElementById('feni-btn').addEventListener('click', function () {
  const cash = getCurrentNumber('cash-balance');
  const getInput = getDonationInputNumber('feni-input');
  const donationNumber2 = getCurrentNumber('get-balance-feni');
  if (isNaN(getInput) || getInput <= 0 || getInput > cash) {
    alert('Oops something worng');
    return alert;
  }
  const decreaseNumber = cash - getInput;
  const addedNumber = getInput + donationNumber2;
  document.getElementById('cash-balance').innerText = decreaseNumber;
  document.getElementById('get-balance-feni').innerText = addedNumber;
});
// quota part
document.getElementById('quota-btn').addEventListener('click', function () {
  const cash = getCurrentNumber('cash-balance');
  const getInput = getDonationInputNumber('quota-input');
  const donationNumber3 = getCurrentNumber('quota-balance');
  if (isNaN(getInput) || getInput <= 0 || getInput > cash) {
    alert('Oops something worng');
    return alert;
  }
  const decreaseNumber = cash - getInput;
  const addedNumber = getInput + donationNumber3;
  document.getElementById('cash-balance').innerText = decreaseNumber;
  document.getElementById('quota-balance').innerText = addedNumber;
});
// history
document.getElementById('history-btn').addEventListener('click', function () {
  document.getElementById('donation').classList.remove('bg-btn');
  document.getElementById('history-btn').classList.add('bg-btn');
  document.getElementById('donate-histoy').classList.remove('hidden');
  document.getElementById('main-hide').classList.add('hidden');
  // dynamic history
  const donationNumber1 = getCurrentNumber('get-balance');
  const donationNumber2 = getCurrentNumber('get-balance-feni');
  const donationNumber3 = getCurrentNumber('quota-balance');

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
  <h1 class ="text-left font-bold text-xl">${donationNumber1} Taka is Donated for famine-2024 at Feni, Bangladesh   </h1>
  <p class ="text-left text-gray-600 mt-4">Date: ${new Date()}(Bangladesh Standard Time)  </p>
  </div>
  `;
  // 2
  const div2 = document.createElement('div');
  div2.classList.add(
    'border-2',
    'w-10/12',
    'mx-auto',
    'mt-10',
    'h-32',
    'rounded-xl'
  );
  div2.innerHTML = `
  <div class="p-4">
  <h1 class ="text-left font-bold text-xl"> ${donationNumber2} Taka is Donated for Flood Relief in Feni,Bangladesh   </h1>
  <p class ="text-left text-gray-600 mt-4">Date: ${new Date()}(Bangladesh Standard Time)  </p>
  </div>
  `;
  const div3 = document.createElement('div');

  div3.classList.add(
    'border-2',
    'w-10/12',
    'mx-auto',
    'mt-10',
    'h-32',
    'rounded-xl'
  );
  div3.innerHTML = `
  <div class="p-4">
  <h1 class ="text-left font-bold text-xl">${donationNumber3} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh   </h1>
  <p class ="text-left text-gray-600 mt-4 ">Date: ${new Date()}(Bangladesh Standard Time)</p>
  </div>
  `;
  document.getElementById('donate-histoy').append(div);
  document.getElementById('donate-histoy').append(div2);
  document.getElementById('donate-histoy').append(div3);
});
document.getElementById('donation').addEventListener('click', function () {
  document.getElementById('donation').classList.add('bg-btn');
  document.getElementById('history-btn').classList.remove('bg-btn');
  document.getElementById('main-hide').classList.remove('hidden');
  document.getElementById('donate-histoy').classList.add('hidden');
});
