
const productId = localStorage.getItem("productId");

let productIds = JSON.parse(localStorage.getItem("productIds")) || [];

function addToCart(productId) {
  productIds.push(productId);
  localStorage.setItem("productIds", JSON.stringify(productIds));
  window.location.href = `winkelwagen.html?productId=${productId}`;
}




fetch(`https://roc.tngapps.com/TDWEB345/products/${productId}`)
  .then((response) => response.json())
  .then((product) => {
  
    const imageDisplay = document.getElementById("image-display");
    const productImg = document.createElement("img");
    productImg.src = product.Image;
    productImg.style.height = "100%";
    productImg.style.width = "100%";
    imageDisplay.appendChild(productImg);

   
    const h5Display = document.getElementById("second-div");
    const productH5 = document.createElement("h5");
    productH5.className = "brand";
    productH5.textContent = product.Brand;

    h5Display.appendChild(productH5);

     
     const h4Display = document.getElementById("second-div");
     const productH4 = document.createElement("h4");
     productH4.className = "title";
     productH4.textContent = product.Name;
 
     h4Display.appendChild(productH4);

  
     const h3Display = document.getElementById("second-div");
     const productH3 = document.createElement("h3");
     productH3.className = "price";
     productH3.textContent = "€" + product.Price;
 
     h3Display.appendChild(productH3);

  
    const selectDisplay = document.getElementById("second-div");
    const productSelect = document.createElement("select");
    productSelect.className = "color";
    productSelect.name = "Kleur";
    productSelect.id = "color";
    const colors = product.Colors.split(",");

colors.forEach((color) => {
  const option = document.createElement("option");
  option.value = color.trim();
  option.textContent = color.trim();
  productSelect.appendChild(option);
});

selectDisplay.appendChild(productSelect);

const div = document.getElementById("second-div");
const containerOrder = document.createElement("div");
containerOrder.className = "container-order";
div.appendChild(containerOrder)


const sizeSelect = document.createElement("select");
sizeSelect.className = "size";
sizeSelect.name = "Maat";
sizeSelect.id = "size";

if (product.Sizes.includes(",")) {
  product.Sizes.split(",").forEach((size) => {
    const option = document.createElement("option");
    option.value = size.trim();
    option.textContent = size.trim();
    sizeSelect.appendChild(option);
  });
} else {
  const option = document.createElement("option");
  option.value = product.Sizes.trim();
  option.textContent = product.Sizes.trim();
  sizeSelect.appendChild(option);
}

const orderButton = document.createElement("button");
orderButton.className = "order";
orderButton.textContent = "Voeg toe aan winkelwagen";
orderButton.id = "add-to-cart";

containerOrder.appendChild(sizeSelect);
containerOrder.appendChild(orderButton);

const addToCartButton = document.getElementById("add-to-cart");
addToCartButton.addEventListener("click", function() {
  addToCart(productId);
});


const secondDiv = document.getElementById("second-div");
secondDiv.appendChild(containerOrder);





  })
  .catch((error) => {
    console.log(`Failed to load product ${productId}:`, error);
  });
  
  
