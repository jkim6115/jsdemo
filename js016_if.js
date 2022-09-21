/*
    제어문(statement) : 프로그램의 흐름을 제어할 수 있는 실행문
        if-else
        switch-case
        for, while, do-while, for-in, for-0f
        label(임의의 정의), cuntinue, break
    
    조건문 : 조건의 진리값에 따라 제어
*/

let data = 0;
if (data === 0) {
  console.log("program end");
}
if (null) {
  console.log("data");
}

/*
    if() {

    } else {

    }
*/

let num = 5;
if (num % 2) {
  console.log(`${num}의 값은 짝수입니다.`);
} else {
  console.log(`${num}의 값은 홀수입니다.`);
}

/*
    //여러 조건식이 필요할 때
    if() {

    } else if() {

    } 

    .
    .
    .

    } else {

    }
 */

let jumsu = 85;
if (jumsu >= 99) {
  console.log("A");
} else if (jumsu >= 80) {
  console.log("B");
} else if (jumsu >= 70) {
  console.log("C");
} else if (jumsu >= 60) {
  console.log("D");
} else {
  console.log("F");
}

/*
    check 변수의 값이 'D'이면 대문자
                     'd'이면 소문자
                     그외 ?는 기타
*/

//unicode 와 ASCII는 서로 같은 문자코드를 갖는다.
let x = "A";
console.log(x >= "A" && x <= "Z");
let y = "a";
console.log(x >= "a" && x <= "z");

let check = "H";
if (check >= "A" && check <= "Z") {
  console.log(`${check}는 대문자 입니다.`);
} else if (check >= "a" && check <= "z") {
  console.log(`${check}는 소문자 입니다.`);
} else {
  console.log(`${check}는 기타 입니다.`);
}
