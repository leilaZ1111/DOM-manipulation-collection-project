/*
1.Select the last child of the <ol> tag => <li>The Fast and Furious film franchise</li> <= and put it at the beginning of the list

2. Move the <h2> of the third section in the second one and vice-versa

3. Delete the last section from the DOM, we don't need it anyways
*/

/////////////////////////////////////////////////////////////:
//      1. Selecting the last child of the <ol> tag
//      to put it at the beginning of the list
//////////////////////////////////////////////////////////////

// 1:
let ol = document.querySelector("ol"); // Select the ol

let lastChild = ol.lastElementChild; // Get the last child (list item) of the ordered list
  
ol.prepend(lastChild) // Move the last child to the beginning of the list

// ol.insertBefore(lastChild, ol.firstElementChild); // ALTERNATIVE WAY to move the last child to the beginning of the list


/////////////////////////////////////////////////////
        //  2. Selecting the right elements  //
/////////////////////////////////////////////////////


let section = document.querySelectorAll("section");//we create an 'array' comporting 3 sections and all of its children

let firstChild2section = section[ 1 ].querySelector(':first-child');//select 1st child of the section[ 1 ] donc, le h2

    firstChild2section.classList.add("TheThird");//add a class to the (firstChild2section) first child et donc le h2."the third section ..." !!!!!!! différent en ligne 37 parce qu'ici on a section/h2

let firstChild3section = section[ 2 ].querySelector(':first-child');//select 1st child of the section[ 2 ] et donc de la div.

    firstChild3section.firstElementChild.classList.add("TheSecond");//add a class to the div(firstChild3section) first child et donc le h2."the second section ..."   !!!!!!! différent en ligne 33 parce qu'ici on a section/div/h2 (la div est un piège)


////////////////////////////////////////////
        //Time to switch the titles//
///////////////////////////////////////////


let title3 = document.querySelector(".TheSecond");
// je déclare mon titre comme une variable, plus facile maintenant qu'ils ont une classe! 
let title2 = document.querySelector(".TheThird");
// je déclare mon autre titre de la même façon

    let tempContent = title2.innerHTML; // Create a temporary container or variable to hold the title2 CONTENT so that we don't loose the information when "overwrite title 2 with title 3 on the next line of the code"

    title2.innerHTML = title3.innerHTML;

    // à ce stade les deux titres sont pareils, le contenu de l'ancien title2 a été écraser par le contenu du title3

    title3.innerHTML = tempContent;

    // Ici, on rappelle le contenu initial de title2 pour l'attribuer à title3


////////////////////////////////////////////////
     //3. Time to delete the section[ 2 ]//
///////////////////////////////////////////////

console.log(section[ 2 ]);

section[ 2 ].remove();