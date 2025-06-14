var isPalindromeArrayConversion = function (head) {
    let arr = [];

    let temp = head;

    while (temp !== null) {
        arr.push(temp.val);
        temp = temp.next;
    }

    let n = arr.length;

    for (let i = 0; i < n / 2; i++) {
        if (arr[i] !== arr[n - i - 1]) {
            return false;
        }
    }
    return true;
};

var isPalindrome = function (head) {
    // 1. Finding the middle element
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2. Reverse the second half of list
    let prev = null;
    let curr = slow;

    while (curr) {
        let next = curr.next;
        curr.next = prev;

        prev = curr;
        curr = next;
    }

    // 3. Checking For Palindrome
    let firstList = head;
    let secondList = prev;

    while (secondList != null) {
        if (firstList.val !== secondList.val) {
            return false;
        }
        firstList = firstList.next;
        secondList = secondList.next;
    }
    return true;
};
