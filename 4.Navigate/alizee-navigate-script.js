//Select the last child of the <ol> tag and put it at the beginning of the list
// CIBLER la liste                      -->  .querySelector("ol")  
//        son dernier élément           -->  .lastElementChild
// DEPLACER                             -->  Où?.insertBefore(élémentCiblé, avantQuoi?)
const myList= document.querySelector("ol");
const moovingKid = myList.lastElementChild;
myList.insertBefore(moovingKid, myList.firstElementChild); 
// dans myList(je déplace mon dernier enfant, dans myList tout en haut)


/*Move the <h2> of the third section in the second one and vice-versa*/
//CIBLER le h2 de la 2eme section
//                la 3eme
//       la 2eme section
//       la 3eme 
//DEPLACER 


const myTitle2 = document.querySelector("section:nth-child(2) h2");
const myTitle3 = document.querySelector("section:nth-child(3) h2");
const secondSection = document.querySelector("section:nth-child(2)");
const thirdSection = document.querySelector("section:nth-child(3)");

secondSection.insertBefore(myTitle3, secondSection.firstElementChild);
thirdSection.insertBefore(myTitle2, thirdSection.firstElementChild);



/* Delete the last section from the DOM, we don't need it anyways  */

const lastSection = document.querySelector("main");
lastSection.lastElementChild.remove();