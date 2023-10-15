/* Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

*/

function past(h, m, s){
  //#Happy Coding! ^_^
  let hIntoS = h * 3600
  let mIntoS = m * 60
  let finalS = hIntoS + mIntoS + s
  return finalS * 1000
}
