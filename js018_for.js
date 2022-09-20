/*
    for문 : 조건식이 true인 동안 반복 실행
    for( ; ; ) {

    }
    초가깂 -> 조건식 -> 실행문 -> 증감식
           -> 조건식 실행문 -> 증감식
            -> 조건식(F) -> 종료
*/

for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log("================================");

let sum = 0;
let i = 1;
//무한루프
for (; ; i++) {
  sum += i;
  if (sum >= 30) break;
}

console.log(`${i}, ${sum}`);

console.log("================================");

//1~10 짝수와 홀수의 합을 구하고 출력
let odd = 0;
let even = 0;

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    even += i;
  } else {
    odd += i;
  }
}

console.log(`even = ${even}, odd = ${odd}`);

console.log("================================");

/*
  continue : 조건식으로 이동.
*/

for (let j = 1; j < 10; j++) {
  if (j % 3 == 0) {
    continue;
  }
  console.log(j);
}
// 1,2,4,5,7,8

console.log("================================");

//중첩반복문

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    // console.log(`i=${i}, j=${j}`);
    process.stderr.write(`i=${i} j=${j}, `);
  }
  process.stderr.write("\n");
}

//escape 문자 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String
console.log("================================");

//lable
movei: for (let i = 1; i <= 5; i++) {
  for (let j = 10; j <= 13; j++) {
    for (let k = 1; k <= 3; k++) {
      console.log(`i=${i}, j=${j}, k=${k}`);
      if (k == 2) {
        break movei;
      }
    }
  }
}
