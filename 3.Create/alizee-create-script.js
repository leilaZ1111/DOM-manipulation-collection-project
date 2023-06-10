// dans l'article, on va créer section>paragraphe>prénom/background autant de fois qu'il y a de prénoms --> tout dans une boucle(-créerSection>créerParagrapheEtContenu>AttribuerBackground)

//1. On cible l'article --> .querySelector("article")
//   Et on déclare l'array [prénoms] qui sera parcourue par la boucle pour générer chaque <section>

//2. Boucle : On génère nos sections>paragraphes>contenu/background 
// 2.1. LES SECTIONS :
//      for(let i=0; i<array.length; i++) {
//          const sec = document.createElement("section");
//          article.appendChild(sec);  
//      }
// --> les prénoms apparaitront chaque fois dans le meme ordre. On devra fixer ce pb plus tard au point 3.

// 2.2. LES PARAGRAPHES et leur contenu
//       let paragraphs = document.createElement("p");
//       sec.appendChild(paragraphs); 

// 2.3. PRENOMS                           
//       paragraphs.textContent = array[i];

// 2.3. BACKGROUND
//      Variable background : couleur random pour chaque valeur de RGB
//      styliser le background du <p>
//      si le paragraphe est clair/foncé : text black/white

// 3. Les prénoms doivent s'afficher aléatoirement a chaque fois qu'on refresh la page : on insère les prénoms une fois sur deux au début/à la fin de l'<article> avec if(Math.random()). On rectifie le début de la loop en incluant la condition.


const array = ["Lucie", "Antoine", "Leila", "Florentina", "Ignace", "Glaucielle", "Louïs", "Aziza"];
const article = document.querySelector("article");


for(let i=0; i<array.length; i++) {
    const sec = document.createElement("section");
    if(Math.random()<0.5){
        article.appendChild(sec);  
    } else {
        var lastOne = document.querySelector("section")
        article.insertBefore(sec, lastOne);
    }

    let paragraphs = document.createElement("p");
    sec.appendChild(paragraphs);                            //AppendChild crée un noeud, donc attention si texte uniquement à ajouter append!   position.lastChild.appendChild(p)
    paragraphs.textContent = array[i];

    let colorRandom = [Math.floor(Math.random()*256), Math.floor(Math.random()*256), Math.floor(Math.random()*256)];
    sec.style = `background-color: rgb(${colorRandom})`;

    if(colorRandom[0]<128) {                    //regarder le code des autres pour voir comment ils ont "mieux" fait
        paragraphs.style.color = "white";
    }
    else {
        paragraphs.style.color = "black";
    } 
}