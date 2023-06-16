///////////: STARTING POINT GIVEN BY DIOGO //////////////////

const _initTime = Date.now(); // This code initializes a variable _initTime with the current timestamp using the Date.now() function. The Date.now() function returns the current timestamp in milliseconds.

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
}; // The function above calculates the elapsed time since _initTime and returns it in seconds with two decimal places.

//// Bellow, the bolck of code is copied and past later on after the function clickOnSquare, but it was given by Diogo ;-)
// const actionSquares = document.querySelectorAll('.actionsquare') 
// for (let actionSquare of actionSquares) {
//   actionSquare.addEventListener('click', clickOnSquare)
// } // See the explaination just bellow:

// 1. This code selects all elements with the class "actionsquare" in the document using the `document.querySelectorAll('.actionsquare')` method. These elements are typically HTML elements on the page that have the class "actionsquare". The selected elements are stored in the `actionSquares` variable.

// 2. It then sets up an event listener for each element in the `actionSquares` collection. The `for...of` loop is used to iterate over each `actionSquare` in the `actionSquares` collection.

// 3. For each `actionSquare`, it adds an event listener using the `addEventListener` method. The event being listened for is the 'click' event, which occurs when the element is clicked.

// 4. The function `clickOnSquare` is specified as the event handler. This means that when any of the `actionSquare` elements are clicked, the `clickOnSquare` function will be executed.

// In summary, this code selects all elements with the class "actionsquare" and sets up a click event listener for each of these elements. When any of the elements are clicked, the `clickOnSquare` function will be called.

//////////////////////////////////////////////////////////////
// 1. Everytime the user clicks on one of the action squares
///////////////////////////////////////////////////////////

// 1.1. Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)

let sectionDisplay = document.querySelector("section"); // SCOPE IT RIGHT !!! DO NOT DECLARE THIS VARIABLE IN THE BELLOW FUNCTION OR YOU'LL HAVE ISSUES LATER, GIRL ;-)  It selects the first <section> element on the page using document.querySelector("section") and assigns it to the sectionDisplay variable. This allows referencing the section element in the code.

let clickOnSquare = (e) => {  // This very long function (wasn't given) takes an event parameter (e), which represents the event triggered when a square element is clicked.
  console.log(e.target.className); // It logs the className property of the target property of the event object to the console using console.log(). The target property refers to the element on which the event was originally triggered. In this case, it logs the class name of the clicked element.
  let selectedColor = e.target.className; // It assigns the value of e.target.className to the selectedColor variable. This allows capturing the class name of the clicked element and storing it for further use in the code.

  let newDiv = document.createElement("div"); 
  // creates a new <div> element using document.createElement("div") and assigns it to the newDiv variable. This creates a new <div> element in memory.

  // let sectionDisplay = document.querySelector("section"); SCOPING PROBLEM WHEN DECLARING THIS VARIABLE IN THE FUNCTION !!!!!!!! I HAD TO CUT AND PAST IT ON TOP OF MY FUNCTION AND IT DEBUDDED A PROBLEME I HAD ON 2.2 an 2.3 INSTRUCTION WHEN THIS VARIABLE WAS IN THE FUNCTION

  console.log(sectionDisplay);

  sectionDisplay.append(newDiv); // The newDiv element created earlier is appended as a child element to the sectionDisplay using the append() method. This adds the new <div> element to the section in the DOM.

  // Bellow, the code checks the value of the selectedColor variable using conditional statements (if, else if). Based on the value, it sets the class name of the newDiv element accordingly using the classList property.

  if (selectedColor == "actionsquare green") {
    newDiv.classList = "displayedsquare green";
    console.log("green") // If selectedColor is "actionsquare green", the class name "displayedsquare green" is assigned to the newDiv element.
  } else if (selectedColor == "actionsquare violet") {
    console.log("violet"); // 
    newDiv.classList = "displayedsquare violet"; // If selectedColor is "actionsquare violet", the class name "displayedsquare violet" is assigned to the newDiv element.
  } else if (selectedColor == "actionsquare orange") {
    console.log("orange");
    newDiv.classList = "displayedsquare orange";
  }  // ===> The 1.1. part of the code essentially creates a new <div> element and appends it to a section in the DOM based on the class name of the clicked element. The specific class name determines the appearance of the newly created <div> element.


  // 1.2. Create a new <li> in the log below to state when the action was done
 let ul = document.querySelector("main ul"); // Select the existing <ul> element
 let actionLog = document.createElement("li"); // Create a new <li> element (...)
 let currentTime = getElapsedTime(); // (...) assigned the timestamp and elapsed time (...)
 actionLog.textContent = `Action performed at ${currentTime}`; // (...) as its text content
 ul.appendChild(actionLog); // Append the new <li> element to the existing <ul> element
};

///////////////////////////////////////////////////////////////////
/// See the full and detailed explaination up in the comment for the following actionSquares function that was given by Diogo
const actionSquares = document.querySelectorAll(".actionsquare"); 
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}
/////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
// 2. Add an event listener on the document <body>, listening for the keypress event.
///////////////////////////////////////////////////////////

let body = document.body; // select body so that we can add an event listener later

const getRandomColor = [Math.floor(Math.random()*256), Math.floor(Math.random()*256), Math.floor(Math.random()*256)]   // generates a random RGB color by using Math.random() to generate random values for the red, green, and blue components of the color. The values are stored as an array in the getRandomColor constant.


// 2.1. When the spacebar is hit randomly change the background color of the whole page

// 2.2. Log when the spacebar is used the same way you used for the generated squares.

