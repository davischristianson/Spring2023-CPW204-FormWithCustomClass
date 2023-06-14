class VideoGame {
    title:string;
    price:number;
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
    if(isAllDataValid()) {
        let game = getVideoGame();
        displayGame(game);
    }
}

function isAllDataValid() {
    return true;
}

/**
 * Gets all game data from the form
 * and returns it in a VideoGame object
 * @returns 
 */
function getVideoGame():VideoGame {
    let game = new VideoGame();
    // TODO: Populate with data from the form
    let titleInput = <HTMLInputElement>document.getElementById("title")
    game.title = titleInput.value;

    let priceInput = <HTMLInputElement>document.getElementById("price");
    game.price = parseFloat(priceInput.value);

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

    // Add <h2> in the <div id="display">
    displayDiv.appendChild(gameHeading);
    // Add <p> game info
    displayDiv.appendChild(gameInfo);
}