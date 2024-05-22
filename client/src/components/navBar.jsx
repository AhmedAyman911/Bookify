import { IoIosAirplane, IoIosBed, IoIosCar, IoMdHome } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('home');
    const [login, setLogin] = useState('no');
    const [isOpen, setIsOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [admin, setAdmin] = useState('no');
    // Function to decode the JWT token and extract the username
    const decodeToken = (token) => {
        try {
            const decoded = jwtDecode(token);
            return decoded;
        } catch (error) {
            console.error('Error decoding token:', error);
            return null;
        }
    };
    useEffect(() => {
        // Check if token exists in localStorage
        const token = localStorage.getItem('token');
        if (token) {
            // Decode the token and extract the username
            const decodedToken = decodeToken(token);

            if (decodedToken) {
                setUsername(decodedToken.name);
                setLogin('yes');
                if (decodedToken.name === 'admin') { setAdmin('yes'); }
            } else { console.log("heeeeeeeeeeeelp") }
        }
        const location = window.location.pathname.replace("/", "");
        setActiveTab(location || "home");
    }, []);

    const handleSignOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setLogin('no');
        setIsOpen(!isOpen);
        navigate("/");
        window.location.reload();
    };
    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold ml-2 text-blue-700">Bookify.com</span>
                    </div>
                    {login === 'no' ? <div className="flex items-center">
                        <Link to="/Login">
                            <button className="bg-white-500 hover:bg-gray-200 text-blue-700 font-semibold px-4 py-2 rounded mr-4">Log In</button>
                        </Link>
                        <Link to="/signup">
                            <button onClick={() => ('yes')} className="bg-blue-700 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">Sign Up</button>
                        </Link>
                    </div>
                        :
                        <div className="flex items-center">
                            <img
                                className="h-9 w-9 rounded-full mr-2 cursor-pointer"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="user photo"
                                onClick={() => setIsOpen(!isOpen)}
                            />
                            <span>{username}</span>
                        </div>
                    }
                </div>
                {isOpen && (
                    <div className="z-50 origin-bottom-center absolute right-40 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <div className="py-1" role="none">
                            <button className="block w-full text-left px-4 py-2 text-sm text-blue-700 hover:bg-blue-100 hover:text-gray-900" role="menuitem" onClick={() => handleSignOut()}>
                                Sign Out
                            </button>
                        </div>
                    </div>
                )}
                <div className="flex justify-between py-2">
                    {admin === 'yes' ?
                        <ul className="flex space-x-6">
                            <li>
                                <Link to="/" onClick={() => setActiveTab('home')}
                                    className={activeTab === 'home' ? 'flex items-center text-blue-700 hover:text-blue-500' : 'flex items-center text-grey-700 hover:text-blue-500'}>
                                    <IoMdHome className="mr-1" /> Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/adminHotels" onClick={() => setActiveTab('adminHotels')}
                                    className={activeTab === 'adminHotels' ? 'flex items-center text-blue-700 hover:text-blue-500' : 'flex items-center text-grey-700 hover:text-blue-500'}>
                                    <IoIosBed className="mr-1" /> Hotels
                                </Link>
                            </li>
                            <li>
                                <Link to="/adminFlights" onClick={() => setActiveTab('adminFlights')}
                                    className={activeTab === 'adminFlights' ? 'flex items-center text-blue-700 hover:text-blue-500' : 'flex items-center text-grey-700 hover:text-blue-500'}>
                                    <IoIosAirplane className="mr-1" /> Flights
                                </Link>
                            </li>
                            <li>
                                <Link to="/adminCar" onClick={() => setActiveTab('adminCar')}
                                    className={activeTab === 'adminCar' ? 'flex items-center text-blue-700 hover:text-blue-500' : 'flex items-center text-grey-700 hover:text-blue-500'}>
                                    <IoIosCar className="mr-1" /> Car Rentals
                                </Link>
                            </li>
                        </ul>
                        :
                        <ul className="flex space-x-6">

                            <li>
                                <Link to="/" onClick={() => setActiveTab('home')}
                                    className={activeTab === 'home' ? 'flex items-center text-blue-700 hover:text-blue-500' : 'flex items-center text-grey-700 hover:text-blue-500'}>
                                    <IoMdHome className="mr-1" /> Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/hotels" onClick={() => setActiveTab('hotels')}
                                    className={activeTab === 'hotels' ? 'flex items-center text-blue-700 hover:text-blue-500' : 'flex items-center text-grey-700 hover:text-blue-500'}>
                                    <IoIosBed className="mr-1" /> Hotels
                                </Link>
                            </li>
                            <li>
                                <Link to="/flights" onClick={() => setActiveTab('flights')}
                                    className={activeTab === 'flights' ? 'flex items-center text-blue-700 hover:text-blue-500' : 'flex items-center text-grey-700 hover:text-blue-500'}>
                                    <IoIosAirplane className="mr-1" /> Flights
                                </Link>
                            </li>
                            <li>
                                <Link to="/car-rentals" onClick={() => setActiveTab('car-rentals')}
                                    className={activeTab === 'car-rentals' ? 'flex items-center text-blue-700 hover:text-blue-500' : 'flex items-center text-grey-700 hover:text-blue-500'}>
                                    <IoIosCar className="mr-1" /> Car Rentals
                                </Link>
                            </li>
                        </ul>}
                </div>
            </div>
        </nav>

    );
}