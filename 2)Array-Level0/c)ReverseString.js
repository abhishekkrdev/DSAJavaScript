// https://namastedev.com/learn/namaste-dsa/reverse-string-dsa-notes

var reverseString = function (s) {
    const n = s.length;
    let l = 0;
    let r = n - 1;

    while (l < r) {
        [s[l], s[r]] = [s[r], s[l]]; // JS Swapping Mechanism
        l++;
        r--;
    }
};
