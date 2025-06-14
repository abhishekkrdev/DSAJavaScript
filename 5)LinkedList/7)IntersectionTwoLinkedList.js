// https://leetcode.com/problems/intersection-of-two-linked-lists/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNodeHashTable = function (headA, headB) {
    // Put all the nodes of headB in a set
    let store = new Set();

    while (headB) {
        store.add(headB);
        headB = headB.next;
    }

    // Check for each element of HeadA if they are present in set

    while (headA) {
        if (store.has(headA)) {
            return headA;
        }
        headA = headA.next;
    }

    return null;
};
