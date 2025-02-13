/* Create a object calculator, which will have methods:
    *
    * read
    * add
    * subtract
    * multiply. 
    * 
* read method will use prompt to ask two values from user.
*/
const calculator = {
    read: function(){
        this.firstValue = parseFloat(prompt("Enter First Value"));
        this.secondValue = parseFloat(prompt("Enter Second Value"));
        if(!isNaN(this.firstValue*this.secondValue)){
            document.getElementById('read').innerHTML=`First Number is ${this.firstValue} and Second Number is ${this.secondValue}`;
            console.log(`First Number is ${this.firstValue} and Second Number is ${this.secondValue}`)
        }else{
            document.getElementById('read').innerHTML="Please Enter Valid Value.";
        }
    },
    add: function(){
        if(!isNaN(this.firstValue*this.secondValue)){
            result = this.firstValue + this.secondValue;
            console.log(`Current Addition Value is: ${result}`);
            document.getElementById('add').innerHTML=`Current Addition Value is: ${result}`;
        }else{
            document.getElementById('add').innerHTML="Please Enter Valid Value.";
        }
    },
    subtract: function(){
        if(!isNaN(this.firstValue*this.secondValue)){
            result = this.firstValue - this.secondValue;
            console.log(`Current Subtract Value is: ${result}`);
            document.getElementById('subtract').innerHTML=`Current Subtract Value is: ${result}`;
        }else{
            document.getElementById('subtract').innerHTML="Please Enter Valid Value.";
        }
    },
    multiply: function(){
        if(!isNaN(this.firstValue*this.secondValue)){
            result = this.firstValue * this.secondValue;
            console.log(`Current Multiply Value is: ${result}`);
            document.getElementById('multiply').innerHTML=`Current Multiply Value is: ${result}`;
        }else{
            document.getElementById('multiply').innerHTML="Please Enter Valid Value.";
        }
    }
}
function readCalc(){
    calculator.read();
}
function addCalc(){
    calculator.add();
}
function subtractCalc(){
    calculator.subtract();
}
function multiplyCalc(){
    calculator.multiply();
}