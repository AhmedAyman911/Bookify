import { useState, useEffect } from "react";
import { IoPersonOutline, IoLocationOutline } from "react-icons/io5";
import { MdCardTravel } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { FaCalendarDays } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdModeEditOutline, MdDelete, MdAdd } from 'react-icons/md';
import axios from 'axios';

export default function AdminCar() {
    const [Cars, setCars] = useState([]);

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = async () => {
        try {
            const response = await axios.get('http://localhost:3001/car-rentals');
            setCars(response.data);
        } catch (error) {
            console.error('Error fetching Cars:', error);
        }
    };

    const handleDelete = async (carId) => {
        try {
            await axios.delete(`http://localhost:3001/car-rentals/${carId}`);
            setCars(prevCars => prevCars.filter(Car => Car._id !== carId));
        } catch (error) {
            console.error('Error deleting Car:', error);
        }
    };

//src="https://www-europe.nissan-cdn.net/content/dam/Nissan/eg/vehicles/sunny/product_code/product_version/design/SUNNY-CAR.jpg.ximg.l_12_m.smart.jpg
    return (
        <>
            {
                Cars.map((car) => (
                    <div key={car._id} className="max-w-2xl  mx-auto bg-white shadow-md rounded-md overflow-hidden m-5 ">
                        <div className="flex gap-x-3">
                            <img className="w-1/3 h-auto object-cover max-w-1/3 p-5" src={car.photo} alt={car.type} />
                            <div className="p-4 flex flex-col justify-between flex-grow">
                                <div>
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-xl font-semibold">{car.type}</h2>
                                        <p className="text-green-500 font-semibold">${car.price}</p>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <IoLocationOutline />
                                        <p className="text-blue-600 ml-1 font-bold underline">{car.location}</p>
                                    </div>
                                    <div className="flex justify-between mt-2">
                                        <div className="flex items-center">
                                            <IoPersonOutline />
                                            <p className="text-gray-600 ml-1">{car.seats}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <MdCardTravel />
                                            <p className="text-gray-600 ml-1">{car.bags}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <LuCalendarDays />
                                            <p className="text-gray-600 ml-1">{car.days}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <div className="flex items-center">
                                        <FaCalendarDays />
                                        <p className="text-gray-600 ml-1">{new Date(car.date).toLocaleDateString()}</p>
                                    </div>
                                    <div className="flex">
                                        <Link to={`/editCar/${car._id}`} className="inline-block">
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
                                            onClick={() => {handleDelete(car._id)}}
                                        >
                                            <MdDelete />
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            <div className="fixed bottom-8 right-8">
                <Link to="/addCar" className="inline-block">
                    <button className="bg-blue-500 text-white rounded-full p-4 shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <MdAdd className="h-5 w-5" />
                    </button>
                </Link>
            </div>
        </>
    );
}
