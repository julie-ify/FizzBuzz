module.exports = function () {
  // write your code here
  const fizzArray = [];

  for (let i = 1; i < 101; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzArray.push('FizzBuzz');
    } else if (i % 5 === 0) {
      fizzArray.push('Buzz');
    } else if (i % 3 === 0) {
      fizzArray.push('Fizz');
    } else {
      fizzArray.push(i);
    }
  }

  return fizzArray;
};
