const loginDivs = document.querySelectorAll('.loginDivs');

loginDivs.forEach(loginDiv => {
  loginDiv.addEventListener('click', function(event) {
    event.preventDefault();
    loginDivs.forEach(loginDiv => {
      loginDiv.classList.remove('active');
    });
    this.classList.add('active');
  });
});
const joinUsBtn = document.getElementById('join-us-btn');

joinUsBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch('https://roc.tngapps.com/TDWEB345/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password
    })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch((error) => {
    console.log("Failed to load products:", error);
  });
});


