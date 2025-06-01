// https://leetcode.com/problems/merge-sorted-array/description/

// Brute Force Approach

var merge = function (nums1, m, nums2, n) {
    for (let i = m; i < nums1.length; i++) {
        nums1[i] = nums2[i - m];
    }
    nums1.sort((a, b) => a - b);
};

// Better Approach
var merge = function (nums1, m, nums2, n) {
    const result = [];

    let i = 0;
    let j = 0;

    let k = 0;

    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            result[k++] = nums1[i++];
        } else {
            result[k++] = nums2[j++];
        }
    }

    while (i < m) {
        result[k++] = nums1[i++];
    }

    while (j < n) {
        result[k++] = nums2[j++];
    }

    for (let i = 0; i < k; i++) {
        nums1[i] = result[i];
    }

    return nums1;
};

// Optimal Approach
var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;

    for (let i = m + n - 1; i >= 0; i--) {
        if (p2 < 0) break;

        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1--];
        } else {
            nums1[i] = nums2[p2--];
        }
    }
};
