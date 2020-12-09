/* stylelint-disable */
// Make a div

const myDiv = document.createElement('div');

// add a class of wrapper to it

myDiv.classList.add('wrapper');

// put it into the body

document.body.appendChild(myDiv);

// make an unordered list

const myList = document.createElement('ul');
const listItem1 = document.createElement('li');
myList.insertAdjacentElement('afterbegin', listItem1);
const listItem2 = listItem1.cloneNode();
listItem1.insertAdjacentElement('afterend', listItem2);
const listItem3 = listItem1.cloneNode();
listItem2.insertAdjacentElement('afterend', listItem3);

// add three list items with the words "one, two, three" in them
listItem1.textContent = 'one';
listItem2.textContent = 'two';
listItem3.textContent = 'three';

// put that list into the above wrapper
const hello = document.querySelector('.wrapper');
hello.insertAdjacentElement('afterbegin', myList);

// create an image
const myImage = document.createElement('img');

// set the source to an image
myImage.src = 'http://picsum.photos/200';

// set the width to 250
myImage.width = '250';

// add a class of cute
myImage.classList.add('cute');

// add an alt of Cute Puppy
myImage.alt = 'Cute Puppy';

// Append that image to the wrapper
hello.insertAdjacentElement('afterend', myImage);

// with HTML string, make a div, with two paragraphs inside of it

const myDiv2 = document.createElement('div');

myDiv2.innerHTML = `
        <p>paragraph 1</p>
        <p>paragraph 2</p>
`;

// put this div before the unordered list from above
myList.insertAdjacentElement('beforebegin', myDiv2);

// add a class to the second paragraph called warning
const test = document.querySelector('.wrapper');
const test2 = test.firstElementChild.lastElementChild;
test2.classList.add('warning');

// remove the first paragraph
const test3 = test.firstElementChild.firstElementChild;
test3.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const html = `
    <div class="playerCard">
        <h2>${name} - ${age}</h2>
        <p>Their height is ${height}cm and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!</p>
    <button class="btn" type="button">&times; Delete</button>
    </div>
    `;
  return html;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const newDiv = document.createElement('div');
newDiv.classList.add('cards');

// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard('francis', 12, 1);
cardsHTML += generatePlayerCard('dasd', 12, 1);
cardsHTML += generatePlayerCard('fradasncis', 12, 1);
cardsHTML += generatePlayerCard('da', 12, 1);

newDiv.innerHTML = cardsHTML;
hello.insertAdjacentElement('beforebegin', newDiv);

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.btn');

// make out delete function
function deleteCard(event) {
  const btnClicked = event.currentTarget;
  btnClicked.parentElement.remove();
}

// loop over them and attach a listener
buttons.forEach((btn) => btn.addEventListener('click', deleteCard));
