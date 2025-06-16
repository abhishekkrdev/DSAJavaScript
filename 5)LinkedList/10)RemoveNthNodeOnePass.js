// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

var removeNthFromEnd = function (head, n) {
    let sentinal = new ListNode();
    sentinal.next = head;

    let sp = sentinal;
    let fp = sentinal;

    for (let i = 1; i <= n; i++) {
        fp = fp.next;
    }

    while (fp.next != null) {
        fp = fp.next;
        sp = sp.next;
    }

    sp.next = sp.next.next;
    return sentinal.next;
};
