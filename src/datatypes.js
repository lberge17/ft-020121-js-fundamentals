// **** PRIMITIVES - declared in language (passed by value, immutable) ****

// STRING
String()
"double quotes"
const desc = "are cool"
`backticks ${desc}`
'single quotes'

// NUMBER
Number()
let float = 2.3578129 // all numbers in JS are doubles
let integer = 8
let negative = -9
NaN // 9 + "hello" => NaN
parseInt("500")
parseFloat("589.35")
parseFloat("589.98") //=> 589

// BOOLEAN
[true, false]
// FALSEY
const falsies = [false, null, NaN, 0, undefined, ""]

// UNDEFINED
undefined // hasn't been assigned, returned when nothing else is returned

// NULL
// an object, intentionally assigned unlike undefined, means nothing or lack of value

// SYMBOL (we won't really use these during the program)
// extra: https://www.youtube.com/watch?v=4J5hnOCj69w
// added in 2015
Symbol('id') // => 32874081680ryhfn182hryf9qnvqk2o0

// **** NON-PRIMITIVES - declared after, by programmers (passed by reference, mutable) ****

// ARRAY

let arr = [1,2,3]
function double(array){
    array.forEach((n, i) => {
        array[i] = array[i] * 2
    })
    return array
}
double(arr)
arr //=> [2,4,6]

// OBJECT (object literals / Plain Old JavaScript Object)
let laura = {
    name: "Laura",
    job: "cohort lead",
    dogs: ["Jitta"],
    dog: {
        name: "Jitta"
    },
    last_name: undefined
}
laura["name"]
laura.name //=> "Laura"

let k = "job"
laura[k]
laura.k = "something else" //=> {k: "something else"}

laura.height = "5'10"

laura === {
    name: "Laura",
    job: "cohort lead",
    height: "5'10"
}

// FUNCTION => actually objects
// closures
function parent() {
    let x = 10
    function child() {console.log(x)}
    child()
}
// child is a closure and has acces to value of x
parent()()

// function expression
let expressedFunc = () => {console.log("I'm an arrow function")}
expressedFunc()

let otherFunc = () => console.log("I'm also an arrow function")
otherFunc()

let doSomething = function() { return true }
doSomething() 

// function declarations

function myFunction() {
    console.log("Hello World")
}