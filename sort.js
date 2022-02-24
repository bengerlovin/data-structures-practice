// merge sort

//  divide and conquer in two parts

// 1. mergesort() divides array into two halves
// 2. merge returns the merged two halves

function merge(left, right) {

    console.log("------------------")
    console.log("merging these arrays", left, right)
    let arr = []

    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            console.log("left is less, pushing this:", left[0])
            arr.push(left.shift()) // removes element from first index
        } else {
            console.log("right is less, pushing this:", right[0])
            arr.push(right.shift())
        }
    }

    console.log("one of the two arrays doesn't have any length")

    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    console.log("returing this", [...arr, ...left, ...right])
    console.log("------------------")
    return [...arr, ...left, ...right]
}

function mergeSort(array) {
    console.log("------------------")
    console.log("running mergesort on this array", array)
    console.log("------------------")
    const half = Math.floor(array.length / 2)

    // Base case or terminating case
    if (array.length < 2) {
        return array
    }


    const left = array.splice(0, half) // changes array - takes from 0 through to half index inclusive, leaves array as "right" half
    return merge(mergeSort(left), mergeSort(array))
}

// console.log(mergeSort([4, 8, 7, 2, 11, 1, 3]))




// quick sort


// findMinimumWindow

function findMinimumWindow(arr) {

    let leftPointer = 0
    let rightPointer = arr.length - 1;

    while (arr[leftPointer] < arr[leftPointer + 1] && leftPointer < arr.length - 1) {
        leftPointer++;
    }

    // base case - left pointer made it to the end
    if (leftPointer == arr.length - 1) return 0;

    while (arr[rightPointer] > arr[rightPointer - 1] && rightPointer >= 0) {
        rightPointer--;
    }

    let subArray = arr.slice(leftPointer, rightPointer + 1)

    let subMin = Math.min(...subArray)
    let subMax = Math.max(...subArray)


    // extend window to the left, checking if element is greater than min
    // extend window to the right, checking if element is less than max

    while (arr[leftPointer - 1] > subMin && leftPointer > 0) {
        leftPointer--;
    }

    while (arr[rightPointer + 1] < subMax && rightPointer < arr.length - 1) {
        rightPointer++;
    }

    return rightPointer - leftPointer + 1;



}

console.log(findMinimumWindow([1, 3, 2, 0, -1, 7, 10])) //5