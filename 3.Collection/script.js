// Bellow is my array of objects :

const collection = [
  {
    saga: "Harry Potter - Book 1 of 7",
    title: "Harry Potter and the Philosopher’s Stone",
    author: "J.K. Rowling",
    release_year: 1997,
    summary:
      "Harry Potter, raised by his miserable aunt and uncle, is unaware of his fame or magical abilities. His life takes a dramatic turn when he is invited to a renowned wizarding school, uncovering clues about his extraordinary heritage. From encounters with a friendly giant to an enchanting school environment, Harry is thrust into a hidden world, discovering his true destiny.",
    genre: ["Fantasy - Magic - Young Adult"],
    picture:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1598823299i/42844155.jpg",
  },

  {
    saga: " Dune - Book 1 of 8",
    title: "Dune",
    author: "Frank Herbert",
    release_year: 1965,
    summary:
      "On the desert planet Arrakis, young Paul Atreides becomes the key to a grand destiny. In a world ruled by the valuable drug called \"spice,\" Paul's noble family is betrayed, propelling him on a transformative journey. As he grows into the enigmatic figure of Muad'Dib, Paul will fulfill humanity's deepest and most elusive aspirations.",
    genre: ["Science Fiction - Fantasy - Adult"],
    picture:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg",
  },

  {
    saga: "The Lord of the Rings - Book 0 of 3",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    release_year: 1937,
    summary:
      "In a cozy hobbit-hole, Bilbo Baggins embarks on an unforgettable journey the wizard Gandalf and thirteen dwarves on their quest to reclaim their stolen treasure. encountering Gollum, and facing the formidable dragon Smaug, Bilbo becomes an unlikely hero in a tale of adventure set in the enchanting world of Middle-earth.",
    genre: ["Epic Fantasy - Adventure - Adult"],
    picture:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1519739410i/38819529.jpg",
  },

  {
    saga: "The Lord of the Rings - Book 1 of 3",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    release_year: 1955,
    summary:
      "In ancient times, the Rings of Power were created, including the One Ring forged by the Dark Lord Sauron for ultimate dominion. Lost for ages, the One Ring falls into the hands of Bilbo Baggins, setting in motion a perilous quest. Led by Frodo, a diverse group including Gandalf, hobbits, and others embark on a grand journey to destroy the Ring and confront the Dark Lord in The Lord of the Rings.",
    genre: ["Epic Fantasy - Adventure - Adult"],
    picture:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
  },

  {
    saga: "The Kingkiller Chronicle - Book 1 of 3 - Expecting a Third One",
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    release_year: 2007,
    summary:
      "The intimate narrative of his childhood in a troupe of traveling players, his years spent as a near-feral orphan in a crime-ridden city, his daringly brazen yet successful bid to enter a legendary school of magic, and his life as a fugitive after the murder of a king form a gripping coming-of-age story unrivaled in recent literature. A masterpiece written with a poet's hand that will transport readers into the body and mind of a wizard.",
    genre: ["Epic Fantasy - Magic - Adult"],
    picture:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1270352123i/186074.jpg",
  },

  {
    saga: "The Mistborn - Book 1 of 3",
    title: "The Final Empire",
    author: "Brandon Sanderson",
    release_year: 2006,
    summary:
      "In a world oppressed for a thousand years, a scarred thief named Kelsier unites a crew of skilled individuals to take down the tyrannical Lord Ruler. When a young orphan named Vin joins their ranks, they must learn to trust and harness unimaginable powers to achieve their ambitious goal.",
    volumes: "3 volumes serie",
    genre: ["Epic Fantasy - Magic - Adult"],
    picture:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1617768316i/68428.jpg",
  },

  {
    saga: "Shards of a Shattered Mirror - Book 1 of 2 - Expecting a Third One",
    title: "Cryptic",
    author: "Darryl Anka",
    release_year: 2017,
    summary:
      "In a future world shaped by rising sea levels and interstellar alliances, a young human-alien Hybrid named Willa emerges with extraordinary abilities. Raised in the serene Port Dublin, she begins her journey as an apprentice Cryptic. However, when her hidden potential is revealed, Willa must defend Earth and the Interstellar Alliance against a relentless alien Empire seeking domination.",
    genre: ["Science Fiction - Adventure - Adult"],
    picture:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1506900299i/36338137.jpg",
  },

  {
    saga: "The Old Kingdom - vol. 1 of 3",
    title: "Sabriel",
    author: "Garth Nix",
    release_year: 1995,
    summary:
      "Sent to a boarding school in Ancelstierre as a young child, Sabriel has had little experience with the random power of Free Magic or the Dead who refuse to stay dead in the Old Kingdom. But during her final semester, her father, the Abhorsen, goes missing, and Sabriel knows she must enter the Old Kingdom to find him. With two unlikly companions, she will soon face a battle that will bring her face-to-face with her own destiny..",
    genre: ["Fantasy - Magic - Adult"],
    picture:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1293655399i/518848.jpg",
  },

  {
    saga: "The Witcher - vol. 1 of 5",
    title: "Blood of Elves",
    author: "Andrzej Sapkowski",
    release_year: 1994,
    summary:
      "In a world of diverse races, peace once reigned. But now, tensions rise, and conflict ensues. The elves bear the brunt of animosity. Geralt of Rivia, the cunning Witcher, awaits the birth of a child with extraordinary power. This child holds the key to change, for better or worse. As war looms and the child becomes a target, Geralt must protect them all. Defeat is not an option for the resolute Witcher.",
    genre: ["Epic Fantasy - Adventure - Adult"],
    picture:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1589998653i/6043781.jpg",
  },

  {
    saga: "Throne of Glass - vol. 1 of 7",
    title: "Throne of Glass",
    author: "Sarah J. Maas",
    release_year: 2012,
    summary:
      "In a land without magic, where the king rules with an iron hand, an assassin is summoned to the castle. She comes not to kill the king, but to win her freedom. If she defeats twenty-three killers, thieves, and warriors in a competition, she is released from prison to serve as the king's champion. Her name is Celaena Sardothien.",
    genre: ["Fantasy - Romance - Young Adult"],
    picture:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1419066050i/16034235.jpg",
  },

  {
    saga: "The Exiles of Valdemar - vol. 1 of 3",
    title: "Exile's Honor",
    author: "Mercedes Lackey",
    release_year: 2002,
    summary:
      "Alberich, born into poverty, was forced into a military career in Karse. With exceptional speed, he excelled in weapons and academics through relentless study. Rescued from certain death by a white stallion, he find himself in Valdemar, his sworn enemy. Healed by his ennemies and unable to return home, he faced a dilemma: how could he remain loyal to his people while aiding their direst foe in training?",
    genre: ["Fantasy - Adventures - Young Adult"],
    picture:
      "https://static.fnac-static.com/multimedia/Images/FR/NR/62/90/e0/14717026/1507-1/tsp20220915211614/Exile-s-Honor.jpg",
  },

  {
    saga: "The Dark Elf Trilogy - vol. 1 of 3",
    title: "Homeland",
    author: "R.A. Salvatore",
    release_year: 1990,
    summary:
      "Drizzt Do'Urden, the renowned drow ranger from The Icewind Dale Trilogy, defies his malevolent society and treacherous family. Homeland first reveals the startling tale of how this one lone drow walked out of the shadowy depths of the Underdark, leaving behind a society of evil and a family who want him dead, marking the inception of his extraordinary dark elf saga.",
    genre: ["Epic Fantasy - Adventure - Adult"],
    picture:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631983063i/50027.jpg",
  },
];

