function display() {
  for (let i = 0; i <= 5; i++) {
    console.log(`i=${i}`);
  }
}

console.log("start");

//ms단위, 1000ms = 1s
//setTimeout(실행함수, 시간)
setTimeout(display, 1000);
console.log("end");
