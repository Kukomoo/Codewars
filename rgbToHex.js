/* The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here. */
 function componentToHex(c) {
  if(c < 0){
    c = 0;
  } 
  else if (c > 255) {
    c = 255;
  }
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgb(r, g, b) {
  let uppercase = componentToHex(r) + componentToHex(g) + componentToHex(b)
  return uppercase.toUpperCase()
  }

