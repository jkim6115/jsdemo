//for-in문은   object를 반복할 때 사용가능

let color = ["red", "green", "blue"];
console.log(color[0]);
console.log(color[1]);
console.log(color[3]);

console.log(color.length);

for (let i = 0; i <= 2; i++) {
  console.log(color[i]);
}

//js는 배열에 요소 추가 가능
color[3] = "black";
for (let i = 0; i < color.length; i++) {
  console.log(color[i]);
}

//java : element를 가져옴      for(String element : city)
//javascript : index를 가져옴  let idx in city
//객체 리터널 : {property:value, property:value}
let city = ["서울", "부산", "인천"];
for (let idx in city) {
  console.log(city[idx]);
}

let obj = { a: 1, b: 2, c: 3 };
console.log(obj);
console.log(obj.a);

console.log("-------------------------------");

for (let prop in obj) {
  console.log(`${prop}:${obj[prop]}`);
  //   console.log(`${prop}:${obj.prop}`);
}
