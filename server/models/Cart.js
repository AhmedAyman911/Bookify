const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema({
    uid:String,
    item: String,
    date: String,
    price: Number,
})
const CartModel = mongoose.model("Cart",CartSchema)
module.exports = CartModel