// https://leetcode.com/problems/jewels-and-stones/
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let charSet = new Set();

    for (let i = 0; i < jewels.length; i++) {
        charSet.add(jewels[i]);
    }

    let count = 0;

    for (let j = 0; j < stones.length; j++) {
        let currentChar = stones[j];

        if (charSet.has(currentChar)) {
            count++;
        }
    }

    return count;
};
