// https://leetcode.com/problems/longest-common-prefix/

var longestCommonPrefix = function (strs) {
    let x = 0;

    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i];

        let k = 1;
        while (k < strs.length) {
            if (strs[k][i] === char) {
                k++;
                continue;
            } else {
                return strs[0].slice(0, x);
            }
        }
        x++;
    }
    return strs[0].slice(0, x + 1);
};
