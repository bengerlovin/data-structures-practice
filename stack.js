class Stack {
    constructor() {

        this.items = [];
        this.count = 0;

    }

    push(element) {
        this.items[this.count] = element;
        console.log(`${element} added to ${this.count} `)
        this.count++;
        return this.count - 1; // return position of added element
    }

    pop() {
        if (this.count == 0) {
            return undefined;
        }
        //  return and remove top elemenet
        let elementToReturn = this.items[this.count - 1];

        console.log(`${elementToReturn} was deleted`)

        this.count--;
        return elementToReturn;
    }
}


const stack = new Stack();


// stack.push(1000)
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.pop(); 
