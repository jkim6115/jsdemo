let myNode = document.getElementById("p2");

//parentNode : 부모노드
let ptNode = myNode.parentNode;
//[object HTMLDivElement]
console.log(`parentNode: ${ptNode}`);
ptNode.style.color = "blue";

//////////////////////////////////////////////
//previousSibling : Text와 주석까지 인식
//previousEelementSibling : 이전 형제노드 중 요소노트만 반환

//공백(줄바꿈)도 텍스트노드로 간주
let prevNode = myNode.previousSibling;
console.log(`prevNode: ${prevNode}`);

//공백 다음 노드
prevNode = prevNode.previousSibling;
console.log(`prevNode: ${prevNode}`);

//[object HTMLParagraphElement], content1
let prevEleNode = myNode.previousElementSibling;
console.log(`prevEleNode: ${prevEleNode}, ${prevEleNode.innerText}`);

/////////////////////////////////////////////////////////////
//nextSibing

let nextNode = myNode.nextSibling;
//[object Text]
console.log(`nextNode: ${nextNode}`);
nextNode = nextNode.nextSibling;
//[object HTMLParagraphElement], content3
console.log(`nextNode: ${nextNode}, ${nextNode.innerText}`);

/////////////////////////////////////////////////////////////

let nextEleNode = myNode.nextElementSibling;
console.log(`nextEleNode: ${nextEleNode}, ${nextEleNode.innerText}`);

/////////////////////////////////////////////////////////////
//childNodes
let divNode = document.getElementById("wrap");
//[object HTMLDivElement]
console.log(`divNode: ${divNode}`);

let divChildesNode = divNode.childNodes;
//[object NodeList]
console.log(`divChildesNode: ${divChildesNode}`);
//[text, p#p1, text, p#p2, text, p#p3, text]
console.log(divChildesNode);

/////////////////////////////////////////////////////////////
//children
let divChildren = divNode.children;
//[object HTMLCollection]
console.log(`divChildren: ${divChildren}`);
//[p#p1, p#p2, p#p3, p1: p#p1, p2: p#p2, p3: p#p3]
console.log(divChildren);
console.log(divChildren[0]);
console.log(divChildren.item(0));
console.log(divChildren.namedItem("p1"));

/////////////////////////////////////////////////////////////
let pNode = document.getElementById("p4");
let aNode = pNode.firstChild;
//#text
console.log(aNode);

aNode = pNode.firstElementChild;
//<img src="./imeges/gosu.jpg" alt="영화배우 고수" />
console.log(aNode);

let aAttrNode = aNode.getAttribute("src");
//./imeges/gosu.jpg
console.log(aAttrNode);

/////////////////////////////////////////////////////////
//getAttibute('속성명'), setAttribute('속성명', '속성값')
//객체.속셩명, 객체.속성명='값'
aAttrNode = aNode.src;
//http://127.0.0.1:5500/jsdemo/imeges/gosu.jpg
console.log(aAttrNode);

aNode.setAttribute("title", "스타배우");
console.log(aNode.getAttribute("title"));

aNode.id = "imgGosu";
console.log(aNode.id);
