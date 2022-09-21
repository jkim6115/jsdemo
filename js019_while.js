/* while(){ ... } */
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
let input = "n";
do {
  console.log("고객님 계속 하시겠습니까?(y/n)");
  input = prompt("입력");
} while (input === "y");

while (1) {
  console.log("infinity");
}
