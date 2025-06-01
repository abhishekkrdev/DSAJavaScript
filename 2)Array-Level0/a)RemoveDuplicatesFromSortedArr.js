// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

// In Place And Duplicate Increasing Order

var removeDuplicates = function (nums) {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[x]) {
            x++;
            nums[x] = nums[i];
        }
    }
    return x + 1;
};
