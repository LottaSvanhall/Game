document.querySelector('#button').addEventListener('click', handleLogin);

const players = [ //array med objekt i
  {
    username: '',
    score: 0,
  }
];

JSON.parse(localStorage.getItem("players"))
console.log(players)


function handleLogin(event) { //tar in event (e)
  event.preventDefault(); //för att ta bort originalsettings för form och använda min egen vid submit av formulär
  //alert("Du har submittat formuläret!!")

  const username = document.getElementById('username').value;
  //const score = document.getElementById(score).value;

  const userExists = players.some(players =>  //går igenom users listan och kollar om det liknar något vi fått in innan
    players.username.toLowerCase() === username.toLowerCase()); //om match så blir boolean satt till true annars false 
  // console.log("Did user exist - ", userExists);

  if (!userExists) {

    alert('Användaren skapad!');
    players.push({username, score:0}); //HUR GÖRA MED SCORE!!!!!!!

  }
  else {           //om ingen match
    alert('Användarnamnet finns redan!');
  }

  //console.log("Username - ", username);


  localStorage.setItem("Players", JSON.stringify(players));

  //handleLogin()
}


/* const userExists = players.some(players =>  //går igenom users listan och kollar om det liknar något vi fått in innan
   players.username.toLowerCase() === username.toLowerCase()); //om match så blir boolean satt till true annars false
 // console.log("Did user exist - ", userExists);

 if (!userExists) {  //om match
   alert('Du har redan skapat användarnamnet!');

 } else {           //om ingen match
   alert('Användarnamnet finns redan!');
 }*/

// handleLogin()