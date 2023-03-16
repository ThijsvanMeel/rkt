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



