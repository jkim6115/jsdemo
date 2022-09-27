/* 0.0이상 ~ 1.0미만 */
function rand(min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
}

let divNode = document.querySelectorAll("div.wrap > div");
let btn = document.getElementsByTagName("button")[0];
console.log(btn);

// for (let i = 0; i < divNode.length; i++) {
//   divNode[i].innerText = `${rand(1, 45)}`;
// }

btn.onclick = () => {
  for (let i = 0; i < divNode.length; i++) {
    divNode[i].innerText = `${rand(1, 45)}`;
  }
};
