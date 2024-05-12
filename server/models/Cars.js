const mongoose = require("mongoose");
const CarSchema = new mongoose.Schema({
    type: String,
    price: Number,
    location: String,
    seats: Number,
    bags: Number,
    days: Number,
    date: String,
    photo: String
})
const CarModel = mongoose.model("Cars",CarSchema)
module.exports = CarModel