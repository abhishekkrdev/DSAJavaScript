// https://leetcode.com/problems/valid-anagram/

var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }

    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        map.set(char, map.get(char) + 1 || 1);
    }

    for (let i = 0; i < t.length; i++) {
        let char = t[i];

        if (map.get(char)) {
            map.set(char, map.get(char) - 1);
        } else {
            return false;
        }
    }

    for (let key of map.keys()) {
        if (map.get(key) !== 0) {
            return false;
        }
    }

    return true;
};
