// Boolean
    // true or false

let score = 100
if (score === 100) {
    console.log("great score");
}

// false values are:
// undefined, null, 0, -0, NaN, "", */

console.log(typeof(false.toString()));

// null: special object whose value is "no object"

console.log(typeof(null));
console.log(typeof(undefined));


// undefined: is a predefined global constant
// null is a language keyword
    // Both define absense of value 

// what is difference b/w null & undefined??
// what is the diff. b/w == & ===?



// Symbol: it return a unique value and a new value
    // both are same:
    String("shivaraj")
    "shivaraj"

// Symbol      here mySum and mySym2 are diff.
let mySym = Symbol("p1");       // similar to uuid
// let mySym2 = Symbol("p1");
// console.log(mySym == mySym2);
// console.log(mySym === mySym2);


// What is diff. b/w a symbol, String/Number is??

// here both priority and priority2 are same, both return 'p2'
let priority = Symbol.for("p2")
// let priority2 = Symbol.for("p2")
// console.log(priority == priority2);
// console.log(priority === priority2);


let WIN = Symbol("WINDOW")
let AILE = Symbol("AILE")
let MID = Symbol("MID")

let crew = "WINDOW"

function getSeat(getValue) {
    switch (getValue) {
        case WIN:
            return "SEAT is alloted for WIN"
        case AILE:
            return "SEAT is alloted for AILE"
        case MID:
            return "SEAT is alloted for MID"

        default:
            console.log("NO seat alloted!");
    }
}

console.log(getSeat(crew));



// Global Object
    // constants like: undefined, NaN, 
    // functions like - isNaN(), parseInt(), eval()
    // Constructor like - Date(), String(), Object()
    // Math, JSON


    /* Global Objects are not reserved keywords, BUT null is a reserved keyword */

    // global object should be treated as reserved



    // What is Global? 2 type: Node global: is from Node env (Node is Global) & Browser global: here Global is browser

// 'this' here is Node Global  
    console.log(this);


    // Now in 2020: ES2020, global this
    console.log(globalThis);


     