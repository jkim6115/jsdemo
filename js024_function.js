/**
 * [출력결과]
 * 횽길동님은 회원입니다.
 * 3000포인트가 적립되었습니다.
 */

//회원여부
function process(name, chk) {
  if (chk) {
    console.log(`${name}님은 회원입니다.`);
  } else {
    console.log(`${name}님은 비회원입니다.`);
  }
}

function pointPlus(point) {
  console.log(`${point}포인트가 적립되었습니다.`);
}

process("홍길동", "회원");
pointPlus(3000);

////////////////////////////////////////////////

/**
 * [출력결과]
 * 요소의 길이 : 4
 * 2인덱스 요소값 가져오기 : v
 */

//배열의 길이를 return
// function length(data) {
//   return data.length;
// }

let length = (data) => {
  return data.length;
};

//배열에서 특정 인덱스의 요소를 return
// function charAt(data, index) {
//   return data[index];
// }

let charAt = (data, index) => {
  return data[index];
};

//배열에서 대문자 갯수를 리턴
// function upperCnt(arr) {
//   let num = 0;
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] >= "A" && arr[i] <= "Z") {
//       num++;
//     }
//   }
//   return num;
// }

let upperCnt = (arr) => {
  let num = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] >= "A" && arr[i] <= "Z") {
      num++;
    }
  }
  return num;
};

let arr = ["j", "a", "v", "A"];
console.log(`요소의 길이 : ${length(arr)}`);
console.log(`인덱스 요소값 가져오기 : ${charAt(arr, 2)}`);
console.log(`대문자 갯수 : ${upperCnt(arr)}`);
