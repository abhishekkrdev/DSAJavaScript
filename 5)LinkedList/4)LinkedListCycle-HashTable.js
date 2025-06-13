// https://leetcode.com/problems/linked-list-cycle/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let set = new Set();
    let temp = head;
    while (temp != null) {
        if (set.has(temp)) {
            return true;
        }
        let node = temp;
        set.add(node);
        temp = temp.next;
    }
    return false;
};
