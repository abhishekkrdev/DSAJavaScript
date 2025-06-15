// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let sentinal = new ListNode();
    sentinal.next = head;

    let length = 0;

    // Get the length of the linked list
    while (head) {
        length++;
        head = head.next;
    }

    let prevPos = length - n;

    // Traverse From Sntinal
    let temp = sentinal;
    while (prevPos > 0) {
        temp = temp.next;
        prevPos--;
    }

    temp.next = temp.next.next;
    return sentinal.next;
};
