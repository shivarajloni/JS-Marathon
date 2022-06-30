// Integer Literals

0
100             // this is base 10

0xff => 255     // base is different
0b, 0B          // base is different


// Floating point Literals

1.9     // after decimal precision
3.14    //

3.03e23     // translates to => 3.03 * 10 to the power 23

let billion = 1_000_000_000   // not a std. to use!!!


// Arithmetic
        // +, -, *, (division)/, (modulo)%, (2 to the power 4)**: 2**4 = 16

// console.log(2+2);

// Maths Libraries
Math.pow(2, 9)          // 2 rise to power 9
Math.pow(5, 1/3)        // 5 cube root of 3
Math.round(.6)      // nearest rounded digit is 1
Math.ceil(.6)       // Max nearby of .6 => 1
Math.floor(.6)      // Min nearby of .6 => 0

Math.abs(-5)
Math.min(2, 6, 7, 4, 8)
Math.max(2, 6, 7, 4, 8)
Math.random()               // returns randoms numbers b/w 0 & 1

// ES6 & new methods
Math.cbrt(27)           // cube root
Math.hypot(3, 4)        // to get hypotenuse
console.log(Math.clz32(0xf));       // to get a tralling zeros to make it 32 bit

//In JS there is no errors, it only gives => Infinity, no errors; just Infinity
                // divide by 0; it's just a NaN

        Number.MAX_VALUE
        console.log(Number.MAX_SAFE_INTEGER);

        // methods:         
            Number.isFinite, isInteger
            Number.isNaN(2);

    // to use 64 bit floating: .console.log(Number.parseInt("3", 3.9, "3z"))

// parseInt
// parseFloat




let statementOne = .3 - .2
let statementTwo = .2 - .1

console.log(statementTwo === statementOne);             // O/P: false
console.log(statementOne === .1);               // false
console.log(statementTwo === .1);               // true
console.log(.3 - .2);                       // O/P: 0.0999998
console.log(.2 - .1);                       // O/P: 0.1




// BigInt

// let myBigInt = 123n
// console.log(myBigInt);

let googol = "1" + "0".repeat(100)
console.log(BigInt(googol));                // adds precision of 'n'

