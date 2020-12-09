// function definition

function calculateBill(billAmount, taxRate) {
  // function body
  console.log('Running Calculate Bill');
  const total = billAmount * 1 + taxRate;
  return total;
}

// function call
const myTotal = calculateBill(100, 0.13);

function sayHiTo() {
  return `Hello ${firstName}`;
}

const greeting = sayHiTo();
