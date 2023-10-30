//Setting the choices to numbers
var rock = 2;
var paper = 3;
var scissors = 1;

console.log("Commence the games!");


function rockShoot() {
console.log("Your choice: " + rock);

var opponentChoice = Math.ceil(Math.random()*3);
console.log("Opponents choice: " + opponentChoice);

//if the choice is same as the opponent then its a tie
if(rock == opponentChoice) {
    document.getElementById("gameres").innerHTML = "Cat game!"
    console.log("Cat game!");
//if the opponent is scissors(1) then its a win
} else if (rock > opponentChoice) {
    document.getElementById("gameres").innerHTML = "You win!"
    console.log("You win!");
//otherwise its a lie
} else {
    document.getElementById("gameres").innerHTML = "You lose!"
    console.log("You lose!");
}

}


function paperShoot() {
console.log("Your choice: " + paper);
    
var opponentChoice = Math.ceil(Math.random()*3);
console.log("Opponents choice: " + opponentChoice);

//if the choice is same as the opponent then its a tie
if(paper == opponentChoice) {
    document.getElementById("gameres").innerHTML = "Cat game!"
    console.log("Cat game!");
//if the opponent is paper(3) then its a win
} else if ((paper - 1) == opponentChoice) {
    document.getElementById("gameres").innerHTML = "You win!"
    console.log("You win!");
//otherwise its a lie
} else {
    document.getElementById("gameres").innerHTML = "You lose!"
    console.log("You lose!");
}
    
}


function scissorsShoot() {
console.log("Your choice: " + scissors);
        
var opponentChoice = Math.ceil(Math.random()*3);
console.log("Opponents choice: " + opponentChoice);
        
//if the choice is same as the opponent then its a tie
if(scissors == opponentChoice) {
document.getElementById("gameres").innerHTML = "Cat game!"
console.log("Cat game!");
//if the opponent is paper(3) then its a win
} else if ((scissors + 2) == opponentChoice) {
document.getElementById("gameres").innerHTML = "You win!"
console.log("You win!");
//otherwise its a lie
} else {
document.getElementById("gameres").innerHTML = "You lose!"
console.log("You lose!");
}
        
}

