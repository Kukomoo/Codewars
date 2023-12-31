
/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

 */
function descendingOrder(n){
  //...
  if (n < 10){ // if single digit number sorting isn't needed 
    return n
  } else {
    return Number(String(n).split('').sort((a, b) => b - a).join(''))
  }
  
}