///////////////////////////////////////////////////////////////////////////////////////////


document.body.style.fontFamily = "'Open Sans', sans-serif"; // il a fallut insérer le lien de la font dans l'HTML
document.body.style.margin = "0px";
document.body.style.padding = "0px";
document.body.style.backgroundColor = "#F2E2CF";

const container = document.getElementById("container"); // J'ai créé la div DANS mon html avec un ID. Cette div contiendra toute ce qui suit et sera créé depuis JS avec document.createElement, suivi de .append et de .innerText. Avec cette ligne de code, je demande à JS d'aller chercher cette div de mon html qui va contenir le container de mon header + cardCollection + footer

///////////////////////////////////////////////////////////////////////////////////////////

let header = document.createElement("div"); // création des div et éléments pour header
let headerTitle = document.createElement("h1"); // création des div et éléments pour header

let footer = document.createElement("div"); // création des div et éléments pour footer
let footerParagraph = document.createElement("p"); // création des div et éléments pour footer

///////////////////////////////////////////////////////////////////////////////////////////


// Dans cette section est défini le style pour mon header :
headerTitle.style.textAlign = "center";
headerTitle.style.padding = "30px";
headerTitle.style.paddingBottom = "0px";
headerTitle.style.marginBottom = "0px";
headerTitle.textContent = "A Collection of Fantastic Books and Wondrous Adventures";
header.append(headerTitle);
container.append(header);

////////////////////////////////////////////////////////////////

let cardCollection = document.createElement("div"); // création de ma div cardCollection (l'ensemble de toutes mes cartes entre header et footer)

// En dessous se trouve mon for LOOP :   ////////// Dans ce LOOP se trouve toute la partie style qui affecte la mainCard. La mainCard est le template à travers lequel sera formaté chaque objet de mon array. La {} commence à la ligne 183 jusqu'à 282. Au delà, le style s'applique à la grande div de ma cardCollection et du footer qui ne doivent pas être inclu dans le LOOP évidemment.

