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

console.log(mergeSort([4, 8, 7, 2, 11, 1, 3]))




// quick sort