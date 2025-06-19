// https://leetcode.com/problems/valid-palindrome/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let sentance = s.toLowerCase().split("");

    let filteredStringArr = [];

    for (let i = 0; i < sentance.length; i++) {
        if (
            (sentance[i].charCodeAt() >= "a" &&
                sentance[i].charCodeAt() <= "z") ||
            (sentance[i].charCodeAt() >= "0" && sentance[i].charCodeAt() <= "9")
        ) {
            filteredStringArr.push(sentance[i]);
        }
        // if (sentance[i].match(/[a-z0-9]/i)) {
        //     filteredStringArr.push(sentance[i]);
        // }
    }

    let filterString = filteredStringArr.join("");

    return filterString === filterString.split("").reverse().join("");
};
