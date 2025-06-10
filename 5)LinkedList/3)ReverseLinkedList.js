// https://leetcode.com/problems/reverse-linked-list/description/

var reverseList = function (head) {
    let prev = null;
    let current = head;

    while (current != null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
};
