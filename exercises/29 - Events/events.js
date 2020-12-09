const butts = document.querySelector('.btn-1');
const butts2 = document.querySelector('.btn-2');

function handleClick() {
  alert('it got clicked');
}

butts.addEventListener('click', handleClick);
butts2.addEventListener('click', handleClick);
// butts2.removeEventListener('click', handleClick);

// listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
  console.log(event.target.dataset.price);
}

buyButtons.forEach(function (test) {
  test.addEventListener('click', handleBuyButtonClick);
});
