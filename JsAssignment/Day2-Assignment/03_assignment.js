/*
    * Predict the output of the given below snippet.
*/
var x = 5;
function first(){
    console.log(x); //Line 1
    var y = 10;

    function second(){
        console.log(y); //Line 2
        console.log(z); //Line 3
        var z = 20;
    }
    second();
}
first();
console.log(y) //Line 4

//output: 5, 10 ,undefined, ReferenceError: y is not defined

//Q. Explain how hoisting affects the execution of console.log(z) in second(): 
//A. When the first() function is invoked, it starts executing, and within it, the second() function is called. During the execution of second(), JavaScript hoists the declaration of var z to the top of the second() function's scope. However, only the declaration is hoisted, not the initialization. This means that when console.log(z) is called before z is initialized, it prints "undefined", as the variable z exists but hasn't been assigned a value yet.

//Q. Explain the scope chain for console.log(y) in second().
//A. The second() function is lexically placed inside the first() function, meaning it has access to both its own scope and the parent scope. This is called the scope chain. Therefore, when console.log(y) is called inside second(), it refers to the y variable from its parent scope, which is defined in the first() function (var y = 10).

//Q. What happens when console.log(y) is executed outside first() (Line 4)? Why?
//A. The output will be "ReferenceError: y is not defined" because the variable y is declared inside the first() function. Since variables declared with var have function scope, y is only accessible within the first() function. Therefore, trying to access y outside of that function results in a "ReferenceError" because it's out of scope.

// Modify the code to use let instead of var and observe any differences.
let x = 5;
function first(){
    console.log(x); //Line 1
    let y = 10;

    function second(){
        console.log(y); //Line 2
        console.log(z); //Line 3
        let z = 20;
    }
    second();
}
first();
console.log(y)
//output: 5, 10, Reference Error: can not access "z" before initialization.