//Destructering (구조 분해 할당)
// : Destructering은 구조화된 배열 고는 객체를 Destructering(비구조화)
//   하여 개별적으로 변수애 할당

//1. 비열 Destructering
let level = [5, 10];
let a, b;
a = level[0];
b = level[1];
console.log(`a=${a}, b=${b}`); //a=5, b=10

let c, d;
[c, d] = [5, 10];
console.log(`c=${c}, d=${d}`); //c=5, d=10

let m, n;
[n, m] = [c, d];
console.log(`n=${n}, m=${m}`);

let k, p, next;
[k, p, next] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`k: ${k}`);
console.log(`p: ${p}`);
console.log(`next: ${next}`); //next: 3

[k, p, ...next] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`k: ${k}`);
console.log(`p: ${p}`);
console.log(`next: ${next}`); //next: 3,4,5,6,7,8

[k, , p, , ...next] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`k: ${k}`);
console.log(`p: ${p}`); //p: 3
console.log(`next: ${next}`); //next: 5,6,7,8

[k, _, p, _, ...next] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`k: ${k}`);
console.log(`p: ${p}`); //p: 3
console.log(`next: ${next}`); //next: 5,6,7,8

let u, t, w;
[u, t, w] = [1, 2];
console.log(`u: ${u}, t: ${t}, w: ${w}`); //w: undefined

[u, t, w = 3] = [1, 2];
console.log(`u: ${u}, t: ${t}, w: ${w}`); //w: 3

[u, t = 4, w = 5] = [1, 2];
console.log(`u: ${u}, t: ${t}, w: ${w}`); //t: 2, w: 5

//2. 객체 Destructering (구조 분해 할당)

const customer = { fullname: "고수", job: "연기자" };
let fullname = customer.fullname;
let job = customer.job;
console.log(`fullname: ${fullname}, job: ${job}`);

let { fullname: fn, job: jb } = customer;
console.log(`fullname: ${fullname}, job: ${job}`);

let { job: work, fullname: fname } = customer;
console.log(`job: ${job}, fullname: ${fullname}`);

let { fullname: name, job: jbn, loc = "서울" } = customer;
console.log(`job: ${job}, fullname: ${fullname}, loc: ${loc}`);

let s, r;
({ s, r } = { s: 1, r: 2 });
console.log(`s=${s} r=${r}`); //s=1 r=2

//////////////////////////////////////////////////////////////

let habits = [
  { id: 1, content: "수영", completed: false },
  { id: 2, content: "걷기", completed: true },
  { id: 3, content: "명상", completed: true },
  { id: 4, content: "독서", completed: false },
];

let listHabit = [];
for (let i = 0; i < habits.length; i++) {
  if (habits[i].completed) {
    listHabit.push(habits[i]);
  }
}
console.log(listHabit);
/////////////////////////////////////////////////////////////
let completedHabit = habits.filter((element) => element.completed);
console.log(completedHabit);

////////////////////////////////////////////////////////////
//member 변수에서 데이터를 추출하여 '고수 고객님은 서울에 거주합니다.'라고 출력하세요.

let member = {
  hname: "고수",
  address: {
    zipCode: "526-143",
    city: "서울",
  },
};

// let nameMember = member.name;
// let addMember = member.address.city;

let { hname, address } = member;
let { city } = address;
console.log(`${hname} 고객님은 ${city}에 거주합니다.`);

({
  hname,
  address: { city },
} = member);
console.log(`${hname} 고객님은 ${city}에 거주합니다.`);
