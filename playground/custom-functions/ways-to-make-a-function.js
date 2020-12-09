// IIFE
// Immediately Invoked Function Expression

// (function () {
//   console.log('Running the function');
//   return 'your are cool';
// })();

// Methods

const wes = {
  name: 'was bos',
  //   Method
  sayHi() {
    console.log(`Hey ${this.name}`);
    return 'Hey Wes';
  },
  // Short hand method
  yellHi() {
    console.log('HEY WES');
  },
  // Arrow function
  whisperHi: () => {
    console.log('hwllo');
  },
};

// Callback funtions
// Click Callback

const button = document.querySelector('.clickMe');
console.log(button);
button.addEventListener('click', wes.yellHi);

// Timer Callback
setTimeout(wes.yellHi, 1000);
