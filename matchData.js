const scoreBoard = document.querySelector('#scoreBoard')

function results() {

  const games = JSON.parse(localStorage.getItem("games"))
  const table = document.createElement("table")
  const thead = document.createElement("thead")
  const tbody = document.createElement("tbody")
  const trHead = document.createElement("tr")

  const thWinner = document.createElement("th")
  const thLoser = document.createElement("th")
  const thRounds = document.createElement("th")
 //const thScores = document.createElement("th")

  
  thWinner.innerText = "Vinnare"
  thLoser.innerText = "Förlorare"
  thRounds.innerText = "Rundor"
 //thScores.innerText = "Poäng"

  
  trHead.appendChild(thWinner)
  trHead.appendChild(thLoser)
  trHead.appendChild(thRounds)
  //trHead.appendChild(thScores)
  thead.appendChild(trHead)
  table.appendChild(thead)
  table.appendChild(tbody)

  scoreBoard.appendChild(table)


  for (let game of games) {
    const playerRow = document.createElement("tr")
    const winner = document.createElement("td")
    const loser = document.createElement("td")
    const rounds = document.createElement("td")
   //const playerScores = document.createElement("td")

      winner.innerText = game.winner
      loser.innerText = game.loser
      rounds.innerText = game.rounds
      //playerScores.innerText =

   
    playerRow.appendChild(winner);
    playerRow.appendChild(loser);
    playerRow.appendChild(rounds);
    //playerRow.appendChild(playerScores);

    tbody.appendChild(playerRow);
  }

   /*
    // Uppdaterar text i score-kolumnen
    //document.getElementsByClassName("playerScore")[playerIndex].innerText = users[playerIndex].score
  */
}

results()