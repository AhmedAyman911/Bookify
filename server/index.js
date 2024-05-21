const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const FlightModel = require('./models/Flight.js')
const CarModel = require('./models/Cars.js')
const bcrypt = require('bcrypt')
const UserModel = require('./models/User.js')
const jwt = require('jsonwebtoken');


const app = express();
app.use(express.json());
app.use(cors());

//database connection
mongoose.connect("mongodb+srv://learn:learn@cluster0.zzk56ve.mongodb.net/?retryWrites=true&w=majority")

app.post('/register', async (req, res) => {

    const { name, password, email } = req.body;
    bcrypt.hash(password, 10)
        .then(hash => {
            UserModel.create({ name, password: hash, email })
                .then(users => { res.json(users); })
                .catch(err => res.json(err))
        })

});

app.post('/login', async (req, res) => {
    const { password, email } = req.body;
    try {
        const user = await UserModel.findOne({ email: email });
        if (!user) {
            return res.status(404).json("No user found");
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json("Incorrect password");
        }
        const token = jwt.sign(
            { id: user._id, name: user.name },
            'your_jwt_secret', 
            { expiresIn: '1h' }
        );

        res.json({
            message: 'Logged in successfully!',
            token,
            user: {
                id: user._id,
                username: user.name,
                email: user.email
            }
        });
    } catch (err) {
        res.status(500).json("Server error");
    }
});
app.get('/get-token', (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'No token found' });
    }
    // Optionally, you can verify and decode the token here
    res.json({ token });
});

app.get('/get-token', (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'No token found' });
    }
    // Optionally, you can verify and decode the token here
    res.json({ token });
});


// API endpoint to get combined unique values from "from" and "to" fields
app.get('/combined-unique', async (req, res) => {
    try {
        const travelData = await FlightModel.find();
        const locations = new Set();
        locations.add("any");
        travelData.forEach(travel => {
            if (travel.from) locations.add(travel.from);
            if (travel.to) locations.add(travel.to);
        });
        res.json([...locations]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetchinggggggg locations' });
    }
});
//search flights
app.get('/Searchflights', async (req, res) => {
    try {
        let query = {};
        const { from, to } = req.query;

        // Check if 'from' parameter is specified
        if (from && from !== 'any') {
            query.from = from;
        }

        // Check if 'to' parameter is specified
        if (to && to !== 'any') {
            query.to = to;
        }

        const flights = await FlightModel.find(query);
        res.json(flights);
    } catch (err) {
        console.error('Error fetching filtered flights:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

//add new flight
app.post('/addNewFlight', async (req, res) => {
    const { flightName, date, departureTime, arrivalTime, from, to, price, photo } = req.body;
    FlightModel.create({ flightName, date, departureTime, arrivalTime, from, to, price, photo })
        .then(flights => { res.json(flights); })
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
        const updatedFlight = await FlightModel.findByIdAndUpdate(flightId, req.body, { new: true });
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

app.post('/addNewCar', async (req, res) => {
    const { type, price, location, seats, bags, days, date, photo } = req.body;
    CarModel.create({ type, price, location, seats, bags, days, date, photo })
        .then(cars => { res.json(cars); })
        .catch(err => res.json(err))
});
//get cars
app.get('/car-rentals', async (req, res) => {
    try {
        const cars = await CarModel.find();
        res.json(cars);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
//edit Cars
app.get('/car-rentals/:id', async (req, res) => {
    try {
        const cars = await CarModel.findById(req.params.id);
        res.json(cars);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.put('/car-rentals/:id', async (req, res) => {
    const carId = req.params.id;
    try {
        const updatedcar = await CarModel.findByIdAndUpdate(carId, req.body, { new: true });
        res.json(updatedcar);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
//delete Car
app.delete('/car-rentals/:id', async (req, res) => {
    const carId = req.params.id;
    try {
        await CarModel.findByIdAndDelete(carId);
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting Car:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// API endpoint to get car locations
app.get('/carLocation', async (req, res) => {
    try {
        const travelData = await CarModel.find();
        const locations = new Set();
        locations.add("any");
        travelData.forEach(car => {
            if (car.location) locations.add(car.location);
        });
        res.json([...locations]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetchinggggggg locations' });
    }
});
//get cars days
app.get('/carDays', async (req, res) => {
    try {
        const travelData = await CarModel.find();
        const days = new Set();
        days.add("any");
        travelData.forEach(car => {
            if (car.location) days.add(car.days);
        });
        res.json([...days]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetchinggggggg locations' });
    }
});
//cars types
app.get('/carType', async (req, res) => {
    try {
        const travelData = await CarModel.find();
        const type = new Set();
        type.add("any");
        travelData.forEach(car => {
            if (car.type) type.add(car.type);
        });
        res.json([...type]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetchinggggggg locations' });
    }
});
//search flights
app.get('/SearchCars', async (req, res) => {
    try {
        let query = {};
        const { type, days, location, date } = req.query;

        if (type && type !== 'any') {
            query.type = type;
        }
        if (days && days !== 'any') {
            query.days = days;
        }
        if (location && location !== 'any') {
            query.location = location;
        }
        if (date && date !== 'any') {
            query.date = date;
        }
        const cars = await CarModel.find(query);
        res.json(cars);
    } catch (err) {
        console.error('Error fetching filtered cars:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});
app.listen(3001, () => {
    console.log("server works")
}); 