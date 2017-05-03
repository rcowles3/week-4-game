// On game load, computer will load a random number for user to guess, which will auto generate between 19 - 120. 
$(document).ready(function() {

    // Create a string which will hold the random number
    var computerNumber = "";

    // Computer generates random number for user to guess to
    computerNumber = Math.floor((Math.random() * 120) + 19);

    console.log(computerNumber);

    // Need to send number back into random number div
    $("#computerGuess").prepend(computerNumber);

    // Wins and losses will both be reset/set to 0.
    var wins = "";
    var losses = "";

});


// 4 images need to be created as buttons.
// When each image is clicked, it will generate a random number, which will be hidden from the user. 
$(".imgButtons").on("click", function() {

    // Create a variable for the added string of numbers.
    var addedClickNo = "";
 
        // Each randomly generated number from the crystal click will be between numbers 1 - 12. 
        var random = Math.floor((Math.random() * 12) + 1);

        // Once the button is clicked, a random number generated, the number should be pushed and added to a string.
        addedClickNo = random + random;

        $("#userGuess").prepend(addedClickNo);
        console.log(addedClickNo);  

});
// The total of numbers added up are then compared to auto generated computer number.
// If the added up numbers equal up to the computer number, then user wins, and win counter will increase by 1. If added numbers added up more than computer number, user will lose, and loser counter will increase by 1.
