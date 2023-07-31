function ArraySumForIntegers(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }

    let sum = 0;
    for (const num of arr) {
        if (Number.isInteger(num)) {
            sum += num;
        } else {
            throw new Error('All elements in the array must be integers');
        }
    }

    return sum;
}

const num = [1, 2, 3, 4, 5];
const result = ArraySumForIntegers(num);
console.log(result); // Output will be 15 (1 + 2 + 3 + 4 + 5)
