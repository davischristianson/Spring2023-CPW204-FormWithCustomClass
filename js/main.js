var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
};
function addVideoGame() {
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function isAllDataValid() {
    return true;
}
function getVideoGame() {
    var game = new VideoGame();
    var titleInput = document.getElementById("title");
    game.title = titleInput.value;
    var priceInput = document.getElementById("price");
    game.price = parseFloat(priceInput.value);
    var ratingInput = document.getElementById("rating");
    game.rating = ratingInput.value;
    var digitalOnly = document.getElementById("online");
    game.isDigitalOnly = digitalOnly.checked;
    return game;
}
function displayGame(myGame) {
    var displayDiv = document.getElementById("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    var gameInfo = document.createElement("p");
    var gameMediumDisplay = "";
    if (myGame.isDigitalOnly) {
        gameMediumDisplay = "This is a digital only game.";
    }
    else {
        gameMediumDisplay = "You can buy a physical copy.";
    }
    gameInfo.innerText = myGame.title + " has a rating of " +
        myGame.rating + ". It costs " + myGame.price +
        ". It is " + gameMediumDisplay + " digital only";
    gameInfo.innerText = "".concat(myGame.title, " has a rating of ").concat(myGame.rating, ". ") +
        "It costs $".concat(myGame.price.toFixed(2), ". ").concat(gameMediumDisplay);
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
