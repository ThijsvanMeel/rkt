fetch("https://roc.tngapps.com/TDWEB345/products")
  .then((response) => response.json())
  .then((products) => {
    const productList = document.getElementById("product-list");
    let page = parseInt(localStorage.getItem("currentPage")) || 1;

    document.getElementById("left").addEventListener("click", function() {
      if (page > 1) {
        page--;
      } else {
        page = 5;
      }
      localStorage.setItem("currentPage", page);
      console.log("Page: " + page);
      updateProducts();
    });
  
    document.getElementById("right").addEventListener("click", function() {
      if (page < 5) {
        page++;
      } else {
        page = 1;
      }
      localStorage.setItem("currentPage", page);
      console.log("Page: " + page);
      updateProducts();
    });

    function updateProducts() {
      productList.innerHTML = "";
      products.forEach((product) => {
        if (product.Category === page) {
          const productDiv = document.createElement("div");
          productDiv.className = "item";
          productDiv.addEventListener("click", (event) => {
            productDiv.id = "product-" + product.id;
            localStorage.setItem("productId", product.id);
            window.location.href = "detailPage.html";
          });

          const productImg = document.createElement("img");
          productImg.src = product.Image;
          productImg.style.height = "100%";
          productImg.style.width = "100%";
          productDiv.appendChild(productImg);

          const productBrand = document.createElement("h5");
          productBrand.textContent = product.Brand;
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
    }

    updateProducts();
  })
  .catch((error) => {
    console.log("Failed to load products:", error);
  });
