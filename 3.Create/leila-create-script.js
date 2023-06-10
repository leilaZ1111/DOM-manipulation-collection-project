// Modify the script.js to create a new <section> with a random background-color for each learner in your group.
//This section should contain a paragraph with the name of the learner.
//Those sections should be appended in the <article>
// If the background is dark the text should be white, if the background is light the text should be black
// Find a way so that everytime you load the page the order of the elements changes!


function shuffleArray(array) { // définition de la fonction shuffle définie, je peux l'appeler plus bas
  for (let i = array.length - 1; i > 0; i--) { 
    console.log('valeur de i' + i); // ça c'est juste pour inspecter la consloe et m'aider à comprendre ce que fait l'ordi
    let j = Math.floor(Math.random() * (i + 1));
    console.log('valeur de j' + j);  // ça c'est juste pour inspecter la consloe et m'aider à comprendre ce que fait l'ordi
    [array[i], array[j]] = [array[j], array[i]]; // permutation

  } 
}

let array = ["Venus", "Sirius", "Andromede", "Arcturus", "Vega", "Zeta","Orion", "Pleiades", "Essassani", "Lyra", "Earth"]; // Creation of an array with our learner

function createSectionWithParagraphs(array) { // Create a new HTML section element
shuffleArray(array); // shffle throught it

  let section = document.createElement("section"); 

  for (let i = 0; i < array.length; i++) { // Iterate over the array elements
    let paragraph = document.createElement("p");  // Create a new paragraph element
    paragraph.textContent = array[i]; // Set the text content of the paragraph to the array element

    // Generate random RGB values
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    // Apply random background color for each paragraph element
    paragraph.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    // Calculate brightness to determine if a color is more of the briht or of the dark side - see http://alienryderflex.com/hsp.html
    let brightness = Math.sqrt(0.299 * red ** 2 + 0.587 * green ** 2 + 0.114 * blue ** 2);

    // Set text color based on brightness
    paragraph.style.color = brightness < 128 ? "white" : "black";
    // Above : In the spirit of using short-hand syntax, we can use a _ternary operator_ to simplify an `if...else` statement.  
    // The condition, `isNightTime`, is provided before the `?`.
    // Two expressions follow the `?` and are separated by a colon `:`.
    // If the condition evaluates to `true`, the first expression executes.
    // If the condition evaluates to `false`, the second expression executes.

    section.appendChild(paragraph); // Append the paragraph to the section
  }

  document.body.appendChild(section); // Append the section to the document body or any other desired parent element
}

createSectionWithParagraphs(array);