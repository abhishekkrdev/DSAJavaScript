// https://leetcode.com/problems/max-consecutive-ones/

var findMaxConsecutiveOnes = function (nums) {
    let n = nums.length;

    let result = 0;
    let count = 0;

    for (let i = 0; i < n; i++) {
        if (nums[i] === 1) {
            count++;
            result = Math.max(count, result);
        } else {
            count = 0;
        }
    }
    return result;
};
