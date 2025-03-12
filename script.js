// 1. Function to calculate the sum of two numbers
let a = 5;
let b = 10;

function calculateSum(a, b) {
    return a + b;
}console.log(calculateSum(a, b));


// 2. Function to check if a number is even

let num = 35;

function isEven(num) {
    return num % 2 === 0;
}console.log(isEven(num));


// 3. Function to find the maximum number in an array

let arr = [1, 5, 3, 9, 2];

function findMax(arr) {
    return Math.max(...arr);
}console.log(findMax(arr));

// 4. Function to filter odd numbers from an array

let array = [1, 2, 3, 4, 5];

function filterOddNumbers(array) {
    return array.filter(num => num % 2 !== 0);
}console.log(filterOddNumbers(array));

// 5. Function to count the number of words in a string

let str = "Hello world! This is JavaScript.";

function countWords(str) {
    const word = str.trim().split(/\s+/)
    word.length;
} console.log(countWords(str));

// 6. Function to remove duplicate elements from an array

let duplicateArray = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(duplicateArray) {
    return [...new Set(duplicateArray)];
}console.log(removeDuplicates(duplicateArray));
