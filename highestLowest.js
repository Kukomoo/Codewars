/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.*/

function highAndLow(numbers) {
    let numArray = numbers.split(' ').map(Number);
    let h = Math.max(...numArray);
    let l = Math.min(...numArray);
    return `${h} ${l}`;
}
