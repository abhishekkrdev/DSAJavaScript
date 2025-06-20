// https://leetcode.com/problems/largest-odd-number-in-string/

var largestOddNumber = function (num) {
    let n = num.length - 1;

    while (n >= 0) {
        if (Number(num[n]) % 2 === 1) {
            return num.slice(0, n + 1);
        }
        n--;
    }
    return "";
};
