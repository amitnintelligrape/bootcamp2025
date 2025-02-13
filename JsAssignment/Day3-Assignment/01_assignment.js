//Q1. Create a hierarchy of person, employee and developers.
function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.message= function(){
    console.log(`My Name is ${this.name} and I am ${this.age} year old.`);
}
function Employee(name, age, empid){
    Person.call(this, name, age);
    this.empid = empid;
}
Employee.prototype = Object.create(Person.prototype)
Employee.prototype.empMessage = function(){
    console.log(`My Name is ${this.name} and I am ${this.age} year old. My EMP id is ${this.empid}`);
}

function Developer(name, age, empid, language){
    Employee.call(this, name, age, empid);
    this.language = language;
}
Developer.prototype = Object.create(Employee.prototype)
Developer.prototype.devMessage = function(){
    console.log(`My Name is ${this.name} and I am ${this.age} year old. My EMP id is ${this.empid} my core language is ${this.language}`);
}

let person1 = new Person('Milan', 30);
let emp = new Employee('Amit', 40, 2015);
let dev = new Developer('Amit Narayan', 40, 1706, "JS FrontEnd");
person1.message(); // My Name is Milan and I am 30 year old.
emp.message(); // My Name is Amit and I am 40 year old.
emp.empMessage(); // My Name is Amit and I am 40 year old. My EMP id is 2015
dev.message(); // My Name is Amit Narayan and I am 40 year old.
dev.empMessage(); // My Name is Amit Narayan and I am 40 year old. My EMP id is 1706
dev.devMessage(); // My Name is Amit Narayan and I am 40 year old. My EMP id is 1706 my core language is JS FrontEnd

// Q2. Given an array, say [1,2,3,4,5]. Print each element of an array after 3 secs.

const arr = [1,2,3,4,5]
arr.forEach((val) =>{
    setTimeout(function(){
       console.log(val);
    }, val*3000);
})

// Q3. Explain difference between Bind and Call (example).

//Ans. Both .call() and .bind() are used to set the this context. But both have different purpose and behavior lilk .call() we use "argument" immidialtly after "this" as well as its executed immidiatly. In other hand .bind() used for create a new function for event handling and it does not executed immidiatly its's only executed when new function is invoked and we can pass "this" context and "argument" passed later. belwo is the Example:

// .call()
function message(name, age){
    console.log(`Hello my name is ${name}, my age is ${age} year old and I am working as ${this.job}`);
}

const Eng = {job: "Engineer"};
message.call(Eng, "Milan", 40); //function invoke immidiate and "this" and "arg" pass immidiate after "this" during immidiate execution.

// .bind()
function mess(name, age){
    console.log(`Hello my name is ${name}, my age is ${age} year old and I am working as ${this.job}`);
}
const person2 = {job: "Engineer"};
const result = message.bind(person2); //create new function and pass first "this" context
result("Milan", 35); // Passed argument later during new function invoked.

// Q4. Explain 3 properties of argument object.

// 1. We can access the individual argument pass to the function using numeric indices similar to accessig element as array.

function x(){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}
x('Amit', 'Milan', 'Yogi')
//output:
//Amit
//Milan
//Yogi

//2. The length property of the argument indicate the number of argument passed.

function example() {
    console.log("Argument Length is: ", arguments.length);
}

example(1, 2, 3); // Output: 3
example("amit", "Milan"); // Output: 2

//3. We can iterate the arguments with for loop.

function num(){
    for(let i = 0; i < arguments.length; i++ ){
        console.log(arguments[i])
    }
}
num(1,2,3,4,5,6)

//Q5. Create a function which returns number of invocations and number of instances of a function.

function fTracker(){
    let count = 0;
    let instanceSet = new Set();

    function invoke(instance){
        count++;
        instanceSet.add(instance);
        console.log(`invocation count is ${count} and instances is ${instanceSet.size}`)
    }
    return invoke;
}
const resutlFunc = fTracker();
resutlFunc('as');
resutlFunc('ad');
resutlFunc('ac');

// Q6. Create a counter using closures.
function createCounter(){
    let count = 0;
    isRunning = false;
    function start(){
        if (!isRunning) {
            interval = setInterval(()=>{
                count++;
                //document.getElementById('timer').innerHTML = count;
            }, 800)
        }
        isRunning = true;
    }
    function pause(){
        if (!isRunning) {
            return;
        }
        clearInterval(interval)
        isRunning = false;
        //document.getElementById('timer').innerHTML = count;
    }
    function stop(){
        if (!isRunning) {
            return;
        }
        isRunning = false;
        count = 0; 
        clearInterval(interval);
        //document.getElementById('timer').innerHTML = count;
    }
    return{
        start,
        pause,
        stop
    };
}

const counter = createCounter();
counter.start();
function pause(){
    counter.pause();
}
function play(){
    counter.start();
}
function stop(){
    counter.stop();
}

//Q.7  Explain 5 array methods with example.
//A. Following are the five methods for array
let array = [1,2,3,4,5,6];
let newArray = [6,7,8,9,10,3,4,5];
let nestedArray = [1, [2, [3, [4, 5]]]];
// 1. reverse() method
console.log(array.reverse())
// Here reverse() method do the complete array element in reverse order. It is also modify the Original array.

//2. sort() method
console.log(newArray.sort()) //output [10,3,4,5,6,7,8,9]
// Here sort() method compare the value as a string not numerically. if we need to sort numerically then we have to pass comparition function as below.
console.log(newArray.sort((a,b)=> a-b)) //output [3,4,5,6,7,8,9,10]
//Also above codes will be modify the Original array.

//3. flat() method
console.log(nestedArray.flat(Infinity)) //output [1,2,3,4,5]
//Here flat(Infinity) doing flatten an array of arrays (deeply) recursively. Also it's not modify the original array

//4. concat() Method.
console.log(array.concat(newArray)) // output: [1,2,3,4,5,6,6,7,8,9,10,3,4,5]
// Here concat() merge newArray under array. It's not modify the original array.

//5. .push() Method
array.push(newArray) // Here newArray pushed after last number array.
console.log(array) // Here output will be [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10, 3, 4, 5] due to push() modified the original array.