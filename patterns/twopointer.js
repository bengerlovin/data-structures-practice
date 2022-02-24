// two sum

// for an array, return array of elements that sum to target (only two)
// if no sum, return null

// [1,5,9], target 10, return [1,9]


function twoSum(array, targetSum) {
    // naive approach would be nested for loops
    // map with complement

    let mapWithPairs = {};  // map values to their indices (to fetch later)

    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];
        let complement = targetSum - currentElement;  // remainders or complements are typical with sums

        if (mapWithPairs[complement] != undefined) {
            return [map[complement], i]; // indices of those that sum
        } else {
            map[currentElement] = i;
        }

    }

    // base case
    return null;


}