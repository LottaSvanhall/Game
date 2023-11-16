document.querySelector('#button').addEventListener('click', handleLogin);

const tempPlayers = localStorage.getItem("players")
const players = tempPlayers ? JSON.parse(tempPlayers) : [];
//console.log(players)


function handleLogin() { //tar in event (e)
 //event.preventDefault(); //för att ta bort originalsettings för form och använda min egen vid submit av formulär
  //alert("Du har submittat formuläret!!")
 /* const player =  //array med objekt i
    {
      username: '',
      score: 0,
    }
*/

  const username = document.getElementById('username').value;
  //const score = document.getElementById(score).value;

  const userExists = players.some(players =>  //går igenom users listan och kollar om det liknar något vi fått in innan
    players.Name.toLowerCase() === username.toLowerCase()); //om match så blir boolean satt till true annars false 
  

  if (!userExists) {
    const player = 
    {
      Name: username,
      Score: 0,
    }
    alert('Användaren skapad!');
    players.push(player);
  }

  else {           
    alert('Användarnamnet finns redan!');
  }

  localStorage.setItem("players", JSON.stringify(players));

  
}
