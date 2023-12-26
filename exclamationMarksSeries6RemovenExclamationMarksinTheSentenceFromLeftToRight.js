/*Remove n exclamation marks in the sentence from left to right. n is positive integer.*/
function remove(s,n){
  //coding and coding....
  // n is how many times i remove
  // s is the string
  // loop thru the string and if remove ! in equal to n
  let index = s.indexOf("!")
  while(index != -1 && n > 0){
    s = s.slice(0, index) + s.slice(index + 1)
    index = s.indexOf('!')
    n--
  }
  return s
}
