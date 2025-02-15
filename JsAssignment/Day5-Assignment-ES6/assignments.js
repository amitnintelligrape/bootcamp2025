//Q1. Filter unique array members using Set.

// let number = [1, 2, 2, 3, 4, 4, 5]
// const uniqueNumber = [...new Set(number)]; //using Set
// console.log(uniqueNumber);

// const uniqueNumber1 = number.filter((value, index, num)=> num.indexOf(value)===index); //using filter
// console.log(uniqueNumber1);

let  member = ["Amit", "Milan", "Amit", "Yogi", "Sahib", "Raushan", "Milan"];
const uniqueMember = [...new Set(member)]; //using Set
console.log(uniqueMember);

// const uniqueMember1 = member.filter((value, index, mem)=> mem.indexOf(value) === index);// using filter
// console.log(uniqueMember1);

//Q2. Filter anagrams using Map.
const anagrams = ['bat', 'tab', 'cat', 'act', 'tac', 'dog']

const anagramMap = new Map();
anagrams.forEach(anagram =>{
    const sortedValue = anagram.split('').sort().join('');
    if(!anagramMap.has(sortedValue)){
        anagramMap.set(sortedValue, []);
    }
    anagramMap.get(sortedValue).push(anagram);
})

const sortedAnagram = [...anagramMap.values()];

console.log(sortedAnagram);


//Q3. Write a program to implement inheritance upto 3 classes.The Class must contain private and public variables and static functions.

class Teacher{
    #experties;
    constructor(name, age, experties){
        this.name = name;
        this.age = age;
        this.#experties = experties;
    }
    infoTec(){
        console.log(`Hi, I am ${this.name} and my age is ${this.age} ${this.#experties}`);
    }
}

class Student extends Teacher{
    constructor(name, age,experties, stream){
        super(name, age,experties);
        this.stream = stream;
    }
    infoStu(){
        console.log(`Hi, I am ${this.name} and my age is ${this.age} as well as my stream is ${this.stream}`);
    }
    static info(){
        console.log("this is a static function");
    }
}
class Junior extends Student{
    constructor(name, age,experties, stream, empid){
        super(name, age,experties,stream);
        this.empid = empid;
    }
    infoJun(){
        console.log(`Hi, I am ${this.name} and my age is ${this.age} as well as my stream is ${this.stream} ${this.empid}`);
    }
}

let teacher = new Teacher('Amit', 43, "Eng");
let student = new Student('Milan', 30,'Fullstack', 'JS FE');
let junior = new Junior('Kritika', 28,'JQuery','JS UI', 1706);
teacher.infoTec();
student.infoStu();
Student.info();
//console.log(student.name);//public variable can access here
//console.log(student.#experties); //Error: Private field '#experties' must be declared in an enclosing class

//Q4. Write a program to implement a class having static functions

class Ttn{
    constructor(bu, competency){
        this.bu = bu;
        this.competency = competency;
    }
    ttnInfo(){
        console.log(`My BU is ${this.bu} and ${this.competency}`);
    }
    static info(){
        console.log('this a static function');
    }
}

let newTtn = new Ttn('America', 'Drupal')
newTtn.ttnInfo();
//newTtn.info(); //Error: newTtn.info is not a function because its static function and its not call with instance. its only call in class it self;
Ttn.info(); //It's call with his own class.

//Q5. Import a module containing the constants and method for calculating area of circle, rectangle, cylinder.
//Ans. Created module with name method.js and import in main.js.

//Q6. Import a module for filtering unique elements in an array.
//Ans. Created module with name uniqueArray.js and import in main.js.

//Q7. Write a program to flatten a nested array to single level using arrow functions.

const arr = [1, [2, [3, [4, 5]]]];

//Method 1 with forEach and contcat
const flatArray = (array)=>{
    let flatAr = [];
    array.forEach((item)=>{
        if(Array.isArray(item)){
            flatAr = flatAr.concat(flatArray(item));
        }else{
            flatAr.push(item);
        }
    });
    return flatAr
} 
const newArray = flatArray(arr);
console.log(newArray);

//Method 2 with flat method
const flattenArr = arr.flat(Infinity);
console.log(flattenArr);

// Method 3 with reduce and concat.
const fArr = (arr)=>arr.reduce((flat, item)=>
    flat.concat(Array.isArray(item) ? fArr(item):item),
[])

console.log(fArr(arr));
