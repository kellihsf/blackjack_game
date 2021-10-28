window.addEventListener('DOMContentLoaded', function () {
  // Execute after page load

  // Add a click event listener to the button
  const dealBtn = document.querySelector("#deal-button");
  dealBtn.addEventListener("click", function () {
    console.log("You've pressed the deal button");

    //Create a new card image element
    const newCard = document.createElement('img');
    console.log(newCard)
  });
})

