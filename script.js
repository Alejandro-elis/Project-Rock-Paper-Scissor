// OPCIONES
const options = ["Rock", "Paper", "Scissors"]

/* PARA CONVERTIR LA PRIMERA EN MAYÚSCULA
const pruebas = "GRanDE"
console.log(pruebas)

    const pruebaLower = pruebas.toLowerCase();
    console.log(pruebaLower)
    const pruebaUpperFirst = pruebaLower.charAt(0).toUpperCase();
    console.log(pruebaUpperFirst)
    const pruebaJoin = pruebaUpperFirst + pruebaLower.slice(1)
    console.log(pruebaJoin)

    //PRUEBA CON LO QUE SE IBA A UTILIZAR
    const playerSelection = prompt("Please select one: 'Rock', 'Paper' or 'Scissors'");
    const strLower = playerSelection.toLowerCase();
    const strUpFirst = strLower.charAt(0).toUpperCase();
    const strJoin = strUpFirst + strLower.slice(1);   
    
*/

//MÉTODO DE SELECCIÓN DE LA COMPUTADORA
let getComputerChoice = Math.floor(Math.random() * options.length);
const computerSelection = options [getComputerChoice];


//MÉTODO DE SELECCIÓN DEL JUGADOR Y CASE SENSITIVE ARREGLADO
let playerSelection
let playerSelectionSentenceCase
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

//UNA PARTIDA
function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection){ 
    return `Nobody wins ${playerSelection} equal ${computerSelection}`;

    } else if ((playerSelection == "Rock" && computerSelection == "Scissors") ||  (playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper")){
    return `You win! ${playerSelection} beats ${computerSelection}`;
    
    } else if ((playerSelection == "Rock" && computerSelection == "Paper") ||  (playerSelection == "Paper" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Rock")){
    return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}
console.log(playRound(playerSelection, computerSelection))

// VARIAS PARTIDAS - iniciando la lógica de la función
/*function game() {
    for (let i = 1; i < 5; i++){
        playRound(); 
    }
} */