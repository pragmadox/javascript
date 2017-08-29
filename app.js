console.log('my app is running')

//What are the data types in javascript?
//primitive data types
var stringType = 'I am a string'
var numberType = 9
var booleanType = true
var nullType = null
var undefinedType = undefined

//complex data types
var objectType = {}
var arrayType = []

var i=0
for (i=0; i<3; i++) {
    console.log(i)
}

i = 3

while(i > 0) {
    console.log(i)
    i--
}

//conditionals
if(true){
    console.log('run this if true')
} else {
    console.log('run this if not true')
}

if( i===0 || i===1 ) {
    console.log('If one or both of these conditions are true')
}

if(true) console.log('I am done in one line')

//JS Functions
//parameter vs argument
//function declaration
function myName(name){
    console.log(name)
}
myName('Jay')

var ageFun = function(age){
    console.log(age)
}
ageFunc(99)

function(){}
//anonymous functions

//IIFE immediately invoked function expression
(
    function hi(){
        console.log('hello, this function has run.')
    }
())

//JS Scope
//Global Scope
var globalA = 'A'
//Local Scope
function localFunc(){
    var localA = 'a'
    console.log(localA)
}
localFunc()

console.log(globalA)

var a = "A"
function b(){
    var d = "D"
}
function c(){
    b()
}

c()
console.log(a)


