/* Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

*/

// return masked string
function maskify(cc) {
// find the length 
  // find the last four characters 
  // change it to '#' 
  let arr = cc.split('');
  let lastcharacter = arr.length - 4
  for( let i = 0; i < lastcharacter; i++){
    arr[i] = '#'
  }
  return arr.join('')
}

