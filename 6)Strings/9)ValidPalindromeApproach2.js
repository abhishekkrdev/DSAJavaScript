//leetcode.com/problems/valid-palindrome/description/

/**
 * @param {string} s
 * @return {boolean}
 */
https: var isPalindrome = function (s) {
    s = s.toLowerCase();
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        while (start < end && !s[start].match(/[a-z0-9]/i)) {
            start++;
        }
        while (start < end && !s[end].match(/[a-z0-9]/i)) {
            end--;
        }

        if (s[start] !== s[end]) {
            return false;
        }

        start++;
        end--;
    }
    return true;
};
