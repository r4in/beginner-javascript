const myParagraph = document.createElement('p');
myParagraph.textContent = 'Hello there';
myParagraph.classList.add('special');

const myImage = document.createElement('img');
myImage.src = 'http://picsum.photos/200';
myImage.alt = 'This is an alt';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');

console.log(myParagraph);
console.log(myImage);
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'Cool Heading';

// myDiv.appendChild(heading);
myDiv.insertAdjacentElement('afterbegin', heading);

const myList = document.createElement('ul');

const myItems = document.createElement('li');
myItems.textContent = 'first';
myList.insertAdjacentElement('afterbegin', myItems);

const myItems1 = myItems.cloneNode();
myItems1.textContent = 'second';
myItems.insertAdjacentElement('afterend', myItems1);

const myItems2 = myItems.cloneNode();
myItems2.textContent = 'third';
myItems1.insertAdjacentElement('afterend', myItems2);

const myItems3 = myItems.cloneNode();
myItems3.textContent = 'forth';
myItems2.insertAdjacentElement('afterend', myItems3);

const myItems4 = myItems.cloneNode();
myItems4.textContent = 'fifth';
myItems3.insertAdjacentElement('afterend', myItems4);

document.body.appendChild(myList);
