import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Addcar() {
    const navigateTo  = useNavigate();

    const [formData, setFormData] = useState({
        type: '',
        price: '',
        location: '',
        seats: '',
        bags: '',
        days: '',
        date: '',
        photo:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/addNewCar', formData)
             .then(result => {console.log(result);navigateTo('/car-rentals');})
             .catch(err => console.log(err));
    };
    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 bg-white p-8 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Car Information</h2>
            <div className="mb-4">
                <label htmlFor="flightName" className="block text-sm font-medium text-gray-700 m-2 ml-1">Car Type:</label>
                <input
                    type="text"
                    id="CarType"
                    name="type"
                    value={formData.type}
                    placeholder="Nissan Sunny"
                    onChange={handleChange}
                    required 
                    className="shadow-sm border-b border-blue-300 border-gray-300 text-md focus:outline-none focus:ring-1 focus:rounded focus:border-blue-400 block w-full p-2.5"
                />
            </div>
            
            <div className="mb-4">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required 
                    className="shadow-sm border-b border-blue-300 border-gray-300 text-md focus:outline-none focus:ring-1 focus:rounded focus:border-blue-400 block w-full p-2.5"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Seats:</label>
                <input
                    type="number"
                    id="seats"
                    name="seats"
                    value={formData.seats}
                    placeholder="4"
                    onChange={handleChange}
                    required 
                    className="shadow-sm border-b border-blue-300 border-gray-300 text-md focus:outline-none focus:ring-1 focus:rounded focus:border-blue-400 block w-full p-2.5"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Bags:</label>
                <input
                    type="number"
                    id="Bags"
                    name="bags"
                    value={formData.bags}
                    placeholder="2"
                    onChange={handleChange}
                    required 
                    className="shadow-sm border-b border-blue-300 border-gray-300 text-md focus:outline-none focus:ring-1 focus:rounded focus:border-blue-400 block w-full p-2.5"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Days:</label>
                <input
                    type="number"
                    id="Days"
                    name="days"
                    value={formData.days}
                    placeholder="3"
                    onChange={handleChange}
                    required 
                    className="shadow-sm border-b border-blue-300 border-gray-300 text-md focus:outline-none focus:ring-1 focus:rounded focus:border-blue-400 block w-full p-2.5"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Location:</label>
                <input
                    type="text"
                    id="price"
                    name="location"
                    value={formData.location}
                    placeholder="cairo"
                    onChange={handleChange}
                    required 
                    className="shadow-sm border-b border-blue-300 border-gray-300 text-md focus:outline-none focus:ring-1 focus:rounded focus:border-blue-400 block w-full p-2.5"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price:</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    placeholder="1200"
                    onChange={handleChange}
                    required 
                    className="shadow-sm border-b border-blue-300 border-gray-300 text-md focus:outline-none focus:ring-1 focus:rounded focus:border-blue-400 block w-full p-2.5"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Photo Url:</label>
                <input
                    type="text"
                    id="photo"
                    name="photo"
                    value={formData.photo}
                    placeholder="https://xyz"
                    onChange={handleChange}
                    required 
                    className="shadow-sm border-b border-blue-300 border-gray-300 text-md focus:outline-none focus:ring-1 focus:rounded focus:border-blue-400 block w-full p-2.5"
                />
            </div>
            <button type="submit" className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 m-5 ml-0">
                Add
            </button>
        </form>
    );
}