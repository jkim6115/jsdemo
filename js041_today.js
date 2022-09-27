// const date = new Date();
// let chk = true;
// let btn = document.getElementsByTagName("button")[0];
// btn.onclick = process;
// function process() {
//   if (chk) {
//     document.write(date.toLocaleString());
//   }
// }

let btn = document.getElementsByTagName("button")[0];
btn.onclick = () => {
  let hNode = document.getElementsByTagName("p")[0];
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDay();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  hNode.innerText = `${year}-${month}-${day} ${hour}:${min}:${sec}`;
};
