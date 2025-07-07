const idaiscr = document.getElementById("aiscr")
const idplayerscr = document.getElementById("playerscr")
let playerchoice
let playerscr = 0
let aiscr = 0
let aichoice
let ans
let choices = {
    rock : "scissors",
    paper : "rock",
    scissors : "paper"
}
function startgame(){
    aichoice = random(choices)

    if (playerchoice === aichoice) {
       ans = "draw" 
    } else if (choices[playerchoice] === aichoice){
        ans = "you win"
        playerscr++
    } else {
        ans = "you lose"
        aiscr++
    }
    idaiscr.textContent = `score: ${aiscr}`
    idplayerscr.textContent = `score: ${playerscr}`
}
function rockbtn(){
    playerchoice = "rock"
    startgame()
}
function paperbtn(){
    playerchoice = "paper"
    startgame()
}
function scisbtn(){
    playerchoice = "scissors"
    startgame()
}
function random(obj){
   return Object.keys(obj)[Math.floor(Math.random()*3)]
}