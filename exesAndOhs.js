/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

*/ 

function XO(str) {
    //code here
  let lowerStr = str.toLowerCase()
  let countx = 0
  let counto = 0
  for(let i = 0; i < lowerStr.length; i++){
    if(lowerStr[i] === 'x'){
      countx++
    }
    if(lowerStr[i] === 'o'){
      counto++
    }
    
  }
  return countx === counto
}