for (let i = 0; i < collection.length; i++) {
  console.log(collection[i].author);


  let mainCard = document.createElement("div"); // création d'une cardContainer

  let topPictureDiv = document.createElement("div"); // création d'un div pour contenir mon image
  let image = document.createElement("img"); // création d'un élément image

  let tagsDiv = document.createElement("div"); // création des div pour mes tags "year" et "genre"
  let yearTag = document.createElement("div"); // création des div pour le tag year
  let genreTag = document.createElement("div"); // création des div pour le tag genre

  let bottomDiv = document.createElement("div"); // pour contenir les titres et summary

  let topTitle = document.createElement("h2"); // création d'un h2 pour la partie "saga" de mes objets

  let mainTitle = document.createElement("h1"); // création d'un h1 pour la partie "title" de mes objets

  let subTitle = document.createElement("h2"); // création d'un h2 pour la partie "author" de mes objets

  let paragraph = document.createElement("p"); // création d'un h2 pour la partie "summary" de mes objets

  image.src = collection[i].picture; // le lien vers l'image de mes objets
  image.style.height = "300px";
  image.style.margin = "0 auto";
  image.borderRadius = "15px";

  topPictureDiv.style.display = "flex";  // flex pour la div picture et l'image qu'elle contient suivit du style
  topPictureDiv.style.justifyContent = "center";
  topPictureDiv.append(image);
  mainCard.append(topPictureDiv);

  // style pour les tags year et genre

  tagsDiv.style.display = "flex";
  tagsDiv.style.justifyContent = "center";
  tagsDiv.style.padding = "15px";
  tagsDiv.style.alignItems = "center";

  yearTag.style.borderRadius = "25px";
  yearTag.style.padding = "5px";
  // yearTag.style.border = "1px solid black";
  yearTag.style.backgroundColor = "#F2E2CF";
  yearTag.style.fontWeight = "900";
  yearTag.innerText = collection[i].release_year;

  tagsDiv.append(yearTag);

  genreTag.style.borderRadius = "25px";
  genreTag.style.padding = "5px";
  genreTag.style.textAlign = "center";
  genreTag.style.backgroundColor = "#F2E2CF";
  genreTag.style.marginLeft = "15px";
  genreTag.innerText = collection[i].genre;

  tagsDiv.append(genreTag);
  mainCard.append(tagsDiv);

  // style pour les titles
  topTitle.style.margin = "0";
  topTitle.style.color = "#858585";
  topTitle.style.fontSize = "20px"
  // topTitle.style.width = "220px";
  topTitle.innerText = collection[i].saga;
  mainCard.append(topTitle);

  mainTitle.style.margin = "8px 0"; // la 1ère valeur c'est pour le haut et le bas, la 2d pour droite gauche
  mainTitle.style.lineHeight = "37px";
  mainTitle.innerText = collection[i].title;
  mainCard.append(mainTitle);

  subTitle.style.margin = "0";
  subTitle.style.color = "#483E32";
  subTitle.innerText = collection[i].author;
  mainCard.append(subTitle);

  // style pour summary
  paragraph.style.fontFamily = "Open Sans";
  paragraph.innerText = collection[i].summary;
  mainCard.append(paragraph);

  // style, enfin juste un padding, pour la bottomDiv qui contient le h1, les h2 et le summary
  bottomDiv.style.padding = "15px";
  bottomDiv.append(topTitle);
  bottomDiv.append(mainTitle);
  bottomDiv.append(subTitle);
  bottomDiv.append(paragraph);
  mainCard.append(bottomDiv);

  // style pour la mainCard

  mainCard.style.paddingTop = "20px";
  mainCard.style.width = "380px";
  // mainCard.style.border = "1px solid black";
  mainCard.style.borderRadius = "15px";
  mainCard.style.backgroundColor = "#FBF6EF";

  cardCollection.append(mainCard);
}

////////////////////////////////////////////////////////////:

// A partir d'ici on est plus dans la boucle, le style s'applique à la cardCollection qui est l'ensemble de toutes mes cartes

cardCollection.style.display = "flex";
cardCollection.style.flexDirection = "row";
cardCollection.style.justifyContent = "space-evenly";
cardCollection.style.flexWrap = "wrap";
cardCollection.style.rowGap = "60px";
cardCollection.style.padding = "50px";
container.style.backgroundColor = "#F2E2CF";

///////////////////////////////////////////////////////////////

// Style pour le footer  :

footerParagraph.style.color = "#858585",
footerParagraph.style.padding = "30px";
// footerParagraph.marginBottom = "10px"; //??????????????????
footerParagraph.style.textAlign = "center"; // ??????????,
footerParagraph.textContent = "Made with Love by a Dreamer";
container.append(cardCollection);
footer.append(footerParagraph);
container.append(footer);
