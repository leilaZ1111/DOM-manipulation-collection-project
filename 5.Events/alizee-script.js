// Pour partie 1) Comment inscrire directement mon event en callBack sans que ma ligne 29 devienne inactive? Ou et comment l'initialiser pour l'appeler ultérieurement?
// Quelle syntaxe alternative pour le rgb l.63?

const _initTime = Date.now()

const getElapsedTime = () => {
return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}
/* Code de Diogo
const clickOnSquare = (event) => {                       //[console.log(event) pour voir tous les events de l'elmt cliqué]
    console.log(event.target.classList.value)            // display la/les valeur.s de la classList
    console.log(event.target.classList[1])               // displa la 2eme classe de l'élément cible
    console.log(getElapsedTime())
}
*/


// 1) Everytime the user clicks on one of the action squares                                                --> 2. init variable event
// Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above    --> cible, crée, appendChild, classList.Value =, (facultatif : +eventListener)
// Create a new <li> in the log below to state when the action was done                                     --> cible, crée la "li", appendchild, innerText="" en appelant la fonction getElapsedTime()}
//                                                                                                          --> 1. Code a exécuter cad la loop pour chaque .actionSquare


const actionSquare = (event) => {
    const container = document.querySelector(".displayedsquare-wrapper")
    const newDiv = document.createElement("div")
    container.appendChild(newDiv)
    newDiv.classList.value=event.target.classList.value                  /* si ici on ajoute simplement [+ " newSquare"], on se retrouve avec un probleme de répétition de la même classe à chaque fois qu'on clique sur un même carré!*/
    newDiv.classList.add("newSquare")                                    //Utile pour la dernière consigne
    newDiv.addEventListener('click', actionSquare)                       //facultatif : pour que le newSquare génère à son tour d'autres newSquares
    

    const actionLog = document.querySelector("main ul")
    const newLi = document.createElement("li")
    /* console.log(event) */
    actionLog.appendChild(newLi)
   /*  console.log(event.target.classList) */                           // On check sur quel "index" se trouve la couleur
    newLi.innerText = "["+ getElapsedTime() + "] " + "Created a new " + event.target.classList[1] + " square" 
    
}


const arrayOfSquares = document.querySelectorAll(".actionsquare")       //appeler fonction pour que le carré d'origine génère un carré quand il est cliqué
for (let square of arrayOfSquares) {
    square.addEventListener('click', actionSquare);
}




/* 2) Add an event listener on the document <body>, listening for the keypress event  --> eventListener("keydown", )
When the spacebar is hit randomly change the background color of the whole page       --> if(event.code === "codeDeLaTouche") --> body.style.backgroundColor = 
Log when the spacebar is used the same way you used for the generated squares.        --> cible, crée, innerText, (facultatif), appendChild.
*/

let body = document.body;
const getRandomColor = [Math.floor(Math.random()*256), Math.floor(Math.random()*256), Math.floor(Math.random()*256)]     //code Antoine : () => ('#' + parseInt(Math.random() * 0xffffff).toString(16));    

body.addEventListener("keydown", (event) => {
    /* console.log(event) */                                                                                             //pour trouver le code des touches ou via https://www.toptal.com/developers/keycode
    if (event.code === "Space"){                 
        body.style.backgroundColor = `rgb(${getRandomColor[0]}, ${getRandomColor[1]}, ${getRandomColor[2]})`             // code Antoine : getRandomColor() //code Louis : body.style =  `background-color : rgb(${getRandomColor})`
        const myListSpaceBare = document.querySelector("ul")
        const itemSpaceBare = document.createElement("li")
        itemSpaceBare.innerText = '[' + getElapsedTime() + ']' + "Someone pressed the spacebar here!"
        myListSpaceBare.appendChild(itemSpaceBare)
        
    }
});

//When the l key is pressed the log gets deleted (erases the generated <li>s). Mind you: using a delete in a for loop might cause issues (as the amount of items to loop over changes), so a while loop might be a good choice instead.

document.addEventListener("keydown", (event) => {
    if (event.code == "KeyL") {
        while (document.querySelectorAll("li").length > 0) {
            document.querySelector("li").remove();
        }
    }
})

//When the s key is pressed the squares get deleted (erases the generated squares)

document.addEventListener("keydown", (event) => {
    if (event.code == "KeyS") {
        while (document.querySelectorAll(".newSquare").length > 0) {
            document.querySelector(".newSquare").remove();
        }
    }
})


// Create a system so that when a user clicks on a generated square an alert pops-up with the color of that square
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("newSquare")) {
        console.log(event.target.className)
        let color = event.target.className.split(" ")[1]           //split() coupe une "string" en un array de strings et return l'array ou l'index demandé seulement, ici la couleur.
        alert(color)    
    }
})