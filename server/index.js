const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const FlightModel = require('./models/Flight.js')



const app = express();
app.use(express.json());
app.use(cors());

//database connection
mongoose.connect("mongodb+srv://learn:learn@cluster0.zzk56ve.mongodb.net/?retryWrites=true&w=majority")

//add new flight
app.post('/addNewFlight', async (req,res) => { 
    const {flightName,date,departureTime,arrivalTime,from,to,price,photo} = req.body;
        FlightModel.create({flightName,date,departureTime,arrivalTime,from,to,price,photo})
        .then(flights => {res.json(flights);})
        .catch(err => res.json(err))      
});
//get flights all from the database 
app.get('/flights', async (req, res) => {
    try {
        const flights = await FlightModel.find();
        res.json(flights);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
//edit flights
app.get('/flights/:id', async (req, res) => {
    try {
        const flights = await FlightModel.findById(req.params.id);
        res.json(flights);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.put('/flights/:id', async (req, res) => {
    const flightId = req.params.id;
    try {
        const updatedFlight = await FlightModel.findByIdAndUpdate(flightId,req.body,{ new: true });
        res.json(updatedFlight);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//delete Flight
app.delete('/flights/:id', async (req, res) => {
    const flightId = req.params.id;
    try {
        await FlightModel.findByIdAndDelete(flightId);
        res.status(204).send(); 
    } catch (error) {
        console.error('Error deleting flight:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(3001, ()=>{
    console.log("server works")
}); 