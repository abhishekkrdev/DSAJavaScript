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

// Another Method
var reverseString = function (s) {
    let len = s.length;
    let halfLen = Math.floor(len / 2);

    for (let i = 0; i < halfLen; i++) {
        let temp = s[i];
        s[i] = s[len - i - 1];
        s[len - i - 1] = temp;
    }
};
