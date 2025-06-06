// https://leetcode.com/problems/power-of-two/

function isPowerOfTwo(n) {
    if (n === 1) return true;
    else if (n < 1 || n % 2 !== 0) return false;
    return isPowerOfTwo(n / 2);
}

console.log(isPowerOfTwo(8)); // true
