function findDuplicates(array) {

    let duplicates = [];
    let frequencyMap = {};

    // loop once
    // add elements to the map if they don't exists (elementValue) -> frequency
    // each iteration, if element exists in map, update its frequency and check if its two


    for (element of array) {
        if (frequencyMap[element] !== undefined) {
            // maximum number of times an element can appear is twice, so if it's already been recorded, this is number 2
            duplicates.push(element)
        } else {
            frequencyMap[element] = 1
        }
    }


    return duplicates;

}

// console.log("long array: ", findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]))


function maxDepthBinaryTree(root) {

    if (!root) return 0;

    return 1 + Math.max(maxDepthBinaryTree(root.right), maxDepthBinaryTree(root.left))

}


// find cycle starting position

function findCycleStart(head) {

    // fast and slow pointers
    // loop through list until fast == slow
    // move slow to head, then increment both by one until they meet 
    // at that index, the cycle starts

    let slow, fast = head;
    let cycleFound = false;

    while (fast && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow == fast) {
            cycleFound = true;
            slow = head
            break;
        }
    }

    if (cycleFound) {
        while (slow != fast) {
            fast = fast.next;
            slow = slow.next;

            if (slow == fast) {
                return slow;
            }

        }
    }

    return null; // if cycle found is false, return null




}