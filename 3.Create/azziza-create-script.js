Modify the script.js to create a new <section> with a random background-color
 for each learner in your group. 
 This section should contain a paragraph with the name of the learner. 
 Those sections should be appended in the <article>
/

//create a new section
let learners = ["Aziza", "Antoine","Zusana", "William", "Walid","Alexandra","Noah","Lucie","Leila","Safa", "Ignace","Glaucielle","Giorgi"];
let article = document.getElementsByTagName('article')[0];

function getRandomInt(i) {
    //generation of a number beteween 0 and i
    return Math.floor(Math.random() i);
  }
  //If the background is dark the text should be white, if the background is light the text should be black
function randomContrastColor(){
    let r = getRandomInt(255);
    let g = getRandomInt(255);
    let b = getRandomInt(255);
    let rText =225-getRandomInt(255);
    let gText =225-getRandomInt(255);
    let bText =225-getRandomInt(255);
    return ['rgb('+r.toString()+','+g.toString()+','+b.toString()+')','rgb('+rText.toString()+','+gText.toString()+','+bText.toString()+')'];

}

// Shuffle function to randomize array order
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  learners = shuffleArray(learners);
for(let i=0; i<learners.length;i++){
    console.log(learners[i]);
    let section  = document.createElement("section");
    section.style.backgroundColor=randomContrastColor()[0];
    let name =document.createElement("p");
    name.textContent=learners[i];
    name.style.color= randomContrastColor()[1];
    name.style.fontSize = "40px";
    name.style.fontWeight ="Bold";
    section.appendChild(name);
    article.appendChild(section);

}