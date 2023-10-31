/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.*/ 
function isIsogram(str){
  //...
  // break down each letter 
  // compare each letter to all the letters
  let lowerString = str.toLowerCase()
  let arr = lowerString.split('')
  for(let i = 0; i < arr.length; i++){
    let letter = arr[i]
    for(let z = i + 1; z < arr.length; z++){
      if(letter === arr[z]){
        return false
      } 
      }
    }
  return true 
  }

