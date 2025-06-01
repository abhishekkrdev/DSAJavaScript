// https://leetcode.com/problems/missing-number/

// Brute Force Approach
var missingNumber = function (nums) {
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }
    return nums.length;
};

// Optimal Approach
var missingNumber = function (nums) {
    let n = nums.length;

    // (n * (n+1))/ 2; -> Sum of first n numbers

    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += nums[i];
    }

    return (n * (n + 1)) / 2 - sum;
};
