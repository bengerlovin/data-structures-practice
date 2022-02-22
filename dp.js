function fib(n) {
    if (n <= 2) return 1;

    return fib(n - 2) + fib(n - 1)
}



// memoization - store duplicate subproblems
// use js object ( hashmap - fast access )

function fibMemo(n, memo = {}) {
    if (n in memo) return memo[n];

    if (n <= 2) return 1;

    // pass by reference
    memo[n] = fibMemo(n - 2, memo) + fibMemo(n - 1, memo)
    return memo[n]
}


// grid traveler

const gridTraveler = (rows, columns) => {
    if (rows === 1 && columns === 1) return 1
    if (rows === 0 || columns === 0) return 0;

    return gridTraveler(rows - 1, columns) + gridTraveler(rows, columns - 1)
}

// console.log(gridTraveler(1, 1)) // 1
// console.log(gridTraveler(2, 3)) // 3
// console.log(gridTraveler(3, 2)) // 3
// console.log(gridTraveler(18, 18)) // 2333606220

const gridTravelerMemo = (rows, columns, memo = {}) => {

    const key = `${rows}-${columns}`

    if (key in memo) return memo[key]


    if (rows === 1 && columns === 1) return 1
    if (rows === 0 || columns === 0) return 0;

    memo[key] = gridTravelerMemo(rows - 1, columns, memo) + gridTravelerMemo(rows, columns - 1, memo)
    return memo[key]


}

// console.log(gridTravelerMemo(1, 1)) // 1
// console.log(gridTravelerMemo(2, 3)) // 3
// console.log(gridTravelerMemo(3, 2)) // 3
// console.log(gridTravelerMemo(18, 18)) // 2333606220


// canSum(target, [array of values]): boolean -> can use values multiple times
// canSum(7, [3,4,5,7]) -> true (3+4 and just lone 7)

function canSum(target, numbers, memo = {}) {

    if (target in memo) return memo[target]

    if (target === 0) return true;
    if (target < 0) return false;

    // branch for every elements of numbers array
    for (let num of numbers) {
        let remainder = target - num;
        if (canSum(remainder, numbers, memo)) {
            // if remainder is true, we know by definition target is
            // this is because if EITHER children of the canSum recursive call is true, the root is true (i.e. the target)
            memo[target] = true;
            return true;
        }
    }

    // attempt all possibilities, then return false
    memo[target] = false;
    return false;

}

function howSum(target, numbers) {


    // base cases
    if (target === 0) return [];
    if (target < 0) return null;

    for (let element of numbers) {
        let remainder = target - element;
        const result = howSum(remainder, numbers);
        if (result != null) {
            // spread elements that already exist, then add new element
            return [...result, element]
        }
    }

    return null;

}

function howSumMemo(target, numbers, memo = {}) {

    if (target in memo) return memo[target]
    // base cases
    if (target === 0) return [];
    if (target < 0) return null;

    for (let element of numbers) {
        let remainder = target - element;
        const result = howSumMemo(remainder, numbers, memo);
        if (result != null) {
            // spread elements that already exist, then add new element
            memo[target] = [...result, element]
            return [...result, element]
        }
    }

    memo[target] = null;
    return null;
}

// console.log(howSumMemo(300, [4, 7]))


function bestSum(target, numbers, memo = {}) {

    if (target in memo) return memo[target]

    if (target === 0) return [];
    if (target < 0) return null;

    let shortestCombination = null;

    for (const num of numbers) {
        let remainder = (target - num)
        let result = bestSum(remainder, numbers, memo)

        if (result !== null) {
            const workingCombination = [...result, num]
            if (shortestCombination === null || workingCombination.length < shortestCombination.length) {
                shortestCombination = workingCombination;
            }
        }
    }

    memo[target] = shortestCombination;
    return shortestCombination

}

console.log(bestSum(8, [2, 3, 5])) // 3,5
console.log(bestSum(8, [1, 4, 5])) // 4,4
console.log(bestSum(100, [1, 2, 5, 25])) // 25,25
