/* Create an object temperatureConverter with methods:
    *
    * read() → Asks the user to enter a temperature in Celsius.
    * toFahrenheit() → Converts it to Fahrenheit.
    * toKelvin() → Converts it to Kelvin.
    * display() → Displays the results in the console.
    * 
*/
const tempConverter = {
    read: function(){
        this.temp = parseFloat(prompt("Enter a temperature in Celsius"))
        if(!isNaN(this.temp)){
            document.getElementById('readTemp').innerHTML=`Entered Value is: ${this.temp}°C`;
        }else{
            document.getElementById('readTemp').innerHTML="Please Enter Valid Value.";
        }
    },
    toFahrenheit: function(){
        if(!isNaN(this.temp)){
            this.fValue = (this.temp*9/5) + 32;
            console.log(`The toFahrenheit is: ${this.fValue}°F`);
            document.getElementById('fTemp').innerHTML=`The toFahrenheit is: ${this.fValue}°F`;
        }else{
            console.log("Please enter valid Cecius value");
            document.getElementById('fTemp').innerHTML="Please enter valid Cecius value";
        }
    },
    toKelvin: function(){
        if(!isNaN(this.temp)){
            this.kValue = this.temp + 273.15;
            console.log(`The toKelvin is: ${this.kValue}K`);
            document.getElementById('kTemp').innerHTML=`The toKelvin is: ${this.kValue}K`;
        }else{
            console.log("Please enter valid Cecius value");
            document.getElementById('kTemp').innerHTML="Please enter valid Cecius value";
        }
    },
    display: function(){
        if(!isNaN(this.temp)){
            this.fValue = (this.temp*9/5) + 32;
            this.kValue = this.temp + 273.15;
            console.log(`The Entered value in Celsius: ${this.temp}°C`);
            console.log(`The toFahrenheit is: ${this.fValue}°F`);
            console.log(`The toKelvin is: ${this.kValue}K`);
            document.getElementById('disTemp').innerHTML=`The Entered value in Celsius: ${this.temp}°C <br/>The toFahrenheit is: ${this.fValue}°F<br/>The toKelvin is: ${this.kValue}K`;
        }else{
            console.log("Please enter valid Celcius value");
            document.getElementById('disTemp').innerHTML="Please enter valid Celcius value";
        }
    }
}
function readTemp(){
    tempConverter.read();
}
function fTemp(){
    tempConverter.toFahrenheit();
}
function kTemp(){
    tempConverter.toKelvin();
}
function disTemp(){
    tempConverter.display();
}

