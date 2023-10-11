/*Make a simple function called greet that returns the most-famous "hello world!".

Style Points

Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?*/

// Write a function "greet" that returns "hello world!"
function greet (){
  const str = "hello world!"
  const arr = str.split('')
  let message = ""
  for (let i = 0; i < arr.length; i++){
    message += arr[i]
  }
  return message
}
