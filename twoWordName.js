/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.*/

function abbrevName(name) {
    let nameArray = name.split(' ');// conver the string into an array of ["Sam", "Harris"]
    let initials = nameArray.map(word => word[0].toUpperCase());
    return initials.join('.');
}
