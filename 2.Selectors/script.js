let selectImportant = document.getElementsByClassName('important')
// this is an array
console.log(selectImportant);

for (let i=0; i< selectImportant.length; i++){
    selectImportant[i].title = "This is an important item";
}
// the loop apply to the array "selectImportant"
let img = document.getElementsByTagName("img");
console.log(img);
// this is an array of all images, important and non-important
for (let i=0; i< img.length; i++){
    if (!img[i].classList.contains("important")){
        img[i].style.display = "none"
    } ;
}
