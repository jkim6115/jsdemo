//(1) 작은 이미지를 클릭하면 큰 이미지

let bigPhoto = document.querySelector("#photo > img");
console.log(bigPhoto);

let list_zone = document.querySelector("#inner_list");
let ul_li = list_zone.children;
console.log(ul_li); //HTMLCollection(8)

ul_li = [...ul_li]; //ul_li = Array.form(ul_li);

ul_li.map((liTag, idx) => {
  let atag = liTag.querySelector("a");
  atag.onclick = () => {
    bigPhoto.src = atag.href;
    return false; //e.preventDefault()
  };
});

//(2) 다음( > ) 버튼을 클릭했을 때 마다 <li>이 100만큼 이동
let m_num = 0;

let n_btn = document.querySelector("#next_btn");
n_btn.onclick = (e) => {
  if (m_num >= ul_li.length - 3) return false;
  m_num++;
  list_zone.style.marginLeft = -100 * m_num + "px";

  return false; //e.preventDefault()
};

//(3) 이전( < )dmf 누를 때 마다 <li>이 100만큼 이동
// An: 100n =x An: 100n
let b_btn = document.querySelector("#before_btn");
b_btn.onclick = (e) => {
  if (m_num <= 0) return false;
  m_num--;
  list_zone.style.marginLeft = -100 * m_num + "px";

  return false; //e.preventDefault()
};
