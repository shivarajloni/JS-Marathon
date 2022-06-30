

// Primitive Values
// undefined, null, strings, numbers: these values can NOT be changed!!



// Objects are mutable (you can change them)
let myObject = {name: 'shivaraj', lastName: "sharma", two: '2', age: 23, college: "msruas"}
myObject.name = "notShivaraj",
myObject.lastName = "loni"

// array are also mutable (you can change)
let heroScore = [2, 4, 5, 6, 8]
heroScore[1] = 5

// Object are called as reference types
// reference is assigned

let arrayRef = [1, 2]

let anotherArrayRef = arrayRef

anotherArrayRef[0] = 5
console.log(arrayRef);
console.log(arrayRef === anotherArrayRef);

let yetAnotherArray = Array.from(arrayRef)
console.log(yetAnotherArray === arrayRef);

// ***************************************************************************************

// Type Conversion

// JS gets what JS wants

10 + "objects"              // "10objects"     
"7" * "4"               // "28"

let num = 1 - "x";
console.log(num);
console.log(num + " objects");


// true gets to 1
// false, "" gets to 0

// forcefull conversion

Number("3")
let infosysStock = 1600.4343
infosysStock.toFixed(2)

console.log(Boolean(""));
console.log(Boolean([]));


// objects to primitive value
/* 
1. prefer-string
2. prefer-number
3. No-preference
 */


let colorValue = 14;
let binaryColorValue = colorValue.toString(2);              // binary code of 14 => 1110
console.log(binaryColorValue);

console.log({1: "one"}.toString());


let newDate = new Date(2022, 1, 1);
console.log(newDate.valueOf());


// preferNumber => valueOf() => toString()

// [] => (preferString) "" => 0 
