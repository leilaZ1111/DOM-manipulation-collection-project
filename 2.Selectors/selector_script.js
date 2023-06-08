// 1. Add a title attribute to every element that has the important class, stating This is an important item. Tip: adding a title attribute to an element is different from changing the title of a document.
let selectImportant = document.getElementsByClassName("important");
// this is an array
console.log(selectImportant);

// -----------------------------

// 2. Select all the img tags and loop through them. If they have no important class, turn their display property to none
for (let i = 0; i < selectImportant.length; i++) {
  selectImportant[i].title = "This is an important item";
}
// Above the loop apply to the array "selectImportant"

let img = document.getElementsByTagName("img");
console.log(img);
// Above this is an array of all images, important and non-important
for (let i = 0; i < img.length; i++) {
  if (!img[i].classList.contains("important")) {
    img[i].style.display = "none";
  }
}
// -----------------------------

// 3. Now loop through all the paragraphs and display their content in the console. ===> LOOP ! "for of"
// 4. If the paragraph has a class, display its classname as well  ===> IF statement
const allParagraph = document.querySelectorAll("p");

for (const p of allParagraph) {
  console.log(p.textContent);
  if (p.classList.length > 0) {
    console.log("Class: " + p.classList[0]);
  }
}

// In the above - about > 0 : In this case, "p.classList.length" retrieves the number of classes applied to the paragraph element. If the length is greater than 0, it means the element has one or more classes. The comparison '> 0' checks if the length is greater than 0, and if so, the condition is considered true.

// So, the condition "p.classList.length > 0" is used to determine if the paragraph element has any classes, and if it does, the code inside the if block is executed.

// In the above - about [0] : When getElementsByClassName is called, it returns a collection of elements that have the specified class name. Since it returns a collection, you need to use the index [0] to access the first element in that collection.

// -----------------------------

// 5. Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.

let p = document.querySelectorAll("p"); ////select all p elements

for (let i = 0; i < p.length; i++) {
  // loops trough all of them
  if (!p[i].classList.length > 0) {
    // checks if the p does NOT have a class
    p[i].style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    ///gives a random color to the p
  }
}
// in the above :

//p[i] refers to the paragraph element at index i in the p array. This code assumes that there is an array named p containing the paragraph elements.

//style is a property of the paragraph element that allows you to access and modify its CSS styles.

//color is a CSS property that defines the text color of an element.

//"#" + Math.floor(Math.random() * 16777215).toString(16) generates a random hexadecimal color code. Here's how it works:

// Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive).

// Math.floor(Math.random() * 16777215) multiplies the random number by 16777215 and rounds it down to the nearest integer. This produces a random integer between 0 and 16777214.

// .toString(16) converts the random integer to a hexadecimal string.

// "#" + ... concatenates the "#" character with the hexadecimal string to form a valid hexadecimal color code.

// By assigning the random color code to p[i].style.color, you set the text color of the paragraph element to the generated random color.

//Overall, this code snippet generates a random color code using hexadecimal notation and applies it as the text color for each paragraph element in the p array.

// -----------------------------

// ALTERNATIVE WAYS TO SET RANDOM COLORS (Florentina)

//     p[i].style.color = "#" + Math.floor(0xffffff * Math.random());

// -----------------------------

// ALTERNATIVE WAYS TO SET RANDOM COLORS (with the 3 RGB)

//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);

//     // Apply the random RGB color
//     paragraph.style.color = `rgb(${red}, ${green}, ${blue})`;


// ou bien

//     const red = 1 + Math.floor(Math.random() * 255); // valeur entre 1 inclu et 255 (pas de noir)
//     const green = 1 + Math.floor(Math.random() * 255);
//     const blue = 1 + Math.floor(Math.random() * 255);

//     // Apply the random RGB color
//     paragraph.style.color = `rgb(${red}, ${green}, ${blue})`;
