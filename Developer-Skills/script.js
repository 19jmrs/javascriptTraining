'use strict';

// Problem
/* Given an array of temperatures of one day, calculate the temperature amplitude.
Keep in mind that sometimes it might be a sensor error */
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

const maxTemp = function (arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i] && arr[i] != 'error')
            max = arr[i]
    }
    return max
}

const minTemp = function (arr) {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i] && arr[i] != 'error')
            min = arr[i]
    }
    return min
}

const amplitude = maxTemp(temperatures) - minTemp(temperatures)

console.log(`Max Temperature: ${maxTemp(temperatures)}`)
console.log(`Min Temperature: ${minTemp(temperatures)}`)
console.log(`Amplitude: ${amplitude}`)

//PROBLEM 2:
// The function should know receive 2 arrays of temperatures
const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]
const temperatures2 = [3, -2, -9, -1, 'error', 9, 13, 16, 15, 14, 9, 5]

const temperaturesFinal = temperatures1.concat(temperatures2)

const amplitudeFinal = maxTemp(temperaturesFinal) - minTemp(temperaturesFinal)
console.log(`Max Temperature: ${maxTemp(temperaturesFinal)}`)
console.log(`Min Temperature: ${minTemp(temperaturesFinal)}`)
console.log(`Amplitude: ${amplitudeFinal}`)

//bug fixing and ways to debug
const measureKelvin = function () {
    const measurement = {
        type: "temp",
        unit: "celsius",
        value: Number(prompt('Degrees celsius: '))
    }
    const kelvin = measurement.value + 273
    return kelvin
}
//console.table usefull to see objects
console.log(measureKelvin()) */

/* Given an array of forecasted maximum temperatures, the thermometer displays a string
with the temperatures.

Example: [17, 21, 23] will print "... 17C in 1 day, 21C in 2 days, 23C in 3 days"

Create a function 'printForecast' which takes in a array 'arr' and logs a string the the above to the console
*/

const example = [17, 21, 23]

const printForecast = function (arr) {
    for (let index = 0; index < arr.length; index++) {
        console.log(`...${arr[index]}C in ${index + 1} days...`)
    }
}

printForecast(example)