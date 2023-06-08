function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('You cannot divide by zero');
    }
    return a / b;
}

function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    
    return true;
  }

function factorial(number) {
    if (number < 0) {
      return -1;
    }
    
    if (number === 0) {
      return 1;
    }
    
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
    
    return result;
}

module.exports = {
    sum,
    multiply,
    divide,
    isPrime,
    factorial
};