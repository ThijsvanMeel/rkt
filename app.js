// Sample product data
const products = [
    {
      brand: "Brand 1",
      name: "Product 1",
      price: "$10",
      image: "images/foto1.jpg",
    },
    {
      brand: "Brand 2",
      name: "Product 2",
      price: "$20",
      image: "images/foto2.jpg",
    },
    {
      brand: "Brand 3",
      name: "Product 3",
      price: "$30",
      image: "images/foto3.jpg",
    },
    // Add more products as needed
  ];
  

  // Get the container div
  const container = document.querySelector(".container");
  
  // Loop through the product data and generate the product divs
  products.forEach((product) => {
    // Create a new product div
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
  
    // Create the product image
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = "Product Image";
    img.style.objectFit = "cover";
    img.style.width = "100%";
    img.style.height = "100%";
  
    // Create the brand name, product name, and price elements
    const brandName = document.createElement("h2");
    brandName.textContent = product.brand;
    const productName = document.createElement("p");
    productName.textContent = product.name;
    const price = document.createElement("p");
    price.textContent = product.price;
  
    // Append the image, brand name, product name, and price to the product div
    productDiv.appendChild(img);
    productDiv.appendChild(brandName);
    productDiv.appendChild(productName);
    productDiv.appendChild(price);
  
    // Append the product div to the container div
    container.appendChild(productDiv);
  });
  