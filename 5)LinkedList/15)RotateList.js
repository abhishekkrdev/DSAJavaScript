// https://leetcode.com/problems/rotate-list/

var rotateRight = function (head, k) {
    if (!head || !head.next || k === 0) return head;

    // Step 1: Find the length
    let length = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }

    // Step 2: Optimize k
    k = k % length;
    if (k === 0) return head;

    // Step 3: Find new tail (at position length - k - 1)
    let newTail = head;
    for (let i = 1; i < length - k; i++) {
        newTail = newTail.next;
    }

    // Step 4: Reconnect
    let newHead = newTail.next;
    newTail.next = null;
    tail.next = head;

    return newHead;
};
