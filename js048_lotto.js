/* 0.0이상 ~ 1.0미만 */
/* 0.0이상 ~ 45이하 */
function rand() {
  return Math.floor(Math.random() * 45) + 1;
}

let divNode = document.querySelectorAll("div.wrap > div");
let arr = [];

for (let i = 0; i <= 5; i++) {
  arr.push(rand());
  for (let j = 0; j < i; j++) {
    if (arr[j] == arr[i]) {
      i--;
      break;
    }
  }
}
console.log(arr);

arr.sort((a, b) => {
  return a - b;
});

divNode.forEach((element, idx) => {
  element.innerText = arr[idx];
});

//1. 6개의 난수를 구하고 중복체크
// let lotto = [];
// for (let i = 0; i < 5; i++) {
//   let ran = Math.floor(Math.random() * 45 + 1);
//   lotto.push = ran;
//   console.log(lotto);
//   for (let j = 0; j < i; j++) {
//     if (lotto[i] == lotto[j]) {
//       i--;
//       break;
//     }
//   }
// }

//2. 정렬
// lotto.sort((a, b) => {
//   return a - b;
// });

//3. 출력
// let divList = document.querySelectorAll("div.wrap > div");
// console.log(lotto);
// divList.forEach((element, idx) => {
//   element.innerText = lotto[idx];
// });
