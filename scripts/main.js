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

function buildDeck() {
  let cards = [];

  // loop through suits
  const suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  for (let i = 0; i < suits.length; i++) {

    // loop through rank 1-13
    const rank = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    for (let j = 0; j < rank.length; j++) {
      cards.push(
        { rank: rank[j], suit: suits[i] }
      );
    }
  }
  console.log(cards);
}

let myDeck = buildDeck();


let dealerHand = [];
let playerHand = [];

function drawCard(nextHand){
  console.log("you have drawn a card");
  let drawnCard = myDeck.pop();
  nextHand.push(drawnCard);
  console.log(nextHand);
}

drawCard();

// ****  Deal the hand ****
  // Push the deal button

  // Card dealt to player
  // * Draw a card from the deck
  drawCard(playerHand);
  // * Deal it to the player -- add to player's hand

  // Card dealt to dealer
  // * Draw a card from the deck
  drawCard(dealerHand);
  // * Deal it to the dealer -- add to dealer's hand

  // Card dealt to player
  // * Draw a card from the deck
  drawCard(playerHand);
  // * Deal it to the player -- add to player's hand

  // Card dealt to dealer
  // * Draw a card from the deck
  drawCard(dealerHand);
  // * Deal it to the dealer -- add to dealer's hand
