let move= prompt("Choose your move")


function playerChoice(str){
    str = str.toLowerCase()

    if(str ="rock"){
        return 1
    }
    else if(str="paper"){
        return 2
    }
    else if(str="scissors"){
        return 3
    }
}
let playerMove =playerChoice(move)
function getComputerChoice(){
    return Math.floor(Math.random()*(3-1+1)+1)
}

let CompChoice= getComputerChoice()


function playRound(pMove,cMove){
    if(pMove ===1 && cMove=== 1){
        document.write("Draw")
        return
    }
    else if(pMove === 1 && cMove ==2){
        document.write("Computer wins")
        return
    }
    else if(pMove === 1 && cMove == 3){
        document.write("Player wins")
        return
    }
    else if(pMove === 2 && cMove ===1){
        document.write("Player wins")
        return
    }
    else if(pMove ===2 && cMove ===2){
        document.write("Draw")
        return
    }
    else if(pMove === 2 && cMove ===3){
        document.write("Computer wins")
        return
    }
    else if(pMove ===3&& cMove ===1){
        document.write("Computer wins")
        return
    }
    else if(pMove=== 3 && cMove ===2){
        document.write("Player wins")
        return
    }
    else if(pMove===3 && cMove===3){
        document.write("Draw")
        return
    }
}

playRound(playerMove,CompChoice)


