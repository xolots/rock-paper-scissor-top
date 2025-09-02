function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0)  {
        return 'rock';
    }else if (randomNumber == 1) {
        return 'scissor';
    }else {
        return 'paper';
    }
}


function getHumanChoice(){
    let userInput = prompt('What is Your Input : ')
    return userInput
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    console.log(humanChoice + ' vs ' + computerChoice)
    if(humanChoice == computerChoice){
        return console.log('Result is Draw')
    }
    else if(humanChoice == 'rock' && computerChoice == 'scissor'){
        return console.log('Human WINN')
    }else if(humanChoice == 'rock' && computerChoice == 'paper'){
        return console.log('Human LOSE')
    }else if(humanChoice == 'paper' && computerChoice == 'rock'){
        return console.log('Human WINN')
    }else if(humanChoice == 'paper' && computerChoice == 'scissor'){
        return console.log('Human LOSE')
    }else if(humanChoice == 'scissor' && computerChoice == 'paper'){
        return console.log('Human WINN')
    }else if(humanChoice == 'scissor' && computerChoice == 'rock'){
        return console.log('Human LOSE')
    }
}

playRound(getHumanChoice() , getComputerChoice());