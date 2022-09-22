let data = 10;
let fData = Number(data);
let nObj = new Number(data);
console.log(`data = ${typeof data}`); //number
console.log(`fData = ${typeof fData}`); //number
console.log(`nObj = ${typeof nObj}`); //object

//toString : Number => string
console.log(typeof nObj.toString()); //string
console.log(typeof data.toString()); //string

console.log(data + fData); //20
console.log(data + nObj); //20

//valueOf : Numer => number
console.log(typeof nObj.valueOf());
console.log(typeof new String("javascript").valueOf());

//표준내장객체, radix(진수)는 항상 10이 아니다.
console.log(parseInt("0x10"));

// let val = "10.3";
// let val = 'A'; //NaN
// let val = "10A"; //Number : NaN, parseInt : 20, parseFloat : 20
let val = "A10"; //NaN
console.log(val + val); //1010

//Number(), parseInt()
console.log(Number(val) + Number(val)); //20.6
console.log(parseInt(val) + parseInt(val)); //20
console.log(parseFloat(val) + parseFloat(val)); //20.6

console.log(Number.POSITIVE_INFINITY); //infinity
console.log(Number.NaN); //NaN
