document.querySelector('#button').addEventListener('click', handleLogin);

const tempPlayers = localStorage.getItem("players")
const players = tempPlayers ? JSON.parse(tempPlayers) : [];


function handleLogin() { 
  
  const username = document.getElementById('username').value;

  const userExists = players.some(players => 
    players.Name.toLowerCase() === username.toLowerCase());
  

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
