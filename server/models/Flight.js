const mongoose = require("mongoose");
const FlightSchema = new mongoose.Schema({
    flightName: String,
    date: Date,
    departureTime: String,
    arrivalTime: String,
    from: String,
    to: String,
    price: Number,
    photo: String
})
const FlightModel = mongoose.model("Flights",FlightSchema)
module.exports = FlightModel