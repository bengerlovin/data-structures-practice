


class ListNode {

    constructor(value, next) {
        this.value = value;
        this.next = next;
    }

}

class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new ListNode(value, null)

        if (this.tail) {
            this.tail.next = newNode;
        }

        this.tail = newNode;

        //  if list is empty before hand
        if (!this.head) {
            this.head = newNode;
        }
    }

    prepend(value) {


        const newNode = new ListNode(value, (this.head ? this.head : null))

        this.head = newNode;

    }

    find(value) {
        if (!this.head) {
            return null;
        }

        let curNode = this.head;

        while (curNode) {
            if (curNode.value === value) {
                return curNode;
            }
            curNode = curNode.next;
        }

        return null;
    }

    insertAfter(value, valueToInsertAfter) {

        const existingNode = this.find(valueToInsertAfter)

        if (existingNode) {
            const newNode = new ListNode(value, existingNode.next)

            let oldExistingNodeNext = existingNode.next;

            if (oldExistingNodeNext) {
                this.tail = newNode;
            }

            existingNode.next = newNode;


            return newNode;
        }
        return null;
    }

    delete(value) {

        if (!this.head) {
            return null;
        }



        //  ensure head is the first element that doesn't have the value we're trying to delete

        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        let curNode = this.head;

        //  check each curNode's next node
        while (curNode.next != null) {
            if (curNode.next.value === value) {
                curNode.next = curNode.next.next;
            } else {
                curNode = curNode.next;
            }

        }

        if (this.tail.value === value) {
            this.tail = curNode;
        }


    }

    toArray() {
        const elements = [];

        let curNode = this.head;
        while (curNode) {
            elements.push(curNode)
            curNode = curNode.next;
        }

        return elements;
    }

    toArrayWithNode(node) {

        const elements = [];

        let curNode = node;
        while (curNode) {
            elements.push(curNode)
            curNode = curNode.next;
        }

        return elements;

    }

    reverse(node) {
        let prev = null;
        let current = node;

        while (current !== null) {
            let next = current.next
            current.next = prev;

            // move prev and current pointers up by one
            prev = current
            current = next;
        }

        return prev;
    }




}


module.exports = LinkedList





