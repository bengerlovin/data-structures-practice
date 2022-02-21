let sleep = ms => new Promise((r, j) => setTimeout(r, ms));

console.log("begin");
console.log(step1())
console.log(step2())
console.log("all steps started");

// ----------------------------------------------

async function step1() {

    console.log("starting step 1");
    await new Promise((r, j) => {
        setTimeout(() => {
            r(console.log("step 1 timeout"))
        }, 0)
    })
    console.log("step 1 handled");
} // step1()

// ----------------------------------------------

async function step2() {

    console.log("starting step 2");
    setTimeout(() => {
        console.log("step 2 timeout")
    }, 0)
    console.log("step 2 handled");
} // step2() 

// async function addTenAndReturnNumber(number) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(number + 10)
//         }, 1000)
//     })
// }

// (async function () {
//     // notice that we have to mark the callback function as async too
//     // map((number) => {...}) will throw an "Unexpected Token" error on the await keyword

//     const result = [41, 42, 43].map(async (number) => {
//         return await addTenAndReturnNumber(number)
//     })

//     let results = await Promise.all(result);
//     console.log(results)
// })()