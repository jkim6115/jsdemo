//약관 동의
document.frm.onsubmit = () => {
  let admin = document.frm.admin;
  if (!admin.checked) {
    alert("약관에 동의해야 합니다.");
    return false;
  }
};

//전체 선택
document.frm.allCheck.onclick = function () {
  //   console.log(this.checked);
  //   document.frm.subject1.checked = this.checked;
  //   document.frm.subject2.checked = this.checked;
  //   document.frm.subject3.checked = this.checked;

  let checkgroup = document.querySelectorAll(".checkgroup");
  console.log(checkgroup.length);

  //   checkgroup.forEach((element) => {
  //     //<input type="checkbox" name="allCheck" id="allCheck">
  //     // console.log(this);
  //     element.checked = this.checked;
  //   });

  //////////////////////////////////////////////////////
  let mythis = this; //document.frm.allcheck

  //Anonymous Function : this는 window 겍체를 의미
  //checkgroup -> element, mythis(allcheck) -> element
  //   checkgroup.forEach(function (element) {
  //     console.log(this);
  //     element.checked = mythis.checked;
  //   });
  //////////////////////////////////////////////////////
  //Array.from() : NodeList -> Array
  console.log(`${checkgroup}`);

  //   let myArray = Array.from(checkgroup);
  //   console.log(`${myArray}`);

  //   myArray.map(function (element) {
  //     // console.log(this);
  //     element.checked = mythis.checked;
  //   });

  //////////////////////////////////////////////////////
  //ES6 Spread Operator : Nodelist를 Array로 변경
  let iArray = [...checkgroup];
  iArray.map(function (element) {
    element.checked = mythis.checked;
  });
};
