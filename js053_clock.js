// function leftPad(num) {
//   if (num < 10) {
//     return `0${num}`;
//   }
//   return `${num}`;
// }

function setText(selector, text) {
  let targetElement = document.querySelector(selector);
  targetElement.innerText = text;
}

let watchTime = () => {
  const present = new Date();
  const daylist = ["일", "월", "화", "수", "목", "금", "토"];

  //   const hour = leftPad(present.getHours());
  //   const min = leftPad(present.getMinutes());
  //   const sec = leftPad(present.getSeconds());
  const hour = String(present.getHours()).padStart(2, "0");
  const min = String(present.getMinutes()).padStart(2, "0");
  const sec = String(present.getSeconds()).padStart(2, "0");
  //   console.log(`${hour}:${min}:${sec}`);

  setText("#hours", hour);
  setText("#minute", min);
  setText("#seconds", sec);

  const year = present.getFullYear();
  const month = String(present.getMonth() + 1).padStart(2, "0");
  const date = String(present.getDate()).padStart(2, "0");
  const day = present.getDay();

  setText("#year", year);
  setText("#month", month);
  setText("#date", date);
  setText("#day", `${daylist[day]}요일`);
};

watchTime();

/*
    setTimeout() : 한번만 실행
    setInterval() : 반복실행
*/

// let clockInterval = setInterval(watchTime, 1000);
setInterval(watchTime, 1000);
