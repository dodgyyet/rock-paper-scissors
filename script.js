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
            compChoice = "ROCK"
            break;
        case 2:
            compChoice = "PAPER"
            break;
        case 3: compChoice = "SCISSORS"
            break;          
    } 
    return compChoice;
}




//Continually Asks for input 'Rock', 'Paper', or 'Scissors' and returns one of the three
function getHumanChoice() {
    let tries = 0;
    while(true) {
        let choice = prompt("Rock, Paper, or Scissors?").toUpperCase();
        if(choice === "ROCK" 
        || choice === "PAPER" 
        || choice === "SCISSORS"
        ){
            return choice
        }
        else {
            alert("INVALID ANSWER")
            ++tries
        }
        if(tries > 2) {
            alert("I'll Pick For You...")
            return "PAPER";
        }
    }   
}

//Takes two "players" and sees if the first player won, if yes then returns True. 
// Otherwise, returns false
function getWinner(p1,p2) {
    if (p1 === "ROCK" && p2 === "SCISSORS") {
        return true;
    }
    else if (p1 === "PAPER" && p2 === "ROCK") {
        return true;
    }
    else if (p1 === "SCISSORS" && p2 === "PAPER") {
        return true;
    }
    else {
        return false;
    }
}

//Determins if either player won or cpu won with getWinner(), or else its a tie
function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const playerWin = getWinner(humanChoice,computerChoice);
    const compWin = getWinner(computerChoice,humanChoice);
    console.log(`${humanChoice} vs ${computerChoice}`)
    if (playerWin===true) {
        console.log(`YOUR ${humanChoice} BEATS CPU'S ${computerChoice}`)
        console.log("YOU WON!")
        return('won')
    }
    else if (compWin===true) {
        console.log(`CPU'S ${computerChoice} BEATS YOUR ${humanChoice}`)
        console.log("YOU LOST!")
        return("lost")
    }
    else {
        console.log("YOU TIED")
        return("tied")
    }

}

// Outputs the final result of the game after 5 rounds to determine of player won, computer won, or tied
function outputGameResult(humanScore, computerScore) {
    console.log(`GAME SCORE:\nPLAYER: ${humanScore}\nCOMPUTER: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("YOU WON THE GAME")
    }
    else if (humanScore < computerScore) {
        console.log("YOU LOST THE GAME")
    }
    else {
        console.log("THE GAME IS TIED")
    }
}

// Runs 5 rounds and adds the score of each round to determine the final winner
//function playGame(humanScore, computerScore) {
    //for (let round = 0; round<5; round++) {
        //let result = playRound();
        //if (result === "won") {
            //humanScore+=1
        //}
        //else if (result === "lost") {
            //computerScore +=1
        //}
    //}
    ////outputGameResult(humanScore, computerScore);
//}



//Initializes game
//let humanScore = 0, computerScore = 0;
//playGame(humanScore, computerScore)

result = playRound()

