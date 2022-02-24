// find average of all subarray of a given length (return array)

function findAvgOfAllSubarray(array, subarrayLength) {

    let averages = [];

    // loop over elements once

    let windowStart = 0;
    let windowSum = 0;

    for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {


        windowSum += array[windowEnd]

        if (windowEnd >= subarrayLength - 1) {
            // add average of current window to the averages array
            averages.push(windowSum / subarrayLength);

            // subtract the integer at the window start from window sum
            windowSum -= array[windowStart];

            // move window start
            windowStart++;
        }


    }


    return averages;

}


// console.log(findAvgOfAllSubarray([1, 2, 3, 4, 5], 3)) // 2,3,4

// console.log(findAvgOfAllSubarray([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)) // [2.2, 2.8, 2.4, 3.6, 2.8]

function findSmallestContiguousSubarrayLengthForSum(array, targetSum) {
    let windowStart = 0;
    let windowSum = 0;
    let minLengthSoFar = Infinity;

    for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {

        windowSum += array[windowEnd]

        while (windowSum >= targetSum) {

            //  capture new minimumLengthSoFar
            minLengthSoFar = Math.min(minLengthSoFar, (windowEnd - windowStart + 1))

            windowSum -= array[windowStart];

            windowStart++;

        }

    }
    return minLengthSoFar;
}

console.log(findSmallestContiguousSubarrayLengthForSum([1, 3, 2, 2, 4, 5], 6))