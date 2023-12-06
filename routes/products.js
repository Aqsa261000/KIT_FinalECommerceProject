const express = require("express");
const routes = express.Router();
const auth = require("../middlewares/auth");
const Product = require("../models/product"); // This would typically be a database or data storage.

// GET all products
routes.get("/products", async (req, res) => {
  try {
    const products = await Product.find(); // Retrieve all products from the database
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET a specific product
routes.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); // Find product by ID in the database
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST a new product
routes.post("/", async (req, res) => {
  try {
    const newProduct = await Product.create(req.body); // Create a new product in the database
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT/update a product
routes.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = req.body;
    const product = await Product.findByIdAndUpdate(id, updatedProduct, {
      new: true,
    }); // Update product by ID in the database
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE a product
routes.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id); // Delete product by ID from the database
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = routes;
