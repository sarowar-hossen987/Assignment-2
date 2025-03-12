// 1. Function to calculate the sum of two numbers
function calculateSum(a, b) {
    return a + b;
}

// 2. Function to check if a number is even
function isEven(num) {
    return num % 2 === 0;
}

// 3. Function to find the maximum number in an array
function findMax(arr) {
    return Math.max(...arr);
}

// 4. Function to filter odd numbers from an array
function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

// 5. Function to count the number of words in a string
function countWords(str) {
    return str.trim().split(/\s+/).length;
}

// 6. Function to remove duplicate elements from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example usage:
console.log(calculateSum(5, 10)); // 15
console.log(isEven(4)); // true
console.log(findMax([1, 5, 3, 9, 2])); // 9
console.log(filterOddNumbers([1, 2, 3, 4, 5])); // [1, 3, 5]
console.log(countWords("Hello world! This is JavaScript.")); // 5
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
