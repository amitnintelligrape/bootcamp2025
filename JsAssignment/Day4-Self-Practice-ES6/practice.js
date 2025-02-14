//1. convertion of following function to arrow function.
// function multiply(a, b) {
//     return a * b;
// }

let multiply = (a, b) =>{
    return a * b;
}
  
console.log(multiply(2,5));

//2. Write a function getFullName that takes an object with properties firstName and lastName, and returns a string with the full name
let getFullName = ({firstname, lastname}) => `${firstname} ${lastname}`;
const person = {firstname:"Amit", lastname:"Narayan"}
console.log(getFullName(person));

//3. Write a function greet that accepts a name and a greeting. If no greeting is passed, the default greeting should be "Hello". 
let greet =(name, greeting)=>{
    greeting = greeting || 'Hello';
    return `${greeting}, ${name}`;
}
console.log(greet("Amit", "Hi"));
console.log(greet("Amit"));

//4. Given the object below, use object destructuring to extract the properties title and author and log them to the console.
const book = {
    title: "1984",
    author: "George Orwell",
    year: 1949
};
const {title,author,year} = book;
console.log(`Title is: ${title} and Author name is: ${author}`);

//5. Destrure the below array 
let company = [
    "TTN",
    "Infosys",
    "HCL"
];

let [x,y,z] = company;
console.log(`${x}, ${y}, ${z}`)

//6. Destrure the multiple return values

function getDate() {
    let date = new Date();
    return [date.getDate(), date.getMonth() + 1, date.getFullYear()]; 
}
  
let [day, month, year1] = getDate();
console.log(`${day}/${month}/${year1}`);

//7. swap below script.
let a = 2;
let b = 1;

[b, a] = [a, b]
console.log(a,b);

//8. Use of spread operator as argument use

let doctor = (name, exp) =>{
    return name + " " + exp;
}

let data = ['Dr Avi', 20]
console.log(doctor(...data));

//9. use spread operator as parameter
let sum = (...numbers) =>{
    return numbers.reduce((total, num)=> total+num, 0)
}
console.log(sum(2,4,6,8));

//10. Write a function describeCar that takes an object with properties make, model, and year, and returns a string: "This car is a [year] [make] [model]." using template literals.

let describeCar = ({make, model, year})=>{
    return `This car is a ${year} ${make} ${model}.`
}
let Car ={
    make:"Maruti",
    model:"baleno",
    year: 2025
}
console.log(describeCar(Car));

//11. Filter unique array members using Set.

let number = [1, 2, 2, 3, 4, 4, 5]
const uniqueNumber = [...new Set(number)]; //using Set
console.log(uniqueNumber);

const uniqueNumber1 = number.filter((value, index, num)=> num.indexOf(value)===index); //using filter
console.log(uniqueNumber1);

let  member = ["Amit", "Milan", "Amit", "Yogi", "Sahib", "Raushan", "Milan"];
const uniqueMember = [...new Set(member)]; //using Set
console.log(uniqueMember);

const uniqueMember1 = member.filter((value, index, mem)=> mem.indexOf(value) === index);// using filter
console.log(uniqueMember1);
