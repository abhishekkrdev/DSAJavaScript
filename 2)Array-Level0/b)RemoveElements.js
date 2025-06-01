// https://leetcode.com/problems/remove-element/

var removeElement = function (nums, val) {
    let n = nums.length;

    let x = 0;

    for (let i = 0; i < n; i++) {
        let currElement = nums[i];

        if (currElement !== val) {
            nums[x++] = currElement;
        }
    }
    return x;
};
