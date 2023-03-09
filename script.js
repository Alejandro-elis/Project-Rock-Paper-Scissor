//UNA PARTIDA
let playerSelection
let computerSelection

function playRound (playerSelection, computerSelection) {
    
    // OPCIONES
    const options = ["Rock", "Paper", "Scissors"]

    //MÉTODO DE SELECCIÓN DE LA COMPUTADORA
    let getComputerChoice = Math.floor(Math.random() * options.length);
    computerSelection = options[getComputerChoice];

    //MÉTODO DE SELECCIÓN DEL JUGADOR Y CASE SENSITIVE ARREGLADO
    playerSelection
    while (true) {
        playerSelection = prompt("Please select one: 'Rock', 'Paper' or 'Scissors'");
        let strLower = playerSelection.toLowerCase();
        let strUpFirst = strLower.charAt(0).toUpperCase();
        let playerSelectionSentenceCase = strUpFirst + strLower.slice(1);
        if (options.includes(playerSelectionSentenceCase)){
            playerSelection = playerSelectionSentenceCase;
        break;
        }   else {
        alert ("Sorry, invalid word, check your spelling and try again")
        }
    }

    //SELECCIÓN GANADAROR Y MENSAJE
    if (playerSelection == computerSelection){ 
    return `Nobody wins ${playerSelection} equal ${computerSelection}`;

    } else if ((playerSelection == "Rock" && computerSelection == "Scissors") ||  (playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper")){
    return `You win! ` + `${playerSelection} beats ${computerSelection}`;
    
    } else if ((playerSelection == "Rock" && computerSelection == "Paper") ||  (playerSelection == "Paper" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Rock")){
    return `You lose! ` + `${computerSelection} beats ${playerSelection}`;
    }
}

  //PUNTUACIONES
  let userPoints = 0
  let computerPoints = 0

  //VARIAS PARTIDAS:
function game(){
    for (let i = 0; i < 5; i++){
        const result = playRound();
        if (result.includes(`You win!`)) {
            userPoints++;
        } else if (result.includes(`You lose!`)) {
            computerPoints++;
            }
        console.log(result);
        console.log(userPoints);
        console.log(computerPoints);
    }

    //DETERMINAR GANADOR:
    if (userPoints > computerPoints){
        console.log(`You win the game! You beat the computer ${userPoints} times and the computer only beat you ${computerPoints}`)
    } else if (userPoints < computerPoints){
      console.log(`Sorry, You lose the game! The computer beat you ${computerPoints} times and you only win ${userPoints}`)
    } else {
        console.log(`Sorry, Nobody wins the game! You both win ${computerPoints} times`)
    }
} 


  // REPETIR LA PARTIDA

// VARIAS PARTIDAS - iniciando la lógica de la función
/*function game() {
    for (let i = 1; i < 5; i++){
        playRound(); 
    }
} */