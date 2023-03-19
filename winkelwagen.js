const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("productId");

// retrieve existing cart from local storage, or create an empty array if none exists
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart(product) {
  // Retrieve existing cart from local storage, or create an empty array if none exists
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if the product already exists in the cart
  let existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    // If the product exists, update the quantity
    existingProduct.quantity++;
  } else {
    // If the product does not exist, add it to the cart
    product.quantity = 1;
    cart.push(product);
  }

  // Store the updated cart in local storage
  localStorage.setItem("cart", JSON.stringify(cart));
}


// fetch product by id
fetch(`https://roc.tngapps.com/TDWEB345/products/${productId}`)
  .then((response) => response.json())
  .then((product) => {
    // create product element
    const productList = document.getElementById("product-list");
    const productDiv = document.createElement("div");
    productDiv.className = "item";
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

    // add product to cart
    const cartItem = {
      id: product.id,
      name: product.Name,
      price: product.Price
    };
    updateCart(cartItem);
  })
  .catch((error) => {
    console.log(`Failed to load product ${productId}:`, error);
  });