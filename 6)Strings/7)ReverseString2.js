// https://leetcode.com/problems/reverse-string-ii/description/
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    s = s.split("");

    for (let i = 0; i < s.length; i = i + 2 * k) {
        let start = i;
        let end = i + k - 1;

        if (end > s.length - 1) {
            end = s.length - 1;
        }

        while (start < end) {
            [s[start], s[end]] = [s[end], s[start]];
            start++;
            end--;
        }
    }

    return s.join("");
};
