const productIds = JSON.parse(localStorage.getItem("productIds")) || [];
let totalPrice = 0;

function removeProduct(productId) {

  const index = productIds.indexOf(productId);
  if (index > -1) {
    productIds.splice(index, 1);
    localStorage.setItem("productIds", JSON.stringify(productIds));
  }

  const productElement = document.getElementById(`product-${productId}`);
  productElement.parentNode.removeChild(productElement);


  totalPrice = 0;
  productIds.forEach((productId) => {
    fetch(`https://roc.tngapps.com/TDWEB345/products/${productId}`)
      .then((response) => response.json())
      .then((product) => {
        totalPrice += parseFloat(product.Price);
      })
      .catch((error) => {
        console.log(`Failed to load product ${productId}:`, error);
      });
  });


  const totalElement = document.getElementById("total-price");
  totalElement.innerHTML = `€${totalPrice.toFixed(2)}`;
}

const productPromises = productIds.map((productId) => {
  return fetch(`https://roc.tngapps.com/TDWEB345/products/${productId}`)
    .then((response) => response.json())
    .then((product) => {
  
      const productList = document.getElementById("product-list");
      const productDiv = document.createElement("div");
      productDiv.className = "item";
      const deleteButton = document.createElement("i");
      deleteButton.className = "fa fa-close w3-xxlarge";
      deleteButton.style.top = "40px";
      deleteButton.style.left = "20px";
      deleteButton.style.position = "relative";

      deleteButton.addEventListener("click", () => {
        const index = productIds.indexOf(productId);
        if (index !== -1) {
          productIds.splice(index, 1);
          localStorage.setItem("productIds", JSON.stringify(productIds));
          location.reload();
        }
      });
      productDiv.appendChild(deleteButton);
      const productImg = document.createElement("img");
      productImg.src = product.Image;
      productImg.alt = product.Name;
      productImg.style.height = "100%";
      productImg.style.width = "100%";
      productDiv.appendChild(productImg);
      
      
       
  
      const productName = document.createElement("h3");
      productName.textContent = product.Name;
      productDiv.appendChild(productName);
      const productPrice = document.createElement("p");
      productPrice.textContent = `€${product.Price}`;
      productDiv.appendChild(productPrice);
      productList.appendChild(productDiv);
  

      totalPrice += parseFloat(product.Price);

      const checkoutDiv = document.querySelector('.checkout');
      const checkoutItem = document.createElement('div');
      checkoutItem.innerHTML = `${product.Name} - €${product.Price}`;
      checkoutDiv.appendChild(checkoutItem);
    })
    .catch((error) => {
      console.log(`Failed to load product ${productId}:`, error);
    });
});

Promise.all(productPromises).then(() => {

  const checkoutDiv = document.querySelector('.checkout');
  const total = document.createElement('p');
  total.innerHTML = `<strong>Total:</strong> €${totalPrice.toFixed(2)}`;
  checkoutDiv.appendChild(total);

  const checkoutButton = document.createElement('button');
checkoutButton.innerHTML = 'Afrekenen';
checkoutButton.className = 'btn';
checkoutDiv.appendChild(checkoutButton);
});
