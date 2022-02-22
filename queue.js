class Node {
    constructor(value, next) {
        this.value = value ? value : null;
        this.next = next ? next : null;
    }

}

class Stack {

    constructor() {
        this.tail = null;
        this.size = 0; // tracking size of stack
    }


    push(value) {

        let newNode = new Node(value)

        if (this.tail == null) {
            this.tail = newNode;
            newNode.next = null;
        } else {
            newNode.next = this.tail;
            this.tail = newNode;
        }

        this.size++;

        return this.size;


    }


    pop() {
        if (this.tail == null) return null

        let lastNode = this.tail;
        this.tail = this.tail.next;

        this.size--;

        return lastNode;


    }

    getSize() {

        return this.size;
    }

    print() {
        let cur = this.tail;
        console.log("------- tail -----------")
        while (cur != null) {
            console.log(cur.value)
            cur = cur.next;
        }
        console.log("------- head --------")

    }

}


let s = new Stack();

s.push(5)
s.push(6);

s.print();

s.pop();

s.print()



class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0
    }


    // append element
    enqueue(value) {

        let node = new Node(value)

        //base case: if tail is null, we make the new node the head and tail
        if (this.tail == null || this.head == null) {
            this.head = node;
            this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;

        this.size++;

        return this.size;



    }


    dequeue() {
        let elementToRemove = null;

        if (!this.head) {
            return null;
        } else {

            elementToRemove = this.head
            this.head = this.head.next;

        }
        this.size--

        return elementToRemove;
    }

    getSize() {
        return this.size;
    }

    print() {
        let cur = this.head;
        console.log("------- head -----------")
        while (cur != null) {
            console.log(cur.value)
            cur = cur.next;
        }
        console.log("------- tail --------")

    }


}

let q = new Queue();

q.enqueue(5)
q.enqueue(17)

q.print()

q.dequeue();

q.print();



