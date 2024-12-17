const choices = ["rock","paper","scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    return(computerChoice);
}

function getHumanChoice(){
    let validInput = false;
    while (validInput == false){
        const choice = prompt("Please select rock, paper or scissors: ");
        if(choice == null){
            continue
        }
        const choiceLowerCase = choice.toLowerCase();
        if(choices.includes(choiceLowerCase)){
            validInput = true;
            return(choiceLowerCase);
        }
    }
}

    function playRound(choiceLowerCase,computerChoice){
        if (choiceLowerCase == computerChoice){
            console.log("It is a draw")
        }
        else if(choiceLowerCase == "rock" && computerChoice == "scissors" ||
            choiceLowerCase == "paper" && computerChoice == "rock"||
            choiceLowerCase == "scissors" && computerChoice == "paper")
            
            {humanScore++;
            console.log("You Win! " + choiceLowerCase + " beats " + computerChoice);
            console.log(humanScore + " : " + computerScore);}

        else{computerScore++;
            console.log("You Lose! " + computerChoice + " beats " + choiceLowerCase);
            console.log(humanScore + " : " + computerScore);}
    }
    
    function game(){
        for(let i = 0; i < 5; i++){
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            console.log(playRound(humanSelection,computerSelection));
        }
    }
game()