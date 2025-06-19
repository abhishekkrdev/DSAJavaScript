// https://leetcode.com/problems/split-a-string-in-balanced-strings/description/
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let lCount = 0;
    let rCount = 0;

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let character = s[i];

        if (character === "L") {
            lCount++;
        } else {
            rCount++;
        }

        if (lCount > 0 && lCount === rCount) {
            lCount = 0;
            rCount = 0;
            result++;
        }
    }
    return result;
};
