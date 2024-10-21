/*Use for-of loop to iterate through the array [1, 2, 3, 4, 5] and stop when the number 4 is found. Store the numbers before '4' in an array named 'smallNumbers' */

let numbers = [1, 2, 3, 4, 5]
let smallNumbers = [];

for (const num in numbers) {
    if (numbers[num]===4) {
        break;
    }
    smallNumbers.push(numbers[num])
}

console.log(smallNumbers);
