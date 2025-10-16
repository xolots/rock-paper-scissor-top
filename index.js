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
    const whoVsWho = document.querySelector('#whovswho')
    let who = humanChoice + ' vs ' + computerChoice
    whoVsWho.insertAdjacentText('beforeend', who)
    if(humanChoice == computerChoice){
        return 'Result is Draw'
    }
    else if(humanChoice == 'rock' && computerChoice == 'scissor'){
        return 'Human WINN'
    }else if(humanChoice == 'rock' && computerChoice == 'paper'){
        return 'Human LOSE'
    }else if(humanChoice == 'paper' && computerChoice == 'rock'){
        return 'Human WINN'
    }else if(humanChoice == 'paper' && computerChoice == 'scissor'){
        return 'Human LOSE'
    }else if(humanChoice == 'scissor' && computerChoice == 'paper'){
        return 'Human WINN'
    }else if(humanChoice == 'scissor' && computerChoice == 'rock'){
        return 'Human LOSE'
    }
}

// playRound(getHumanChoice() , getComputerChoice());

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')
const result = document.querySelector('#result')
const whoVsWho = document.querySelector('#whovswho')

rock.addEventListener("click", () => {
    result.textContent = ""
    whoVsWho.textContent = ""
    result.insertAdjacentText('beforeend', playRound('rock', getComputerChoice()))
})

paper.addEventListener("click", () => {
    result.textContent = ""
    whoVsWho.textContent = ""
    result.insertAdjacentText('beforeend', playRound('paper', getComputerChoice()))
})

scissor.addEventListener("click", () => {
    result.textContent = ""
    whoVsWho.textContent = ""
    result.insertAdjacentText('beforeend', playRound('scissor', getComputerChoice()))
})