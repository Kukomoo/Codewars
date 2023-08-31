/* Complete the solution so that it reverses the string passed into it.
'world'  =>  'dlrow'
'word'   =>  'drow'  */

function solution(str){
  let l = str.length - 1;
  let newString = '';
  for(let i = l; i >= 0; i--){
    newString += str[i];
  }
  return newString;
}