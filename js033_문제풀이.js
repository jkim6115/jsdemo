/*
[문제1]
아래 배열에서 undefined을 제외한 합계와 평균을 계산하는 프로그램을 구현하세요.

[데이터]
let arr = [1, 2, 3, undefined, 4, undefined, undefined, 5];

[출력결과]
합계: 15
평균: 3

*/

let data = [1, 2, 3, undefined, 4, undefined, undefined, 5];
let arr = [];
for (let i = 0; i < data.length; i++) {
  if (data[i] != undefined) {
    arr.push(data[i]);
  }
}
let sum = arr.reduce((total, num) => total + num);
console.log(`합계: ${sum}`);
console.log(`평균: ${sum / arr.length}`);

/*
 [문제2] 
  2차원 배열의 데이터를 이용해서 합계와 평균을 계산하는 프로그램을 구현하세요.
 [데이타]
 [['홍길동', 90, 85, 40],
  ['이영희', 100, 35, 75]];

  
 <출력결과]
 [[ '홍길동', 90, 85, 40, 215, 71.67 ],
  [ '이영희', 100, 35, 75, 210, 70.00 ]]
  최고점: 71.67
*/

let data2 = [
  ["홍길동", 90, 85, 40],
  ["이영희", 100, 35, 75],
];

function SUM(data) {
  let result = data
    .filter((element) => element >= 0)
    .reduce((previousValue, currentValue) => previousValue + currentValue);
  return result;
}

function AVERAGE(data) {
  let length = data.filter((element) => element >= 0).length;
  let result = data
    .filter((element) => element >= 0)
    .reduce((previousValue, currentValue) => previousValue + currentValue);
  return Number((result / length).toFixed(2));
}

data2[0].push(SUM(data2[0]), AVERAGE(data2[0]));
data2[1].push(SUM(data2[1]), AVERAGE(data2[1]));

console.log(data2);
if (data2[0][5] > data2[1][5]) {
  console.log(`최고점: ${data2[0][5]}`);
} else {
  console.log(`최고점: ${data2[1][5]}`);
}
