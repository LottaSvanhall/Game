const users = [
  {
    username:"",
    score:0
  }
];

document.querySelector('#loginForm').addEventListener('submit', handleLogin);

function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  console.log("Username - ", username);
 
  const userExists = users.some(user =>
    user.username === username);
  console.log("Did user exist - ", userExists);


  // if (userExists) {
  //   // window.location.href = './homepage.html';
  //   alert('Du har loggat in!');
  // } else {
  //   alert('Fel användarnamn eller lösenord!');
  // }
}