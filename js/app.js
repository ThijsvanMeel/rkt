
const joinUsBtn = document.getElementById("join-us-btn");
const signInForm = document.querySelector("#signin form");
const loggedUser = document.getElementById("logged-user");


joinUsBtn.addEventListener("click", (event) => {
  event.preventDefault();


  const name = document.getElementById("name-register").value;
  const email = document.getElementById("email-register").value;
  const adres = document.getElementById("adres-register").value;
  const password = document.getElementById("password-register").value;


  localStorage.setItem("name", name);


  signInForm.email.value = email;
  signInForm.password.value = password;
  signInForm.submit();
});

t
signInForm.addEventListener("submit", (event) => {
  event.preventDefault();


  const email = event.target.email.value;
  const password = event.target.password.value;


  if (localStorage.getItem("name") && email === "test@test.com" && password === "password") {
 
    loggedUser.textContent = `Logged in as: ${localStorage.getItem("name")}`;
  } else {
    alert("Invalid credentials. Please try again.");
  }
});
