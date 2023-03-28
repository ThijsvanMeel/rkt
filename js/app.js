const joinUsBtn = document.getElementById("join-us-btn");

joinUsBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // replace with your proxy URL
  const apiUrl = "https://roc.tngapps.com/TDWEB345/users";

  fetch(proxyUrl + apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.log("Failed to load products:", error);
    });
});
