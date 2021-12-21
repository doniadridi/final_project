const mongoose = require('mongoose') ;

const Schema = mongoose.Schema;

const ProductsSchema = new Schema(
  {
    id: String,
    productName: String,
    description: String,
    price: Number,
    category: Number,
    imageUrl: String,
    reviews: []
  },
  {
    collection: "Products"
  }
);

module.exports = mongoose.model("Products", ProductsSchema);

