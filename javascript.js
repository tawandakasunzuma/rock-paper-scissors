const choices = ["rock","paper","scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    return computerChoice;
}

function getHumanChoice(){
    const humanChoice = prompt("Select rock, paper or scissors: ").toLowerCase();
    return humanChoice;
}


    function playRound(humanChoice,computerChoice){
        if (humanChoice == computerChoice){
            console.log("It is a draw")
        }
        else if(humanChoice == "rock" && computerChoice == "scissors" ||
            humanChoice == "paper" && computerChoice == "rock"||
            humanChoice == "scissors" && computerChoice == "paper")
            
            {humanScore++;
            console.log("You Win! " + humanChoice + " beats " + computerChoice);
            console.log(humanScore + " : " + computerScore);}

        else if(computerChoice == "rock" && humanChoice == "scissors" ||
            computerChoice == "paper" && humanChoice == "rock"||
            computerChoice == "scissors" && humanChoice == "paper")
    
            {computerScore++;
            console.log("You Lose! " + computerChoice + " beats " + humanChoice);
            console.log(humanScore + " : " + computerScore);}

        else{prompt("Invalid entry. Goodbye.")}
    }
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    playRound(humanSelection,computerSelection);