// https://leetcode.com/problems/length-of-last-word/description/

var lengthOfLastWord = function (s) {
    let stringArr = s.trim().split(" ");
    let n = stringArr.length;

    return stringArr[n - 1].length;
};

var lengthOfLastWord = function (s) {
    // Trim all the spaces at the end
    let n = s.length - 1;

    while (n >= 0) {
        if (s[n] !== " ") {
            break;
        }
        n--;
    }
    // n is the index where last alphabets of last word will be present
    let count = 0;
    while (n >= 0) {
        if (s[n] === " ") {
            break;
        }
        count++;
        n--;
    }
    return count;
};
