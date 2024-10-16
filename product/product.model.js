const { timeStamp } = require("console");
const mangoose = require("mangoose");
const { default: mongoose } = require("mongoose");
const { type } = require("os");
const { types } = require("util");

const productSchema = mangoose.Schema(
  {
    name: {
      type: "string",
      required: [true, " Enter your name : "],
    },
    quantity: {
      type: "Number",
      required: true,
      default: 0,
    },
    price: {
      type: "Number",
      required: true,
      default: 0,
    },
    Image: {
      type: "string",
      required: false,
    },
  },
  {
    timeStamp: true,
  }
);

const product = mongoose.model("Product", productSchema);
module.exports = product;
