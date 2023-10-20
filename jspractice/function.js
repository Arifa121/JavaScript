/*
    functions - performs specific task can be called  multiple 
    times optionally takes input as parameters and optionally returns value
*/

//function decleration
function ispositive(num){//parameter
    return num>0
}
console.log(ispositive(3))

console.log(ispositive(-3))//argument

function sayhello(){//no parameter
    console.log('hello')
}


console.log(findproduct(3,3)) //hoisting
sayhello()
function findproduct(a,b){
    return a*b
}

console.log(findproduct(3,3))
console.log(findproduct)
console.log(typeof findproduct)

//default parameter
function greet(name){
    console.log('hi',name)
}
g