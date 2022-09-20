/*
 * switch문
 * 선택문은 변수의 값과 case의 값을 비교하여 일치하면 해당 실행문일 수행한다.
 *
 * switch() {
 *  case 1:
 *      break;
 *  .
 *  .
 *  .
 *  default:
 * }
 */

let jumsu = 100;

switch (parseInt(jumsu / 10)) {
  case 10:
  case 9:
    console.log("A");
    break;
  case 8:
    console.log("B");
    break;
  case 7:
    console.log("C");
    break;
  case 6:
    console.log("D");
    break;
  default:
    console.log("F");
}

/*
    code='a100' 채소류, 'b200' 육류, 'c300' 생선류
 */
let code = "b200";

switch (code) {
  case "a100":
    console.log("채소류");
    break;
  case "b200":
    console.log("육류");
    break;
  case "c300":
    console.log("생선류");
}

let year = 1997;
let animal = "";
switch (year % 12) {
  case 0:
    animal = "원숭이";
    break;
  case 1:
    animal = "닭";
    break;
  case 2:
    animal = "개";
    break;
  case 3:
    animal = "돼지";
    break;
  case 4:
    animal = "쥐";
    break;
  case 5:
    animal = "소";
    break;
  case 6:
    animal = "호랑이";
    break;
  case 7:
    animal = "토끼";
    break;
  case 8:
    animal = "용";
    break;
  case 9:
    animal = "뱀";
    break;
  case 10:
    animal = "말";
    break;
  case 11:
    animal = "양";
}
console.log(`${year} = ${animal}`);
