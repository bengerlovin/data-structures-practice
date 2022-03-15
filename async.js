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

