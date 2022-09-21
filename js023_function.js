//https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions
//function : 특정기능을 수행하는 독립적인 부품을 만들고 재사용.

/*
    function name(parameter) {

    }

    let test = function(parameter) {

    }

    익명함수 : 한번만 사용할 함수를 정의.

*/
// let test = () => console.log("test");
// test();

(function (param) {
  console.log(`${paran} run`);
});

let year = 2012;
let leapYearCheck = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
let yearData = leapYearCheck;
if (leapYearCheck) {
  console.log(`${yearData}`);
}

function isLeapYear(year) {
  //parameter
  let check;
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    check = true;
  } else {
    check = false;
  }
  return check;
}
year = 2013;
let result = isLeapYear(year); //arguement
if (result) {
  console.log(`${year}는 윤년입니다.`);
} else {
  console.log(`${year}는 평년입니다.`);
}

function add(a, b) {
  return a + b;
}

function add2(a, b, c) {
  return a + b + c;
}
console.log(add(2, 3));
console.log(add2(2, 3, 4));
console.log(add()); //NaN
console.log(add(1)); //NaN
console.log(add(1, "script")); //1script
console.log(add(1, null)); //1 null=0으로 처리
console.log(add(1, 2, 3, 4, 5)); //3 js는 유연하다.

function hello(name) {
  console.log(`${name}님을 환영합니다.`);
}

hello("홍길동");
console.log(hello("고수")); //undefined

//함수표현식
//ES5 - 익명함수
let sum = function (a, b) {
  return a + b;
};
console.log(sum); // [Function: sum]
console.log(sum(10, 20));

let hap = function (a, b) {
  console.log(a + b);
};
console.log(hap);
hap(10, 30);

//ES6 - Arrow function
let sub = (a, b) => {
  return a + b;
};
console.log(sub(3, 5));

let call = (a, b) => {
  console.log(a + b);
};
console.log(call);
console.log(call(3, 4));
call(3, 4);

// let call2 = (a) => {
//   return a;
// };

let call2 = (a) => a; //arguement가 1개일때 ()생략가능, return만 수행하면 {}, return생략가능.
console.log(call2);
console.log(call2(3));

let call3 = () => {
  console.log("로그인 해주세요.");
};
console.log(call3);
console.log(call3());
call3();

/////////////////////////////////
//다양한 함수 구조

//중첩함수
function outer(a, b) {
  let result = inner(a, b);
  function inner(a, b) {
    return a + b;
  }
  return result;
}
console.log(outer(10, 3));

//콜백함수
//1. 다른 함수의 인수로 활용
//2. event 발생시 호출  btn,oneclick = function
function callback(a, b) {
  return a + b;
}
function getNumber(callFunc) {
  console.log(`==: ${callFunc}`);
  let result = callFunc(1, 6);
  return result;
}
console.log(getNumber(callback));

/**
 *  클로저(closure)
 */
function outerFun() {
  let sum = 50;
  function innerFun() {
    return sum;
  }
  return innerFun;
}

console.log(outerFun()); //[Function: innerFun]

let outerCall = outerFun();
console.log(outerCall); //[Function: innerFun]
console.log(outerCall());

function testA() {
  console.log("testA before");
  testB();
  console.log("testA After");
}

function testB() {
  console.log("testB before");
  testC();
  console.log("testB After");
}

function testC() {
  console.log("testC");
}
testA();

////////////////////////////////////////////
//함수 파라미터
function display(a, b) {
  console.log(`a=${a}, b=${b}`);
}

display(1, 2);
display(1);
display(1, 2, 3, 4, 5);

//기본 파라미터(default parameter) : ES6-2015
function display2(a = 0, b = 0) {
  console.log(`a=${a}, b=${b}`);
}
display2(1, 2);
display2(1);
display2(1, 2, 3, 4, 5);

//나머지 파라미터(Rest parameter) : ES6-2015
// - 파라미터 개수를 가변으로 사용할 수 있도록 제공해주는 연산자
// - spread operator(점 3개...)를 맨 마지막 파라미터로 사용.
function display3(...args) {
  console.log(args);
  console.log(typeof args, args instanceof Array);
}
display3(1, 2);
display3(1);
display3(1, 2, 3, 4, 5);

//spread operator를 고정 파라미터와 같이 사용할 때는 맨 마지막에 사용
function display4(num, ...args) {
  console.log(num);
  console.log(args);
}
display4(1, 2);
display4(1);
display4(1, 2, 3, 4, 5);

//arguments 객체
// 함수 안에서만 기본으로 사용할 수 잇는 자바스트립트 객체
// 런타임 시점에 자동으로 생성, 함수코드 및 파라미터와 별개로 자동 생성
// 함수 호출시 함수로 전달되는 인자들의 정보를 담고 있는 객체
// 함수 선언에서 파라미터로 정의한 변수 개수보다 실재 함수 호출시 전달하는 인수의 갯수가 다를수 있는 js의 특성을 고려하여 만들어진 객체

console.log("=============================");

function display5() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    console.log(typeof arguments, arguments instanceof Array, arguments.callee);
    console.log(arguments[i]);
  }
}
display5(1, 2);
// display5(3);
// display5(4, 5, 6, 7, 8);
