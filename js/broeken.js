fetch("https://roc.tngapps.com/TDWEB345/products")
  .then((response) => response.json())
  .then((products) => {
    const productList = document.getElementById("product-list");

    products.forEach((product) => {
      if (product.Category === 1) {
        const productDiv = document.createElement("div");
        productDiv.className = "item";
       
        productDiv.id = `product-${product.id}`;

        const productImg = document.createElement("img");
        productImg.src = product.Image;
        productImg.style.height = "100%";
        productImg.style.width = "100%";
        productDiv.appendChild(productImg);

        const productBrand = document.createElement("h5");
        productBrand.textContent = product.Brand;2
        productDiv.appendChild(productBrand);

        const productName = document.createElement("h5");
        productName.textContent = product.Name;
        productName.className = "h5-size";
        productDiv.appendChild(productName);

        const productPrice = document.createElement("p");
        productPrice.textContent = "€" + product.Price;
        productDiv.appendChild(productPrice);

        productList.appendChild(productDiv);

        
        productDiv.addEventListener("click", (event) => {
          localStorage.setItem("productId", product.id);
          window.location.href = "detailPage.html";
        });
      }
    });
  })
  .catch((error) => {
    console.log("Failed to load products:", error);
  });
