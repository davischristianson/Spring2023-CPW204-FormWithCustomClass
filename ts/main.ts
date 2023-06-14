class VideoGame {
    title:string;
    price:number;
    description:string;
    rating:string;
    isDigitalOnly:boolean;
}

// test code
// let myGame = new VideoGame();
// myGame.title = "Bario";
// myGame.rating = "R";
// myGame.isDigitalOnly = false;

window.onload = function() {
    let addBtn = <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
}

function addVideoGame() {
    removeErrors();
    if(isAllDataValid()) {
        let game = getVideoGame();
        displayGame(game);
    }
}

function isAllDataValid() {
    let titleInput = <HTMLInputElement>document.getElementById("title");
    let titleString:string = titleInput.value;
    let titleError = document.getElementById("title-error");

    let priceInput = <HTMLInputElement>document.getElementById("price");
    let priceNumber:number = parseFloat(priceInput.value);
    let priceError = document.getElementById("price-error");
    
    let descInput = <HTMLInputElement>document.getElementById("description");
    let descString:string = descInput.value;
    let descError = document.getElementById("description-error");

    let ratingInput = <HTMLSelectElement>document.getElementById("rating"); 
    let ratingString:string = ratingInput.value;
    let ratingError = document.getElementById("rating-error");

    let dataValid = true;

    if(titleString.trim() == "") {
        titleError.innerText = "Enter a valid game title";
        dataValid = false;
    }

    if(isNaN(priceNumber)) {
        priceError.innerText = "Enter a valid numeric price";
        dataValid = false;
    }

    if(descString.trim() == "") {
        descError.innerText = "Enter a valid description of the game";
        dataValid = false;
    }

    if(ratingString == "Please choose a rating") {
        ratingError.innerText = "Pick a rating for the game";
        dataValid = false;
    }
    return dataValid;
}

function removeErrors() {

    let titleError = document.getElementById("title-error");
    let priceError = document.getElementById("price-error");
    let descriptionError = document.getElementById("description-error");
    let ratingError = document.getElementById("rating-error");

    titleError.innerText = "*";
    priceError.innerText = "*";
    descriptionError.innerText = "*";
    ratingError.innerText = "*";
}

/**
 * Gets all game data from the form
 * and returns it in a VideoGame object
 * @returns 
 */
function getVideoGame():VideoGame {
    let game = new VideoGame();
    // TODO: Populate with data from the form
    let titleInput = <HTMLInputElement>document.getElementById("title");
    game.title = titleInput.value;

    let priceInput = <HTMLInputElement>document.getElementById("price");
    game.price = parseFloat(priceInput.value);

    let descriptionInput = <HTMLInputElement>document.getElementById("description");
    game.description = descriptionInput.value;

    let ratingInput = <HTMLSelectElement>document.getElementById("rating"); 
    game.rating = ratingInput.value;

    let digitalOnly = <HTMLInputElement>document.getElementById("online");
    game.isDigitalOnly = digitalOnly.checked;
    /*
    if(digitalOnly.checked) {
        game.isDigitalOnly = true;
    }
    else {
        game.isDigitalOnly = false;
    }
    */

    // TODO: Return game
    return game;
}

function displayGame(myGame:VideoGame):void {
    let displayDiv = document.getElementById("display");

    // Create <h2> with game title
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;

    // Create paragraph with game details
    let gameInfo = document.createElement("p");
    let gameMediumDisplay = "";
    if(myGame.isDigitalOnly) {
        gameMediumDisplay = "This is a digital only game.";
    }
    else {
        gameMediumDisplay = "You can buy a physical copy."
    }
    gameInfo.innerText = myGame.title + " has a rating of " +
                    myGame.rating + ". It costs " + myGame.price +
                    ". It is " + gameMediumDisplay + " digital only";

    gameInfo.innerText = `${myGame.title} has a rating of ${myGame.rating}. ` + 
                        `It costs $${myGame.price.toFixed(2)}. ${gameMediumDisplay}`

                        
    // Create <h3> that gives a game description
    let gameDesc = document.createElement("h3");
    gameDesc.innerText = myGame.description;

    // Add <h2> in the <div id="display">
    displayDiv.appendChild(gameHeading);
    // Add <h3> game description
    displayDiv.appendChild(gameDesc);
    // Add <p> game info
    displayDiv.appendChild(gameInfo);
}