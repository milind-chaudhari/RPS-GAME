let limit = parseInt(prompt("Enter the limit of the game"), 10); // Parse limit to an integer
if (isNaN(limit) || limit <= 0) {
    limit = 5; // Set a default limit if the input is invalid
    alert("Invalid input. Default limit of 5 rounds is set.");
}

var userScore = 0;
var compScore = 0;
var roundsPlayed = 0;

const choices = document.querySelectorAll(".choices");
const msg = document.getElementById("msg");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");

// Main logic of the game
const playGame = (userchoice) => {
    if (roundsPlayed >= limit) {
        return; // Stop the game if the limit is reached
    }

    console.log(`User choice is =${userchoice}`);
    const compchoice = getCompChoice();
    console.log(`Comp choice is =${compchoice}`);

    // Game logic
    if (userchoice === compchoice) {
        gameDraw();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissor" ? false : true;
        } else if (userchoice === "scissor") {
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin, userchoice, compchoice);
    }

    // Increment rounds and check for game end
    roundsPlayed++;
    if (roundsPlayed >= limit) {
        endGame();
    }
};

// Get computer choice
const getCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
};

// User choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});

// Show winner
const showWinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        console.log("You Win");
        msg.innerText = `You Win, ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userscore.innerText = userScore;
    } else {
        console.log("You Lose");
        msg.innerText = `You Lose, ${compchoice} beats ${userchoice}`;
        compScore++;
        compscore.innerText = compScore;
        msg.style.backgroundColor = "red";
    }
};

// Game draw function
const gameDraw = () => {
    console.log("Game was a draw");
    msg.innerText = "Game Was a Draw";
    msg.style.backgroundColor = "blueviolet";
};

// End game function
const endGame = () => {
    let finalMsg = `Game Over! Final Scores - You: ${userScore}, Computer: ${compScore}. `;
    if (userScore > compScore) {
        finalMsg += "You are the overall winner!";
    } else if (userScore < compScore) {
        finalMsg += "Computer is the overall winner!";
    } else {
        finalMsg += "It's a draw!";
    }
    msg.innerText = finalMsg;
    msg.style.backgroundColor = "gold";
    // Disable further clicks
    choices.forEach((choice) => {
        choice.style.pointerEvents = "none";
    });
};
