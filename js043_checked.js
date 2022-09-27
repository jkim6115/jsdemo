let totalCar = document.getElementById("total");

let chbCnt = document.querySelectorAll('tbody input[type="checkbox"]');
console.log(chbCnt);

//nodelist -> array
let myChb = [...chbCnt];

//checkbox에 onclick event 등록, event 발생시 carCount 호출
myChb.map((element) => {
  //this -> window
  //console.log(this);
  element.onclick = carCount;
});

function carCount() {
  //this -> 현재 event가 발생된 checkbox
  //   console.log(this);
  console.log(this.id);

  //totalCar.defaultValue 초기에 입력된 value 값
  let basicCar = Number(totalCar.defaultValue);

  myChb.map((element) => {
    if (element.checked) basicCar += Number(element.value);
  });

  totalCar.value = basicCar;
}
