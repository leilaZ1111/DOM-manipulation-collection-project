//////////////////////////////////////////////////////////////
// 1. Everytime the user clicks on one of the action squares
///////////////////////////////////////////////////////////

// 1.1. Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)

// 1.2. Create a new <li> in the log below to state when the action was done



///////////////////////////////////////////////////////////////
// 2. Add an event listener on the document <body>, listening for the keypress event.
///////////////////////////////////////////////////////////

// 2.1. When the spacebar is hit randomly change the background color of the whole page

// 2.2. Log when the spacebar is used the same way you used for the generated squares.

// 2.3. When the l key is pressed the log gets deleted (erases the generated <li>s). Mind you: using a delete in a for loop might cause issues (as the amount of items to loop over changes), so a while loop might be a good choice instead.

// 2.4. When the s key is pressed the squares get deleted (erases the generated squares)



/////////////////////////////////////////////////////////
// 3. Create a system so that when a user clicks on a generated square an alert pops-up with the color of that square
//////////////////////////////////////////////////////////




const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

// const clickOnSquare = (e) => {
//   console.log(e.target.classList[1])
//   console.log(getElapsedTime())
// }

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

