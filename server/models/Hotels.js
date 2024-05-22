const mongoose = require("mongoose");

const sharmSchema = new mongoose.Schema({
    
    Name: String,
    Photo: String,
    Location: String, 
    Meters: String,
    Deals: String,
    Description: String,
    Features: String,
    Food: String,
    Number: String,
    Rating_e: String,
    Rating_r: String,
    Rate: String,
    Price: String,
    Tax: String
})

const SharmModel = mongoose.model('Sharm', sharmSchema);

module.exports = SharmModel;