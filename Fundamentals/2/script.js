'use strict'; //let us write more secure code. More clear error details

/*
let hasDriversLicence = false
const passTest = true

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log('I can drive')
*/
console.log("=== start functions ======")
function logger() {
    console.log('My name is Jorge')
}

logger()

function fruitProcessor(apples, oragens) {
    const applePieces = cutFruitPieces(apples)
    const orangeePieces = cutFruitPieces(oragens)

    const juice = `Juice with ${applePieces} apples and ${orangeePieces} oragens`

    return juice
}

const appleJuice = fruitProcessor(5, 0)

console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)

console.log("=== end functions ======")

console.log("===functions declarations vs expressions ======")
//function declaration
function calcAge1(birthYear, currentYear) {
    return currentYear - birthYear
}

//function expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear
}
const age2 = calcAge2(1998)
console.log(calcAge1(1998, 2023), age2)

//function declaration lets us call the function before the declaration while function
// expression does not allow us to do that

console.log("=== ARROW FUNCTIONS ======")

const calcAge3 = birthYear => 2023 - birthYear
const age3 = calcAge3(1998)
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge1(1998, 2023)
    const retirement = 65 - age
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1998, 'Jorge'))

//arror functions do not get this keyword
console.log('======= FUNCTION CALLING ANOTHER FUNCTIONS')

function cutFruitPieces(fruit) {
    return fruit * 4
}
console.log(fruitProcessor(5, 2))

console.log("======= ARRAYS =======")

const friends = ['Michael', 'Steve', 'Peter']
const years = new Array(1991, 1984, 2008, 2020)

const newLength = friends.push('Jay') // adds element at the end of the array and returns new lenght
friends.unshift('jonhn') // adds to the start of the array

friends.pop() // removes last element - returns the element popped 
friends.shift()//removes the first element of the array - returns the element removed

friends.indexOf('Steve') //returns the index of the element steven

friends.includes('Steve') //returns true if the element exists and false if not

console.log("========= OBJETCS =========")

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

const lastnameJ = jonas.lastName //access the objetc
const lastnameJ1 = jonas['lastName'] //access the objetc -  second way of doing the same

const nameKey = 'Name'
//console.log(jonas['first' + nameKey]) //expression is also possible to use

//we can use function inside the objetc, that can either receive a value or use an already
//declared value
const jorge = {
    firstName: 'Jorge',
    lastName: 'Sa',
    birthYear: 1998,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: true,
    // Age: function () {
    //     return 2023 - this.birthYear
    // }
    /* calcAge: function () {
         this.age = 2023 - this.birthYear
         return this.age
     }*/
}

console.log(jorge.age)

console.log("====== LOOPS =======")
for (let rep = 1; rep < 11; rep++) {
    console.log(`Lifting weights repetitions ${rep} 🏋️‍♂️`)
}

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i])
}