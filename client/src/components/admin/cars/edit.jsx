import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditCar() {
    const { id } = useParams();
    const navigateTo = useNavigate();

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
    const [loading, setLoading] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const fetchCarData = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/car-rentals/${id}`);
            setFormData(response.data);
            const Data = response.data;
            const datePart = Data.date.split('T')[0];
            setFormData(prevState => ({
                ...prevState,
                date: datePart
            }));
            setLoading(false);
        } catch (error) {
            console.error('Error fetching car:', error);
        }
    };

    useEffect(() => {
        fetchCarData(id);
    },[id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3001/car-rentals/${id}`, formData);
            navigateTo('/adminCar');
        } catch (error) {
            console.error('Error updating car:', error);
        }
    };

    // Conditional rendering of the form based on loading state
    if (loading) {
        return <div>Loading...</div>;
    }
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
                <label className="block text-sm font-medium text-gray-700">seats:</label>
                <input
                     type="number"
                     id="seats"
                     name="seats"
                     value={formData.seats}
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
                    onChange={handleChange}
                    required 
                    className="shadow-sm border-b border-blue-300 border-gray-300 text-md focus:outline-none focus:ring-1 focus:rounded focus:border-blue-400 block w-full p-2.5"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="to" className="block text-sm font-medium text-gray-700">Location:</label>
                <input
                    type="text"
                    id="price"
                    name="location"
                    value={formData.location}
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
                    onChange={handleChange}
                    required 
                    className="shadow-sm border-b border-blue-300 border-gray-300 text-md focus:outline-none focus:ring-1 focus:rounded focus:border-blue-400 block w-full p-2.5"
                />
            </div>
        <div className="col-span-full">
    <div className="mb-4">
                <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Photo Url:</label>
                <input
                    type="text"
                    id="photo"
                    name="photo"
                    value={formData.photo}
                    onChange={handleChange}
                    required 
                    className="shadow-sm border-b border-blue-300 border-gray-300 text-md focus:outline-none focus:ring-1 focus:rounded focus:border-blue-400 block w-full p-2.5"
                />
            </div>
    </div>
        <button type="submit" className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 m-5 ml-0">
            Edit
            </button>
        </form>
    );
}