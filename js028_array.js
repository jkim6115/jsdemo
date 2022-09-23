let scores = [100, 90, 100];
console.log(scores); // Array[3] : 브라우저 결과

console.log(scores[1]);
console.log(scores[3]); //undefined
console.log(scores.length); //3

let person = ["John", "Doe", 26, true];
for (let idx in person) {
  console.log(person[idx], typeof person[idx]);
}

let student = ["홍길동", [100, 90, 20]];
for (let idx in student) {
  console.log(student[idx], typeof student[idx]);
}

let cars = new Array("Sasb", "Volvo", "BMW");
for (let idx in cars) {
  console.log(cars[idx], typeof cars[idx]);
}

let color = [];
console.log(color.length);
color[0] = "red";
console.log(color.length);
color.push("green");
console.log(color.length);
color.push(759);
console.log(color.length);
color[8] = "blue";
console.log(color.length); //nodejs : <5 empty items>, 브라우저 : empty*5
console.log(color);
for (let idx in color) {
  console.log(`${idx} : ${color[idx]}`);
}
//3개의 크기를 갖는 배열 생성
let point = new Array(3);
console.log(`point length : ${point.length}`);

//2개의 요소를 갖는 배열 생성
let shape = new Array(10, 20);
console.log(shape.length);
for (let idx in shape) {
  console.log(`${idx} : ${shape[idx]}`);
}

shape[2] = 50;
console.log(shape[1]);
console.log(shape.length);

/**
 * for()
 * for idx in 배열 ; index
 * for idx of 배열 : element
 */

/**
 * forEach() :  주어진 함수를 배열 요소 각각에 대해 실행
 * 배열.forEach(function(element[, index]){실행문}) []생략가능
 */

shape.forEach(function (element, index) {
  console.log(`${index} : ${element}`);
});
console.log("==========================================");
shape.forEach((element, index) => console.log(`${index} : ${element}`));

// 문자열은 forEach() 를 제공하지 않는다.
// let choice = 'javascript';
// choice.forEach(element, index) => console.log(`${index} : ${element}`));

//.map(function) : 새로운 배열 생성
const numbers = [4, 9, 16, 25];
const map = numbers.map((x) => x * 2);
console.log(`map : ${map}`);

const sqt = numbers.map(Math.sqrt);
console.log(`sqt : ${sqt}`);

function getSum(total, num) {
  //total : 누적, num : 요소
  return total + num;
}

//reduce() : 반환 값은 누산기에 할당되고, 누산기는 순회 중 유지되므로 결국 최종 결과는 하나의 값이 됩니다.
const sum = numbers.reduce(getSum);
console.log(`sum : ${sum}`);

//per() : 논리값이 true 인 요소만 반환한다.
const ages = [32, 33, 16, 40];
const per = ages.filter((element, index) => element >= 10);
console.log(`per : ${per}`);
