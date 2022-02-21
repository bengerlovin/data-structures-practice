var obj1 = {
    valueOfThis: function () {
        return this;
    },
    name: 'ben'
}
var obj2 = {
    valueOfThis: () => {
        return this;
    }
}

// console.log(obj1.valueOfThis()) // Will return the object obj1
// console.log(obj2.valueOfThis()) // Will return window/global object

function addNumbers(firstNumber, ...args) {
    console.log(firstNumber, args)
}

// addNumbers(1, 2, 3);

const person = {
    parent: {
        child: { canCry: false, age: 24 }
    }
}

// accessing nested properties, as well as using colon to rename the property that's destructured
const { parent: { child: newName } } = person

// console.log(newName)

const users = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
]

// destructure property from objects stored in array (we're iterating over an array, 
// which is in fact iterable, not the object itself)

// for (let { id } of users) {
//     console.log(id)
// }

// destructuring in functions

const ben = { name: 'Ben', age: 24 }

function greetPerson({ name, age }) {
    console.log(`hello ${name}, you are ${age} years old`)
}

//  nullish coalescing - checks if a value is null or undefined in one expression

function printPerson(name, age, occupation, taxrate) {
    name = name ?? 'name'
    age = age ?? 0
    occupation = occupation ?? 'unemployed'
    // old code
    // taxrate = taxrate || 0.05
    taxrate = taxrate ?? 0.05
}

// if we pass a tax rate of 0  - which is a valid tax rate - unless we check for null or undefined it will take 0 as a falsy value

