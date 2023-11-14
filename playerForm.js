const players = [ //array med objekt i
  {
    username: '',
    score: 0,
  }
];


document.querySelector('#button').addEventListener('click', handleLogin);
//id för form, lyssnare av formen submit, triggar funktion nedan
JSON.parse(localStorage.getItem("players"))
console.log(players)

function handleLogin(event) { //tar in event (e)
  event.preventDefault(); //för att ta bort originalsettings för form och använda min egen vid submit av formulär
  //alert("Du har submittat formuläret!!")

  const username = document.getElementById('username').value;
  console.log("Username - ", username);

  players.push(username);
  

  localStorage.setItem("Players", JSON.stringify(players));

  const userExists = players.some(players =>  //går igenom users listan och kollar om det liknar något vi fått in innan
    players.username === username); //om match så blir boolean satt till true annars false 
  console.log("Did user exist - ", userExists);

/*

  if (userExists) {  //om match
  window.location.href = './player.html';
    alert('Du har skapat användarnamnet!');
  
  } else {           //om ingen match
  alert('Användarnamnet finns redan!');
  }
*/
 

}