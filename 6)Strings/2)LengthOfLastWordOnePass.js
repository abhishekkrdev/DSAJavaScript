// https://leetcode.com/problems/length-of-last-word/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    // Trim all the spaces at the end
    let n = s.length - 1;

    let count = 0;

    while (n >= 0) {
        if (count > 0 && s[n] === " ") {
            break;
        }

        if (s[n] !== " ") {
            count++;
        }

        n--;
    }
    return count;
};
