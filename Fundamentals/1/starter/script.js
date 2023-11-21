/*
1st Fundamentals - Values and Variables
*/
const country = 'Portugal'
const continent = 'Europe'
let population = 11000000

console.log(country)
console.log(continent)
console.log(population) 

/* 1st Fundamentals - Data Types */
const isIsland = false
const language = 'portuguese'

console.log(typeof(country))
console.log(typeof(population))
console.log(typeof(isIsland))
console.log(typeof(language))

/* 1st Fundamentals - let, const and var*/
//isIsland = true //see the behavior of assigning a value to a constant

// Operators
let halfPopulation = population / 2
console.log(halfPopulation)

population += 1
console.log(population)

console.log(population > 6000000)
console.log(population < 33000000)

let description = country + " is in " + continent + " and its " + population + " people speak " + language

console.log(description)

//challenges where solved in the course  editor

