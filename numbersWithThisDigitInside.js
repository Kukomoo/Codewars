/* You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
The value of d will always be 0 - 9.
The value of x will always be greater than 0.

You have to return as an array

the count of these numbers,
their sum
and their product.

For example:
x = 11
d = 1
->
Numbers: 1, 10, 11
Return: [3, 22, 110] */
function numbersWithDigitInside(x, d) {
  let arr = [];

  for (let i = 1; i <= x; i++) {
    if (i.toString().includes(d.toString())) {
      arr.push(i);
    }
  }

  if (arr.length === 0) {
    return [0, 0, 0];
  }

  return [
    arr.length,
    arr.reduce((a, x) => a += x, 0),
    arr.reduce((a, x) => a *= x, 1)
  ];
}

