let btn = document.querySelector("#btn");

btn.onclick = () => {
  let idNode = document.querySelector("#my_id");
  let passNode = document.querySelector("#my_pass");

  if (idNode.value == "") {
    alert("아이디를 입력하세요");
    return false;
  }

  if (passNode.value == "") {
    alert("비밀번호를 입력하세요");
    return false;
  }

  //   document.log_f.action = "js039_submit.html";
  //강제적으로 submit() 발생
  document.log_f.submit();
};
