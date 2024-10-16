const mongoose = require("mongoose");
const express = require("express");
const app = express();
const product = require("./product/product.model.js");

app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello from node api server");
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await product.create(req.body);
    res.status(200).send(product);
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
      console.log("server is running in port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
