window.addEventListener('DOMContentLoaded', function () {
  // Execute after page load

  // Add a click event listener to the button
  const dealBtn = document.querySelector("#deal-button");
  dealBtn.addEventListener("click", function () {
    console.log("You've pressed the deal button");

    //Create a new card image element - Dealer
    const newCard = document.createElement('img');

    // Append the new card image element to the dealer hand div
    const dealerHand = document.querySelector("#dealer-hand");
    dealerHand.appendChild(newCard);

    // Assign new const of newCard variable the source (2 of clubs)
    newCard.src = 'images/2_of_clubs.png';


    //Create a new card image element - Player
    const newCardPlayer = document.createElement('img');

    // Append the new card image element to the player hand div
    // Append the player card to the player hand div
    const playerHand = document.querySelector("#player-hand");
    playerHand.appendChild(newCardPlayer);

    // Assign new const of newCard variable the source (2 of clubs)
    newCardPlayer.src = 'images/9_of_hearts.png';
  });


  const hitBtn = document.querySelector("#hit-button");
  hitBtn.addEventListener("click", function () {
    console.log("You've pressed the hit button");

    //Create a new card image element - Dealer
    const newCard = document.createElement('img');

    // Append the new card image element to the dealer hand div
    const dealerHand = document.querySelector("#dealer-hand");
    dealerHand.appendChild(newCard);

    // Assign new const of newCard variable the source (2 of clubs)
    newCard.src = 'images/3_of_diamonds.png';
  })
})

// deck is array of objects
// create a function buildDeck that returns a new array with 52 card objects
function buildDeck () {
  cardArray = [];
}