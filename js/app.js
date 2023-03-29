const joinUsBtn = document.getElementById("join-us-btn");

joinUsBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const name = document.getElementById("name-register").value;
  const email = document.getElementById("email-register").value;
  const password = document.getElementById("password-register").value;
  const userLevel = 1; 
  console.log(name, email, password, userLevel);

  const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // replace with your proxy URL
  const apiUrl = "https://roc.tngapps.com/TDWEB345/users";

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "Name": name,
      "EMail": email,
      "Password": password,
      "UserLevel": userLevel
    })
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.log("Failed to load products:", error);
    });
});
