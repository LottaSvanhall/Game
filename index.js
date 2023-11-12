const gameBoard = document.querySelector("#gameboard")
const infoDisplay = document.querySelector("#info")

const startCells = [
  "", "", "", "", "", "", "", "", ""
] //för att skapa nio celler

let go = 'circle'
infoDisplay.textContent = "Cirkel börjar!"

function createBoard() {
  startCells.forEach((_cell, index) => {
    const cellElement = document.createElement('div') //skapa en cell
    cellElement.classList.add('square')
    cellElement.id = index
    cellElement.addEventListener('click', addGo)
    gameBoard.append(cellElement) //lägger in varje cell på brädet

  })
}

createBoard()

function addGo(event) {
  if (isAllowedToPlace() && event.currentTarget.firstChild == null) {
    const goDisplay = document.createElement('div')
    goDisplay.classList.add(go)
    event.currentTarget.append(goDisplay) //placerar cirkel eller line i rutan vi klickat på
    go = go === 'circle' ? 'line' : 'circle' //bestämmer vilken som är sann och vilkens tur det är
    infoDisplay.textContent = "Det är nu " + go + "'s tur att lägga."
    
    checkScore() //kollar vinnande kombinationer vid varje drag

  }
  else if (!isAllowedToPlace() && event.currentTarget.firstChild?.classList.contains(go)) {
    infoDisplay.textContent = "Det är nu " + go + "'s tur att flytta."
    event.currentTarget.firstChild.remove()
  }
}
  //event.target.removeEventListener('click', addGo) //tar bort eventlistener och klick och den andres tur
  

function isAllowedToPlace() {
  let count = 1;
  const allSquares = document.querySelectorAll('.square')
  for (i = 0; i < allSquares.length; i++){
    if (allSquares[i].firstChild?.classList.contains(go)) {
      count += 1;
    }
  }
  return count<=3
}

function checkScore() {
  const allSquares = document.querySelectorAll('.square')
  console.log(allSquares)
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]

  winningCombos.forEach(array => { //för varje array av de nio ovan
   const circleWins = array.every(cell => //för varje cell i varje array
      allSquares[cell].firstChild?.classList.contains('circle')) //kollar av om cirkeln har en vinnande kombination

    if (circleWins) {
      infoDisplay.textContent = "Cirkel Vinner!"
      allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
      return
    }
  })

  winningCombos.forEach(array => { //för varje array av de nio ovan
    const lineWins = array.every(cell => //för varje cell i varje array
      allSquares[cell].firstChild?.classList.contains('line')) //kollar av om cirkeln har en vinnande kombination

    if (lineWins) {
      infoDisplay.textContent = "Streck Vinner!"
      allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
      return
    }
  })

   }
  
