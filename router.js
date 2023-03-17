const fetch = require("node-fetch");
const express = require("express");
const router = express.Router();

router.get("/", checkSignIn, function (req, res, next) {
  const fetchUsers = fetch("https://roc.tngapps.com/TDWEB345/users")
    .then(async (response) => {
      const data = await response.json();
      return data;
    })
    .catch((error) => {
      console.log("Failed to load users:", error);
      res.render("error", { message: error });
    });

  const fetchProducts = fetch("https://roc.tngapps.com/TDWEB345/products")
    .then(async (response) => {
      const data = await response.json();
      return data;
    })
    .catch((error) => {
      console.log("Failed to load products:", error);
      res.render("error", { message: error });
    });

  const fetchBasketItems = fetch("https://roc.tngapps.com/TDWEB345/basketitems")
    .then(async (response) => {
      const data = await response.json();
      return data;
    })
    .catch((error) => {
      console.log("Failed to load basket items:", error);
      res.render("error", { message: error });
    });

  Promise.all([fetchUsers, fetchProducts, fetchBasketItems]).then((results) => {
    const [users, products, basketItems] = results;
    res.render("items", { products: products });
  });
});

module.exports = router;
