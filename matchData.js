/* Delegerad eventhantering, å andra sidan, utnyttjar bubbling - fasen av events för 
att lyssna på händelser på flera element.Istället för att binda en eventlyssnare 
till varje specifikt element, binder vi en lyssnare till en förälder och låter 
händelserna bubbla upp.*/

const scoreBoard = document.querySelector('#scoreBoard')

function results() {

  const games = JSON.parse(localStorage.getItem("games"))
  // Skapa table element
  const table = document.createElement("table")
  const thead = document.createElement("thead")
  const tbody = document.createElement("tbody")
  const trHead = document.createElement("tr")

  const thWinner = document.createElement("th")
  const thLoser = document.createElement("th")
  const thRounds = document.createElement("th")
 // const thScores = document.createElement("th")

  // Stoppa in text i table head columns

  thWinner.innerText = "Vinnare"
  thLoser.innerText = "Förlorare"
  thRounds.innerText = "Rundor"
 // thScores.innerText = "Poäng"

  // Bygger ihop min table
  trHead.appendChild(thWinner)
  trHead.appendChild(thLoser)
  trHead.appendChild(thRounds)
 // trHead.appendChild(thScores)
  thead.appendChild(trHead)
  table.appendChild(thead)
  table.appendChild(tbody)

  scoreBoard.appendChild(table)


  for (let game of games) {
    // Skapa alla table element för varje spelar rad 
    const playerRow = document.createElement("tr")
    const winner = document.createElement("td")
    const loser = document.createElement("td")
    const rounds = document.createElement("td")
   // const playerScores = document.createElement("td")

    // lägger till text i varje spelar rads kolumn 
      winner.innerText = game.winner
      loser.innerText = game.loser
      rounds.innerText = game.rounds
      //playerScores.innerText = 

    /* // Lägger till ett id i varje kolumn. 
       playerScore.id = index
   
     // Lägger till en class för varje kolumn
      playerScore.classList.add("playerScore");*/

    // Stoppar in kolumnerna i raden
    playerRow.appendChild(winner);
    playerRow.appendChild(loser);
    playerRow.appendChild(rounds);
    //playerRow.appendChild(playerScores);

    // Stoppar in raden i tbody
    tbody.appendChild(playerRow);
  }

  // Lägger till en eventlistener på tbody
 /* tbody.addEventListener("click", function (event) {
    const target = event.target;
    const playerIndex = target.getAttribute("id")

    // Uppdaterar text i score-kolumnen
    //document.getElementsByClassName("playerScore")[playerIndex].innerText = users[playerIndex].score
  )*/
}

results()