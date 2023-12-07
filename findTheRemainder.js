/* Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.

*/
function remainder(n, m) {

  const result = Math.max(n, m) % Math.min(n, m);
  if (result != NaN){
    return result
  } else {
    return NaN
  }
 
}

