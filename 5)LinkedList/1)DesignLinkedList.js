class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
var MyLinkedList = function () {
    this.head = null;
    this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) {
        return -1;
    }

    let temp = this.head;

    for (let i = 0; i < index; i++) {
        temp = temp.next;
    }

    return temp.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let newNode = new Node(val);

    if (this.head === null) {
        this.head = newNode;
    } else {
        let curr = this.head;

        while (curr.next !== null) {
            curr = curr.next;
        }
        curr.next = newNode;
    }
    this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.size) return;

    if (index === 0) {
        this.addAtHead(val);
    } else if (index === this.size) {
        this.addAtTail(val);
    } else {
        let cur = 0;
        let temp = this.head;
        while (cur < index - 1) {
            cur++;
            temp = temp.next;
        }

        let newNode = new Node(val);
        newNode.next = temp.next;
        temp.next = newNode;
        this.size++;
    }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) {
        return;
    } else {
        if (index === 0) {
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }

            let curr = prev.next;
            prev.next = curr.next;
            curr.next = null;
        }

        this.size--;
    }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
