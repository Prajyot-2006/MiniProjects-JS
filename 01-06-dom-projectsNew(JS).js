let score = JSON.parse(localStorage.getItem('score')) || {
        win: 0,
        losses: 0,
        Ties: 0
    };

updateScoreElement();



// console.log(localStorage.getItem('score'));  converted it into JSON obj ie in string
// console.log(JSON.parse(localStorage.getItem('score')));  converted it into JS obj (this is updated which has previous score) from JSON obj

function playGame(playerMove) {
const computerMove = pickComputerMove();

let result = '';

if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
    result = 'You lose.';
    } else if (computerMove === 'paper') {
    result = 'You win.';
    } else if (computerMove === 'scissors') {
    result = 'Tie.';
    }

} else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
    result = 'You win.';
    } else if (computerMove === 'paper') {
    result = 'Tie.';
    } else if (computerMove === 'scissors') {
    result = 'You lose.';
    }
    
} else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
    result = 'Tie.';
    } else if (computerMove === 'paper') {
    result = 'You lose.';
    } else if (computerMove === 'scissors') {
    result = 'You win.';
    }
}

if(result === 'You win.'){
    score.win = score.win + 1;
}
else if(result === 'You lose.'){
    score.losses = score.losses + 1;
}
else if(result === 'Tie.'){
    score.Ties = score.Ties + 1;
}




localStorage.setItem('score',JSON.stringify(score));  // converts score (JS obj) into JSON obj  and also stores previous score(in string like "") which is visible evrn after refreshing
document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-move').innerHTML = `You
<img src="${playerMove}-emoji.png" class="sameimg" >
<img src="${computerMove}-emoji.png" class="sameimg" >
Computer `;

updateScoreElement();


}


function pickComputerMove() {
const randomNumber = Math.random();

let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
}

return computerMove;
}

function updateScoreElement(){
document.querySelector('.js-score').innerHTML = ` Wins: ${score.win}, Loses: ${score.losses}, Tie: ${score.Ties} `
}

