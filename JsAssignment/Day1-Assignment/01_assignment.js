// Code for Simple Interest
do{
    let amount = prompt("Enter the Amount");
    let interest = parseInt(prompt("Enter Interest Rate"));
    let numYear = prompt("Enter the number of Year");
    if(!isNaN(amount.trim()) && !isNaN(interest) && !isNaN(interest)){
        let simpleInterest = (amount * interest * numYear) / 100
        alert("Simple Inerest is: " + simpleInterest);
        break;
    }else{
        alert("please enter valid number");
    }
}while(true);


console.log("\n====Check Palindrome String===\n");

// is palindrome string

function isPalindrome(str){
    return str === str.split("").reverse().join("");
}
console.log(isPalindrome("LeveL")); // true
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("deifieD")); // false
console.log(isPalindrome("L e v e L")); // true
console.log(isPalindrome("hello")); //false

// Code for area of Circle

console.log("====Area of Circle With Math.PI===\n");
let radius = 10;
const area = function(radius){
    return Math.PI * radius * radius;
}
console.log(area(radius), "Aria of radius: " + radius);

console.log("====Area of Circle With Manual Formula===\n");
let radius1 = 10;
const area1 = function(radius1){
    return 22/7 * radius1 * radius1;
}
console.log(area(radius), "Aria of radius: " + radius);

// Code for copying one object to another object

// Method 1
console.log("\n====Copying one object to another object Shallow Copy 1===\n");
const obj1 = {
    name: "Deepak",
    age: 40,
    address:{
        city: "New Yark",
    }
}
const copyObj1 = Object.assign({}, obj1);
copyObj1.address.city = "CHINA";
console.log(copyObj1);//Output with changed city name.
console.log(obj1);//Output with changed city name.

// Method 2
console.log("\n====Copying one object to another object Shallow Copy 2===\n");
const obj2 = {
    name: "Deepak",
    age: 40,
    address:{
        city: "New Yark",
    }
}
const copyObj2 = {...obj2};
copyObj2.address.city = "Ingland";
console.log(copyObj2); //Output with changed city name.
console.log(obj2); //Output with changed city name.
// Method 3
console.log("\n====Copying one object to another object Deep Copy 1===\n");
const obj3 = {
    name: "Deepak",
    age: 40,
    address:{
        city: "New Yark",
    }
}
const copyObj4 = JSON.parse(JSON.stringify(obj3));
copyObj4.address.city = "USA";
console.log(copyObj4); //Output with Changed Address City
console.log(obj3); // Output with original Value of address

/*
* create a list of objects of Employee with info as follow :
* Name, age, salary ,DOB
* filter all employees with salary greater than 5000
* group employee on the basis of their age
* fetch employees with salary less than 1000 and age greater than 20. 
Then give them an increment 5 times their salary.
*/

//create a list of objects of Employee with info as follow : Name, age, salary ,DOB
const employee = [
    {name:"Ram", age:40, salary:6000, dob:"28/07/1983"},
    {name:"Shyam", age:30, salary:5000, dob:"28/07/1995"},
    {name:"Mohan", age:40, salary:6000, dob:"28/07/1984"},
    {name:"Sohan", age:45, salary:800, dob:"28/07/2005"},
    {name:"Geeta", age:50, salary:5500, dob:"28/07/1975"},
    {name:"Ghanshyam", age:45, salary:900, dob:"28/07/2005"}
];
console.log("\n===Employee list Created===\n");
console.log("Employee created: ", employee);
// Filter all employees with salary greater than 5000
console.log("\n===Employee List Greater Than 5000===\n");
const greaterSal = employee.filter((emp) => emp.salary > 5000)
console.log(greaterSal);

// Group employee on the basis of their age
console.log("\n===Group Employee on the basis of their Age===\n");
const groupEmp = employee.reduce((acc, emp)=>{
    if(!acc[emp.age]){
        acc[emp.age] = [];
    }
    acc[emp.age].push(emp);
    return acc;
},{});
console.log(groupEmp);

// Fetch employees with salary less than 1000 and age greater than 20.Then give them an increment 5 times their salary.
console.log("\n===5 time Salary Increment less than 1000 and Age > 20===\n");
const incrementSal = employee
.filter((emp) =>emp.salary < 1000 && emp.age > 20)
.map((emp)=> {
     return {...emp, salary: emp.salary*5};
});
console.log(incrementSal);