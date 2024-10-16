const mongoose = require("mongoose");
const express = require("express");
const app = express();
const Product = require("./product/product.model.js");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from node api server");
});

// Get all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new product
app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a product by ID
app.get("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a product
app.put("/api/product/:id", async (req, res) => {  
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
      
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      
      res.status(200).json(product);  
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

mongoose
  .connect(
    "mongodb+srv://abhijithtp2003:4szK5Wq2qW3XYbaH@nodeapi.etau0.mongodb.net/Node-API?retryWrites=true&w=majority&appName=nodeAPI"
  )
  .then(() => {
    console.log("connected to database");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
