/* Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them. */

String.prototype.toJadenCase = function (string) {
  //...
  // Where is the first letter of each word 
  // and we use toUpperCase on it 
  // we will require a loop 
  // with each iteration it should update the first letter 
  // convert string to array 
  
  let arr = this.split("")
  for (let i = 0; i < arr.length; i++){
    if(i === 0){
      arr[i] = arr[i].toUpperCase()
    } else if(arr[i -1] === ' ') {
      arr[i] = arr[i].toUpperCase()
    }
  }
  return arr.join('')
  // another solution 
  /* let arr = this.split(' ')
  for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i][0].toUpperCase + arr[i].slice(1)
  }
  return arr.join(' ') */
};
