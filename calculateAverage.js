/* Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */ 

function findAverage(array) {
  let sum = 0
  array.map(x => sum += x)
  return sum / array.length
}
