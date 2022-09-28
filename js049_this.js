//window
console.log(this);

/////////////////////////////////////////////
let member = {
  name: "홍길동",
  show: function () {
    console.log(this);
  },
};
//{name: '홍길동', show: ƒ}
member.show();

/////////////////////////////////////////////
let member2 = {
  name: "홍길동",
  show: () => {
    console.log(this);
  },
};
//window
member2.show();

/////////////////////////////////////////////
function showThisName() {
  console.log(this);
}
//window
showThisName();

let showThisName2 = () => {
  console.log(this);
};
//window
showThisName2();

/////////////////////////////////////////////
let btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  //<button id="btn">button</button>, true
  console.log(this, this == btn);
});

let btn2 = document.querySelector("#btn");
btn.addEventListener("click", () => {
  //window, false
  console.log(this, this == btn2);
});

/////////////////////////////////////////////
const hong = { name: "홍길동" };
const jung = { name: "정해인" };
/////////////////////////////////////////////
//call() : call매서드는 모슨 함수에서 사용할 수 잇으며 this값을
//         특정값으로 지정할 수 있다.
console.log("call()====================");
//{name: '홍길동'}
showThisName.call(hong);
//{name: '정해인'}
showThisName.call(jung);

//window
showThisName2.call(hong);
//window
showThisName2.call(jung);

function update(birthYear, job) {
  this.birthYear = birthYear;
  this.job = job;
  //window
  console.log(this);
}

//window
update(2019, "IT");

//this로 사용할 hong객체와 update함수의 매개변수에서 받을 인수를 넘긴다.
//{name: '홍길동', birthYear: 2000, job: '프로게이머'}
update.call(hong, 2000, "프로게이머");

//{name: '정해인', birthYear: 2016, job: '디자이너'}
update.call(jung, 2016, "디자이너");

/////////////////////////////////////////////
//apply
//1. apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 같다.
//2. call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만
//   apply는 매개변수를 배열로 받는다.

console.log("apply()===============================");
//{name: '홍길동', birthYear: 2000, job: '프로게이머'}
update.apply(hong, [2000, "프로게이머"]);
//{name: '정해인', birthYear: 2016, job: '디자이너'}
update.apply(jung, [2016, "디자이너"]);

/////////////////////////////////////////////
//bind()
//1. call과 사용방법은 같으나 실행을 해야한다.

//{name: '홍길동', birthYear: 2000, job: '프로게이머'}
let hongUpdate = update.bind(hong, 2000, "프로게이머");
hongUpdate();

//{name: '정해인', birthYear: 2016, job: '디자이너'}
let jungUpdate = update.bind(jung, 2016, "디자이너");
jungUpdate();
