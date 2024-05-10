import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdModeEditOutline, MdDelete, MdAdd } from 'react-icons/md';
import { GoArrowRight } from 'react-icons/go';
import axios from 'axios';

export default function AdminCard() {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        fetchFlights();
    }, []);

    const fetchFlights = async () => {
        try {
            const response = await axios.get('http://localhost:3001/flights');
            setFlights(response.data);
        } catch (error) {
            console.error('Error fetching flights:', error);
        }
    };

    const handleDelete = async (flightId) => {
        try {
            await axios.delete(`http://localhost:3001/flights/${flightId}`);
            setFlights(prevFlights => prevFlights.filter(flight => flight._id !== flightId));
        } catch (error) {
            console.error('Error deleting flight:', error);
        }
    };


    return (
        <>
            {flights.map((flight) => (
                <div key={flight._id} className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden m-5">
                    <img className="w-full h-64 object-cover" src={flight.photo} alt={flight.flightName} />
                    <div className="p-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold">{flight.flightName}</h2>
                            <div className="flex justify-between items-center">
                                <Link to={`/edit/${flight._id}`} className="inline-block">
                                    <button
                                        aria-label="Edit"
                                        className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 mr-3"
                                    >
                                        <MdModeEditOutline />
                                    </button>
                                </Link>
                                <button
                                    aria-label="Delete"
                                    className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300"
                                    onClick={() => {handleDelete(flight._id)}}
                                >
                                    <MdDelete />
                                </button>
                            </div>
                        </div>
                        <p className="text-gray-600 mt-2">Departure: {new Date(flight.date).toLocaleDateString()}</p>
                        <div className="flex justify-between items-center mt-4">
                            <div>
                                <p className="text-gray-700">{flight.departureTime}</p>
                                <p className="text-gray-500">{flight.from}</p>
                            </div>
                            <div className="text-5xl">
                                <GoArrowRight />
                            </div>
                            <div>
                                <p className="text-gray-700">{flight.arrivalTime}</p>
                                <p className="text-gray-500">{flight.to}</p>
                            </div>
                            <p className="text-green-500 font-semibold">${flight.price}</p>
                        </div>
                    </div>
                </div>
            ))}
            <div className="fixed bottom-8 right-8">
                <Link to="/add" className="inline-block">
                    <button className="bg-blue-500 text-white rounded-full p-4 shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <MdAdd className="h-5 w-5" />
                    </button>
                </Link>
            </div>
        </>
    );
}
