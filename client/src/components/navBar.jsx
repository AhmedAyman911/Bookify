import { IoIosAirplane, IoIosBed, IoIosCar, IoMdHome } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useState,useEffect } from "react";
export default function NavBar() {
    
    const [activeTab, setActiveTab] = useState('home');
    const [login, setLogin] = useState('no');
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const location = window.location.pathname.replace("/", "");
        setActiveTab(location || "home");
    }, []);

    const handleSignOut = () => {
        setLogin('no');
        setIsOpen(!isOpen);
    };
    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold ml-2 hover:text-blue-500">Bookify.com</span>
                    </div>
                    {login === 'no' ? <div className="flex items-center">
                        <Link to="/Login">
                            <button /*onClick={() => setLogin('yes')}*/ className="bg-white-500 hover:bg-gray-200 text-blue-500 font-semibold px-4 py-2 rounded mr-4">Log In</button>
                        </Link>
                        <Link to="/signup">
                            <button onClick={() => ('yes')} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">Sign Up</button>
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
                            Username

                        </div>
                    }
                </div>
                {isOpen && (
                    <div className="origin-bottom-center absolute right-40 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <div className="py-1" role="none">
                            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" >
                                test
                            </button>
                            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" >
                                test
                            </button>
                            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={() => handleSignOut()}>
                                Sign Out
                            </button>
                        </div>
                    </div>
                )}
                <div className="flex justify-between py-2">
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
                    </ul>
                </div>
            </div>
        </nav>

    );
}