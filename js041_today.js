const date = new Date();
let chk = true;
let btn = document.getElementsByTagName("button")[0];
btn.onclick = process;
function process() {
  if (chk) {
    document.write(date.toLocaleString());
  }
}
