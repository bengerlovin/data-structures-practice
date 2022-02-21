class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;

    }


}


//  reference: https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
class BST {
    constructor() {
        this.root = null;
        this.inorderValues = [];
        this.postorderValues = [];
        this.preorderValues = [];
        this.minHeight = null;
    }

    insert(data) {


        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode) {

        // newNode data is less
        if (newNode.data < node.data) {

            // does the node already have a left node? if not, this newNode value works
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode)
            }
        }

        // newNode data is more
        else {

            if (newNode.data > node.data) {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    this.insertNode(node.right, newNode)
                }
            }

        }

    }


    binarySearch(node, target) {
        if (node === null) {
            return false;
        } else if (node.data === target) {
            return true;
        } else {
            if (target <= node.data) {
                return binarySearch(node.left, target)
            } else if (target > node.data) {
                return binarySearch(node.right, target)
            }
        }
    }

    findHeight(node) {

        if (node == null) {
            return -1;
        }

        let left = this.findHeight(node.left)
        let right = this.findHeight(node.right)

        if (left > right) {
            return left + 1;
        } else {
            return right + 1
        }

    }

    findMaxHeight(node) {

        if (node == null) {
            return -1
        }

        let left = this.findMaxHeight(node.left)
        let right = this.findMaxHeight(node.right)

        if (right > left) {
            return right + 1;
        } else {
            return left + 1
        }

    }

    findMinHeight(node) {
        if (node == null) {
            return -1;
        }

        let left = this.findMinHeight(node.left)
        let right = this.findMinHeight(node.right)

        if (right < left) {
            return right + 1;
        } else {
            return left + 1
        }
    }

    isBalanced() {
        return (this.findHeight(this.root) == this.findMinimumHeight(this.root) + 1)
    }

    // values from lowest to highest, for below tree: 
    inorder(node) {

        /**
            * 1. traverse left
            * 2. visit root
            * 3. traverse right
            */

        if (node != null) {
            this.inorder(node.left)
            this.inorderValues.push(node.data)
            this.inorder(node.right)
        }

    }
    // roots first, for below tree: 10, 6, 5, 7, 14, 11, 13, 29
    preorder(node) {
        if (node !== null) {

            /** 
             * 1. visit root
             * 2. traverse left
             * 3. traverse right
             */

            // visit the root
            this.preorderValues.push(node.data)

            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    // leaves first, for below tree: 5, 7, 6, 13, 11, 29, 14, 10
    postorder(node) {

        if (node !== null) {

            /**
            * 1. traverse left
            * 2. traverse right
            * 3. visit root 
            */

            this.postorder(node.left)
            this.postorder(node.right)

            this.postorderValues.push(node.data)
        }

    }
}

let bst = new BST();

bst.insert(10)
bst.insert(6)
bst.insert(7)
bst.insert(14)
bst.insert(11)
bst.insert(13)
bst.insert(29)
bst.insert(5)
bst.insert(15)
bst.insert(17)
bst.insert(19)


// bst.postorder(bst.root)
// console.log("post order")
// console.log(bst.postorderValues)
// console.log("----------------")

// bst.preorder(bst.root)
// console.log("pre order")
// console.log(bst.preorderValues)
// console.log("----------------")

// bst.inorder(bst.root)
// console.log("in order")
// console.log(bst.inorderValues)
// console.log("----------------")

// console.log("max height")
// console.log(bst.findMaxHeight(bst.root))
// console.log("----------------")

// console.log("minimum height")
// console.log(bst.findMinHeight(bst.root))
// console.log("----------------")

// console.log("is balanced")
// console.log(bst.isBalanced())
// console.log("-------------")


