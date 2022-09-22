let data = `It's alright`;
console.log(data);

//length
console.log(data.length);

/**
 * 특정 범위 데이터를 리턴해주는 3가지 메소드
 * 1.substring(start, end);
 * 2.substr(start, length);
 * 3.slice(start, end);
 */

data = "Apple, Banana, Kiwi";
console.log(`substring : ${data.substring(7, 13)}`); //7이상 13미만
console.log(`substring : ${data.substring(-12, -6)}`); //substring : 음수지원 X

console.log(`substr : ${data.substr(7, 6)}`); //7이상부터 6개
console.log(`substr : ${data.substr(-12, 6)}`);

console.log(`slice : ${data.slice(7, 13)}`);
console.log(`slice : ${data.slice(-12, -6)}`);

//replace('찾을 문자열|RegExp', '바꿀 문자열')
// i : 대소문자 무시, g : 모든 문자열
console.log(`replace : ${data.replace("Banana", "Grape")}`);

console.log(data);

//정규 표현식
data = "Mr Blue has a blue house and a blue car";
console.log(data.replace(/blue/i, "red"));

data = "Mr Blue has a blue house and a blue car";
console.log(data.replace(/blue/g, "red"));

data = "Mr Blue has a blue house and a blue car";
console.log(data.replace(/blue/gi, "red"));

data = "Hello World";
console.log(`toUpperCase() : ${data.toUpperCase()}`); //모든 문자 대문자로

console.log(`toLowerCase() : ${data.toLowerCase()}`); //모든 문자 소문자로

let data2 = "javascript";
console.log(`concat() : ${data.concat(data2)}`); //문자열 연결
console.log(`concat() : ${data.concat(" ", data2)}`);

console.log(`charAt() : ${data.charAt(0)}`); //문자열에서 문자 추출
console.log(`charAt() : ${data.charCodeAt(0)}`); //문자열에서 추출한 문자의 unicode

data = "a,b,c,d,e";
//split() : 문자열을 나눔.
let arr = data.split(",");
for (let i of arr) console.log(i);

data = "Mr Blue has a blue house and a blue car";
let res = data.match(/blue/g);
//모든 일치를 담은 배열을 반환합니다. 일치가 없으면 null을 반환합니다.
console.log(`match() : ${res} ${typeof res} ${res instanceof Array}`);

//search() : 문자열에서 일치하는 부분을 탐색합니다. 일치하는 부분의 인덱스, 또는 일치가 없는 경우 -1을 반환합니다.
res = data.search(/blue/g);
console.log(`search() : ${res}`);

//indexOf() :  배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.
data = "Mr Blue has a blue house and a blue car";
console.log(data.indexOf("B"));

let position = data.indexOf("blue");
console.log(data.indexOf("blue", position + 1)); //31

console.log("========================================");

data = "Mr Blue has a blue house and a blue car b";
let pos = -1;
do {
  pos = data.indexOf("blue", pos + 1);
  if (pos != -1) console.log(pos);
} while (pos != -1);

for (pos = -2; pos != -1; ) {
  pos = data.indexOf("blue", pos + 1);
  if (pos != -1) console.log(pos);
}

// for (let i = 0; i < data.length; i += 1) {
//   i = data.indexOf("blue", i);
//   if (i == -1) break;
//   console.log(i);
// }

//repeat() : 문자열 반복, 정수만 가능
let text = "korea";
console.log(text.repeat(10));

text = "*";
console.log(text.repeat(10));

//trim() : 문자열 양 끝의 공백을 제거합니다.
let text2 = " korea ";
console.log(text2.length);
console.log(text2.trim().length);
