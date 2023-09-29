/*Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.*/

function createPhoneNumber(numbers){
  let str = '';
  for(let i = 0; i < 1; i++){
    str = `(${numbers[i]}${numbers[i+1]}${numbers[i+2]}) `
  } for(let x = 3; x < 6; x++){
    str += numbers[x]
  } 
  str += '-'
  for(let y = 6; y < 10; y++){
    str += numbers[y]
  }
  return str
}
