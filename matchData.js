const scoreBoard = document.querySelector('#scoreBoard')
const leaderBoard = document.querySelector('#leaderBoard')

function results() {

  const games = JSON.parse(localStorage.getItem("games"))
  const table = document.createElement("table")
  const thead = document.createElement("thead")
  const tbody = document.createElement("tbody")
  const trHead = document.createElement("tr")

  const thWinner = document.createElement("th")
  const thLoser = document.createElement("th")
  const thRounds = document.createElement("th")

  thWinner.innerText = "Vinnare"
  thLoser.innerText = "Förlorare"
  thRounds.innerText = "Rundor"

  trHead.appendChild(thWinner)
  trHead.appendChild(thLoser)
  trHead.appendChild(thRounds)
  thead.appendChild(trHead)
  table.appendChild(thead)
  table.appendChild(tbody)

  scoreBoard.appendChild(table)


  for (let game of games) {
    const playerRow = document.createElement("tr")
    const winner = document.createElement("td")
    const loser = document.createElement("td")
    const rounds = document.createElement("td")
   
      winner.innerText = game.winner
      loser.innerText = game.loser
      rounds.innerText = game.rounds
   
    playerRow.appendChild(winner);
    playerRow.appendChild(loser);
    playerRow.appendChild(rounds);

    tbody.appendChild(playerRow);
  }
   
}

results()

function topLeader() {
  const players = JSON.parse(localStorage.getItem("players"))
  const table = document.createElement('table')
  const thead = document.createElement('thead')
  const tbody = document.createElement('tbody')
  const tr = document.createElement('tr')
  const thName = document.createElement('th')
  const thScore = document.createElement('th')

  table.appendChild(thead)
  table.appendChild(tbody)
  leaderBoard.appendChild(table)
  tr.appendChild(thName)
  tr.appendChild(thScore)
  tbody.appendChild(tr)

  thName.innerText = "Spelare i topp"
  thScore.innerText = "Poäng"

 
  for (let player of players) {
    const playerRow = document.createElement('tr')
    const playerName = document.createElement('td')
    const playerScore = document.createElement('td')
    playerName.innerText = player.Name
    playerScore.innerText = player.Score


    playerRow.appendChild(playerName)
    playerRow.appendChild(playerScore)
    tbody.appendChild(playerRow)
  }
}
topLeader()