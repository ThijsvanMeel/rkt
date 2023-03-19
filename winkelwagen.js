const productId = localStorage.getItem("productId");

// fetch product by id
fetch(`https://roc.tngapps.com/TDWEB345/products/${productId}`)
  .then((response) => response.json())
  .then((product) => {
    // set product image on detail page
    const imageDisplay = document.getElementById("image-display");
    const productImg = document.createElement("img");
    productImg.src = product.Image;
    productImg.style.height = "100%";
    productImg.style.width = "100%";
    imageDisplay.appendChild(productImg);

    // set product image on detail page
    const h5Display = document.getElementById("second-div");
    const productH5 = document.createElement("h5");
    productH5.className = "brand";
    productH5.textContent = product.Brand;

    h5Display.appendChild(productH5);

     // set product image on detail page
     const h4Display = document.getElementById("second-div");
     const productH4 = document.createElement("h4");
     productH4.className = "title";
     productH4.textContent = product.Name;
 
     h4Display.appendChild(productH4);

     // set product image on detail page
     const h3Display = document.getElementById("second-div");
     const productH3 = document.createElement("h3");
     productH3.className = "price";
     productH3.textContent = "€" + product.Price;
 
     h3Display.appendChild(productH3);
      })
  .catch((error) => {
    console.log(`Failed to load product ${productId}:`, error);
  });
  