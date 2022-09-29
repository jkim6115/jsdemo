//////////////////////////////////////
//슬라이딩 구현

setInterval(() => {
  let tg = document.querySelector(".slide");
  //대상의 top의 값이 -100%로 0.6초 동안 transition 발생
  tg.style.top = "-100%";
  tg.style.transition = "0.8s";

  setTimeout(function () {
    let first = tg.querySelectorAll("li")[0];
    //appendChild() 메소드는 한 노드를 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙입니다.
    tg.appendChild(first);
    //대상의 top의 값이 0으로 이동
    tg.style.top = "0";
    //transition 없애기
    tg.style.transition = "none";
  }, 800); //0.6초
}, 5000); //3초

///////////////////////////////////////
//공지사항 및 갤러리
function chgTab(i1, i2) {
  //i1 : class를 넣을 li순번
  //i2 : class를 뺄 li 순번

  let tm = document.querySelectorAll(".tm>li");
  let tc = document.querySelectorAll(".tc>li");

  //on클래스 넣기
  tm[i1].classList.add("on");
  tc[i1].classList.add("on");

  //on클래스 빼기
  tm[i2].classList.remove("on");
  tc[i2].classList.remove("on");
}

////////////////////////////////////////
//팝업창 닫기
function popup(sts) {
  let pop = document.querySelector(".pop");
  pop.style.display = sts;
}
