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
    removeErrors();
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function isAllDataValid() {
    var titleInput = document.getElementById("title");
    var titleString = titleInput.value;
    var titleError = document.getElementById("title-error");
    var priceInput = document.getElementById("price");
    var priceNumber = parseFloat(priceInput.value);
    var priceError = document.getElementById("price-error");
    var descInput = document.getElementById("description");
    var descString = descInput.value;
    var descError = document.getElementById("description-error");
    var ratingInput = document.getElementById("rating");
    var ratingString = ratingInput.value;
    var ratingError = document.getElementById("rating-error");
    var dataValid = true;
    if (titleString.trim() == "") {
        titleError.innerText = "Enter a valid game title";
        dataValid = false;
    }
    if (isNaN(priceNumber)) {
        priceError.innerText = "Enter a valid numeric price";
        dataValid = false;
    }
    if (descString.trim() == "") {
        descError.innerText = "Enter a valid description of the game";
        dataValid = false;
    }
    if (ratingString == "Please choose a rating") {
        ratingError.innerText = "Pick a rating for the game";
        dataValid = false;
    }
    return dataValid;
}
function removeErrors() {
    var titleError = document.getElementById("title-error");
    var priceError = document.getElementById("price-error");
    var descriptionError = document.getElementById("description-error");
    var ratingError = document.getElementById("rating-error");
    titleError.innerText = "*";
    priceError.innerText = "*";
    descriptionError.innerText = "*";
    ratingError.innerText = "*";
}
function getVideoGame() {
    var game = new VideoGame();
    var titleInput = document.getElementById("title");
    game.title = titleInput.value;
    var priceInput = document.getElementById("price");
    game.price = parseFloat(priceInput.value);
    var descriptionInput = document.getElementById("description");
    game.description = descriptionInput.value;
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
    var gameDesc = document.createElement("h3");
    gameDesc.innerText = myGame.description;
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameDesc);
    displayDiv.appendChild(gameInfo);
}
