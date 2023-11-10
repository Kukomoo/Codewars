/* Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"] */
function friend(friends){
  //your code here
  //count the letters
  // return words with a count of four 
  // first I need to loop thru the array 
  let friendsArr = []
  for (let i = 0; i < friends.length; i++){
    if (friends[i].length === 4){
      friendsArr.push(friends[i])
    }
  }
  return friendsArr
}
