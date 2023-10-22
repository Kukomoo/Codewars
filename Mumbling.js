/* accum("abcd") -> "A-Bb-Ccc-Dddd" */
function accum(s) {
  // Create an array to store the modified characters
  let result = [];

  // Loop through each character in the input string
  for (let i = 0; i < s.length; i++) {
    // Convert the current character to uppercase
    let upperCaseChar = s[i].toUpperCase();

    // Repeat the character based on its index, and convert to lowercase
    let repeatedChars = upperCaseChar + s[i].toLowerCase().repeat(i);

    // Add the repeated characters to the result array
    result.push(repeatedChars);
  }

  // Join the array elements with '-' and return the final result
  return result.join('-');
}