body.addEventListener("keypress", (event) => {  
  
// "keypress": This is a string specifying the type of event to listen for. In this case, it's the "keypress" event, which occurs when a key on the keyboard is pressed and released.

// (event) => { ... }: This arrow function is the event listener function that will be executed when the "keypress" event occurs. Pour trouver le code des touches ou via https://www.toptal.com/developers/keycode

// event: This is the parameter of the arrow function, representing the event object that contains information about the event that occurred.

  if (event.code === "Space"){ // This condition checks if the pressed key's code is equal to "Space". If it is, the code inside the condition is executed.
    body.style.backgroundColor = `rgb(${getRandomColor[0]}, ${getRandomColor[1]}, ${getRandomColor[2]})` // This line sets the backgroundColor style property of the body element to the random RGB color generated earlier.  The backticks ( ) are used instead of single quotes (' ') because the code inside the backticks is using a template literal. Template literals are a feature of JavaScript that allow for easier string interpolation and multi-line strings. By using backticks, you can include variables or expressions directly within the string using the ${} syntax. If single quotes were used instead of backticks, the variables would not be evaluated and would be treated as literal strings. Therefore, in order to include the dynamic values of getRandomColor, backticks and the ${} syntax are used to create a string with the desired interpolated values.

    const myListSpaceBare = document.querySelector("ul"); // selects the first <ul> element in the document and assigns it to the myListSpaceBare constant.
    const itemSpaceBare = document.createElement("li"); // creates a new <li> element using document.createElement("li") and assigns it to the itemSpaceBare constant.
    itemSpaceBare.innerText = '[' + getElapsedTime() + ']' + 'Look what the spacebar does!';
     // sets the text content of the new <li> element to a string that includes the current elapsed time (retrieved using the getElapsedTime function) and a message indicating that someone pressed the spacebar.
     myListSpaceBare.appendChild(itemSpaceBare); // appends the new <li> element as a child of the <ul> element, effectively adding it to the list.
  }
});

// 2.3. When the l key is pressed the log gets deleted (erases the generated <li>s). Mind you: using a delete in a for loop might cause issues (as the amount of items to loop over changes), so a while loop might be a good choice instead.

// Bellow : the code attaches an event listener to the document object for the "keypress" event. When a key is pressed and released, the arrow function will be called with the event object containing details about the key press event.

document.addEventListener("keypress", (event) => {
  if (event.code == "KeyL") { // This condition checks if the code of the pressed key is equal to "KeyL". The event.code property represents the physical key being pressed.
      while (document.querySelectorAll("li").length > 0) { // creates a loop that runs as long as there are <li> elements in the document. It checks the length of the NodeList returned by document.querySelectorAll("li") and continues the loop if there are still <li> elements present.
          document.querySelector("li").remove(); // selects the first <li> element in the document using document.querySelector("li") and removes it from the DOM using the remove() method.
      }
  }
}); 

// In summary, the code listens for the "keypress" event on the document. If the pressed key has a code equal to "KeyL", it enters a loop that removes all existing <li> elements from the document one by one until there are no more <li> elements left.
// ===> addEventListener > IF statement > WHILE LOOP > .remove



// 2.4. When the s key is pressed the squares get deleted (erases the generated squares)
// ==> final solution for me (GIORGI helped) because I had an issue using the .lenght methode like Alizée and I used for the keyL, might be a scoping problem, I don't undersant why it didn't work!

document.addEventListener("keypress", (event) => { // attaches an event listener to the `document` object for the "keypress" event. When a key is pressed and released, the arrow function will be called with the `event` object containing details about the key press event.
  if (event.code == "KeyS") { // this condition checks if the code of the pressed key is equal to "KeyS". The `event.code` property represents the physical key being pressed.
      removeAddedSquares(); // calls the function `removeAddedSquares()`, which is defined below and removes the added squares from the document when the "S" key is pressed.
        }
}); 

const removeAddedSquares = () => { // arrow function that performs the task of removing added squares from the document.
  while (sectionDisplay.firstChild) { // creates a loop that runs as long as there is a first child element within the `sectionDisplay` element.
    sectionDisplay.removeChild(sectionDisplay.firstChild); // removes the first child element of the `sectionDisplay` element using the `removeChild()` method. It removes one child element from the `sectionDisplay` at a time until there are no more child elements left.
  }
};// In summary, the code listens for the "keypress" event on the document. If the pressed key has a code equal to "KeyS", it calls the `removeAddedSquares()` function, which removes all the added squares from the document by removing their corresponding child elements from the `sectionDisplay` element.

//////////////////////////////

// ==> Alizée did it differently, she used a .lenght like with the KeyL but I couldn't for some reasons
// document.addEventListener("keydown", (event) => {
//   if (event.code == "KeyS") {
//       while (document.querySelectorAll(".newSquare").length > 0) {
//           document.querySelector(".newSquare").remove();
//       }
//   }
// })

// ===> Giorgi's code include 2.3 & 2.4. and is way more neat and concise, shorter syntax ! He's using a switch tatement for when the L or S key is pressed and have difine two fonction for these actions !
// body.onkeydown = (e) => {
//   switch (e.key) {
//     case "s":
//       removeAddedSquares();
//       break;
//     case "l":
//       removeAllChildFromUl();
//       break;
//   }
// };

// const removeAddedSquares = () => {
//   while (displayedsquareWrapper.firstChild) {
//     displayedsquareWrapper.removeChild(displayedsquareWrapper.firstChild);
//   }
// };

// const removeAllChildFromUl = () => {
//   while (actionLog.firstChild) {
//     actionLog.removeChild(actionLog.firstChild);
//   }
// };

/////////////////////////////////////////////////////////
// 3. Create a system so that when a user clicks on a generated square an alert pops-up with the color of that square
//////////////////////////////////////////////////////////

document.addEventListener("click", (event) => {
  if {
j
  }
})