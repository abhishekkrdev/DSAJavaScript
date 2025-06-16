// https://leetcode.com/problems/add-two-numbers/

var addTwoNumbers = function (l1, l2) {
    let h1 = new ListNode();
    let l3Head = h1;
    let carr = 0;

    while (l1 || l2 || carr) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        let val3 = val1 + val2 + carr;

        carr = Math.floor(val3 / 10);

        let newNode = new ListNode(val3 % 10);

        if (l1) {
            l1 = l1.next;
        }

        if (l2) {
            l2 = l2.next;
        }

        h1.next = newNode;
        h1 = h1.next;
    }

    return l3Head.next;
};
