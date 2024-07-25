// Returns random number from 0-3
function randomChoice() {
    return Math.floor((Math.random() * 3) + 1) 
}

//Gets random number from randomChoice then returns either 'Rock', 'Paper', or 'Scissors' from number
function getComputerChoice() {
    const ranNum = randomChoice();
    let compChoice;
    switch(parseInt(ranNum)) {
        case 1:
            compChoice = "Rock"
            break;
        case 2:
            compChoice = "Paper"
            break;
        case 3: compChoice = "Scissors"
            break;          
    } 
    return compChoice;
}





//Takes two "players" and sees if the first player won, if yes then returns True. 
// Otherwise, returns false
function getWinner(p1,p2) {
    if (p1 === "Rock" && p2 === "Scissors") {
        return true;
    }
    else if (p1 === "Paper" && p2 === "Rock") {
        return true;
    }
    else if (p1 === "Scissors" && p2 === "Paper") {
        return true;
    }
    else {
        return false;
    }
}

//Determins if either player won or cpu won with getWinner(), or else its a tie
function playRound(humanChoice,humanScore,computerScore) {
    const outputDiv = document.querySelector("#results");
    const computerChoice = getComputerChoice();
    const playerWin = getWinner(humanChoice,computerChoice);
    const compWin = getWinner(computerChoice,humanChoice);
    console.log(`${humanChoice} vs ${computerChoice}`);
    if (playerWin===true) {
        outputDiv.textContent = `Your ${humanChoice} Beats Cpu's ${computerChoice}`;
        humanScore+=1;
    }
    else if (compWin===true) {
        outputDiv.textContent = `Cpu's ${computerChoice} Beats Your ${humanChoice}`;
        computerScore +=1;
    }
    else {
        outputDiv.textContent = `You tied!`;   
    };
    return outputGameResult(humanScore,computerScore)
    
    
};

// Outputs the final result of the game after 5 rounds to determine of player won, computer won, or tied
function outputGameResult(humanScore, computerScore) {
    const scoreDiv = document.querySelector("#score");
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            scoreDiv.textContent = `You Won The Game ${humanScore} To ${computerScore}!`
        }
        else if (humanScore < computerScore) {
             scoreDiv.textContent = `You Lost The Game ${humanScore} To ${computerScore}`
        }; 
        return [0,0]
    }
    else {
        scoreDiv.textContent = `Game Score:\nPlayer: ${humanScore}\nComputer: ${computerScore}`
        return [humanScore,computerScore]
    }
}




//Initializes game
let humanScore = 0;
let computerScore = 0;



const btnCont = document.querySelector("#btn-container");
console.log(btnCont);
btnCont.addEventListener("click" ,(event) => {
    let target=event.target;
    let move;
    switch(target.id) {
        case "Rock":
            move = "Rock";
            break;
        case "Paper":
            move = "Paper";
            break;
        case "Scissors":
            move = "Scissors";
            break;
        default:
            console.log("unknown press");
    }
    let scores = playRound(move,humanScore,computerScore);
    humanScore = scores[0]
    computerScore = scores[1]
});
