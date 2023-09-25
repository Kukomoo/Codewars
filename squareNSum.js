/*Complete the square sum function so that it squares each number passed into it and then sums the results together.*/

function squareSum(numbers){
 return numbers.reduce((a, c) => a += Math.pow(c, 2), 0)
}
