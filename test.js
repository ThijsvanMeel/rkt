fetch("https://roc.tngapps.com/TDWEB345/products")
  .then((response) => response.json())
  .then((products) => {
    const productList = document.getElementById("product-list");

    products.forEach((product) => {
      if (product.Category === 1) {
        const productDiv = document.createElement("div");
        productDiv.className = "item";

        const productImg = document.createElement("img");
        productImg.src = product.Image;
        productImg.style.height = "100%";
        productImg.style.width = "100%";
        productDiv.appendChild(productImg);

        const productBrand = document.createElement("h5");
        productBrand.textContent = product.Brand;
        product;
        productDiv.appendChild(productBrand);

        const productName = document.createElement("h5");
        productName.textContent = product.Name;
        productName.className = "h5-size";
        productDiv.appendChild(productName);

        const productPrice = document.createElement("p");

        productPrice.textContent = "€" + product.Price;
        productDiv.appendChild(productPrice);

        productList.appendChild(productDiv);
        
      }
    });
  })
  .catch((error) => {
    console.log("Failed to load products:", error);
  });
  // 
//   <div id="login">
//             <div class="loginDivs-container">
//            <a  class="loginDivs"><p class="login-p">Sign Up</p></a>
//            <a  class="loginDivs"><p class="login-p">Register</p></a>
//            </div>
//            <div class="login-form">
//             <img height="125px" width="250px" src="/images/zas.png" alt=""> 
//             <h4 class="h4">Sign in</h4>
//             <p class="welcome-p">Welcome back.</p>
//             <p class="welcome-p">Login below to access your account</p>
         
//            </div>
//         </div>
