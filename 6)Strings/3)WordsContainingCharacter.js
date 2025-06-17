// https://leetcode.com/problems/find-words-containing-character/description/
/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];

        if (currentWord.includes(x)) {
            result.push(i);
        }
    }

    return result;
};
