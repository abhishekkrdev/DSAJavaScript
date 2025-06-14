// https://leetcode.com/problems/middle-of-the-linked-list/description/

var middleNode = function (head) {
    let temp1 = head;
    let temp2 = head;

    while (temp2 !== null && temp2.next !== null) {
        temp1 = temp1.next;
        temp2 = temp2.next.next;
    }

    return temp1;
};
