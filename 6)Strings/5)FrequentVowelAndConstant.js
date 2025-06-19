// https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/description/
/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let map = new Map();
    let set = new Set(["a", "e", "i", "o", "u"]);

    let vCount = 0;
    let cCount = 0;

    for (let i = 0; i < s.length; i++) {
        let character = s[i];
        let count = 0;

        if (!map.has(character)) {
            map.set(character, 1);
            count = 1;
        } else {
            let prevCount = map.get(character);
            map.set(character, map.get(character) + 1);
            count = map.get(character);
        }
        if (set.has(character)) {
            vCount = Math.max(count, vCount);
        } else {
            cCount = Math.max(count, cCount);
        }
    }

    return cCount + vCount;
};
