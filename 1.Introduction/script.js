console.log(document.title);
document.title = "Modifying the DOM";
let title = document.getElementById("title");
title.innerText = "Modifying the DOM";
console.log(title);

function changeBackground() {
  document.body.style.backgroundColor = "#FF69B4";
}
console.log(changeBackground());

let body = document.body;
/* let cont = 0; */
let children = body.children;
// children is my full array of body's children

/* function showChilldNodes() {} */
// old way to write function but equal to the one bellow
let showChilldNodes = (children) => {
  for (let i = 0; i < children.length; i++) {
    console.log("element", children[i]);
    //children and only children of my array
  }

  /* for (element of children){
        if (cont===1){
            return element;
        }
        cont++;
     } */
};

showChilldNodes(children);

// for (const child of body.children) {
//     console.log(child);
//   }
