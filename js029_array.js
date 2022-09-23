const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
let data = fruits.toString();
console.log(`${data}`); //Banana,Orange,Apple,Mango
console.log(`${typeof data}`); //string

//문자열 연결자
console.log(typeof fruits.join()); //string
console.log(fruits.join()); //Banana,Orange,Apple,Mango
console.log(fruits.join("*")); //Banana*Orange*Apple*Mango
console.log(fruits.join("_")); //Banana_Orange_Apple_Mango

//배열 끝에 요소 추가
fruits[4] = "Kiwi";
console.log(fruits);
console.log(fruits.push("Melon")); //6
console.log(fruits);

// 배열 끝 요소 제거
console.log(fruits.pop()); //Melon
console.log(fruits);

//배열 처음에 요소 추가
console.log(fruits.unshift("Melon"));
console.log(fruits);

//배열 처음에 요소 제거
console.log(fruits.shift("Melon"));
console.log(fruits);

//객체의 속성을 제거합니다. 제거한 객체의 참조를 어디에서도 사용하지 않는다면 나중에 자원을 회수합니다.
delete fruits[3];
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', <1 empty item>, 'Kiwi' ]

fruits[3] = "Mango";
console.log(fruits);

//특정범위 요소 복사
console.log(fruits.slice(1, 3)); //[ 'Orange', 'Apple' ]
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]
console.log(fruits.slice(-4, -2)); //[ 'Orange', 'Apple' ]
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

console.log(fruits.slice(1)); //[ 'Orange', 'Apple', 'Mango', 'Kiwi' ]

//오름차순 정렬
console.log(fruits.sort()); //[ 'Apple', 'Banana', 'Kiwi', 'Mango', 'Orange' ]
console.log(fruits); //[ 'Apple', 'Banana', 'Kiwi', 'Mango', 'Orange' ]

//내림차순 정렬
console.log(fruits.reverse()); //[ 'Orange', 'Mango', 'Kiwi', 'Banana', 'Apple' ]
console.log(fruits); //[ 'Orange', 'Mango', 'Kiwi', 'Banana', 'Apple' ]

//compareFunction이 제공되지 않으면 요소를 문자열로 변환하고 유니 코드 코드 포인트 순서로 문자열을 비교하여 정렬됩니다.
//js에서 sort()는 Tim sort 알고리즘을 사용한다.
//Tim sort는 Insertion sort와 Merge sort을 결합하여 만든 정렬이다.
//https://d2.naver.com/helloworld/0315536
let point = [40, 100, 1, 5, 10];
console.log(point.sort()); //[ 1, 10, 100, 40, 5 ]
//올림차순
console.log(
  point.sort((a, b) => {
    console.log(`a:${a}, b:${b}, a-b:${a - b},`); //[ 1, 5, 10, 40, 100 ]
    return a - b;
  })
);

//내림차순
console.log(
  point.sort((a, b) => {
    console.log(`a:${a}, b:${b}, a-b:${a - b},`); //[ 1, 5, 10, 40, 100 ]
    return b - a;
  })
);

console.log("=============================");

let xData = [1, 2, 3];
let yData = [4, 5, 6];
let zData = xData.concat(yData, [7, 8, 9]);
console.log(zData.length); //9
console.log(zData); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//flat() 메서드는 모든 하위 배열 요소를 지정한 깊이까지 재귀적으로 이어붙인 새로운 배열을 생성합니다.
let arr2 = [1, 3, [[[4, 5]]]];
console.log(arr2.flat()); //[ 1, 3, [ [ 4, 5 ] ] ]
console.log(arr2); //[ 1, 3, [ [ [Array] ] ] ]
console.log(arr2.flat(1)); //[ 1, 3, [ [ 4, 5 ] ] ]
console.log(arr2.flat(2)); //[ 1, 3, [ 4, 5 ] ]
console.log(arr2.flat(3)); //[ 1, 3, 4, 5 ]
