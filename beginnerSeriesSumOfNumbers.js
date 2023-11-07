/* Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!*/

function getSum(a, b) {
  if (a === b) {
    return a;
  }

  // Make sure a is smaller than or equal to b
  if (a > b) {
    [a, b] = [b, a]; // Swap a and b 
  }

  // Sum = (n * (firstNumber + lastNumber)) / 2
  let sum = ((b - a + 1) * (a + b)) / 2;

  return sum;
}
