import { useState } from "react";

import offerImage from "../../assets/offerpic.jpg";
import hurghadaImage from "../../assets/Hurghada.jpg";
import pyramidsImage from "../../assets/pyramids.webp";
import AinSokhnaImage from "../../assets/AinSokhna.jpg";
import sharmImage from "../../assets/sharm.jpg";
import alexImage from "../../assets/Alexandria.jpg";
import hotel1Image from "../../assets/hotel1.jpg";
import hotel2Image from "../../assets/hotel2.jpeg";
import hotel3Image from "../../assets/hotel3.jpg";
import hotel9Image from "../../assets/hotel9.jpg";
import flight1Image from "../../assets/flight1.jpg";
import flight2Image from "../../assets/flight2.jpg";
import flight3Image from "../../assets/flight3.webp";
import flight4Image from "../../assets/flight4.jpg";
import car1Image from "../../assets/car1.avif";
import car2Image from "../../assets/car2.webp";
import car4Image from "../../assets/car2.jpeg";
import car5Image from "../../assets/car5.jpg";
//import NavBar from "../navBar";
const Header = () => {
    
    const [selectedDate, setSelectedDate] = useState("");

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };
    const [SelectedDays, setSelectedDays] = useState('');
    const handleSelectedDays = (event) => {
        setSelectedDays(event.target.value);
    };
    const [SelectedAdults, setSelectedAdults] = useState('');
    const handleSelectedAdults = (event) => {
        setSelectedAdults(event.target.value);
    };
    const [Selectedcont, setSelectedcont] = useState('');
    const handleSelectedcont = (event) => {
        setSelectedcont(event.target.value);
    };
    const [SelectedRoom, setSelectedRoom] = useState('');
    const handleSelectedRoom = (event) => {
        setSelectedRoom(event.target.value);
    };

    return (
        <>
        <div id="custom-header" className="relative">
            <div id="custom-MainRect" className="relative bg-blue-900 p-8 flex justify-between items-center text-white">
        <div>
            <div id="custom-Find" className="text-3xl font-medium">Find your next stay</div>
            <div id="custom-befsearch" className="text-lg font-serif">Search deals on hotels and much more...</div>
        </div>
        <form className="flex items-center">
        <div className="relative mr-4">
            <label htmlFor="country" className="block">Where To Go</label>
            <select
                id="dropdown"
                value={Selectedcont}
                onChange={handleSelectedcont}
                className="w-40 py-2 px-2 mt-1 text-gray-700 leading-tight focus:outline-none border border-gray-300 rounded"
            >
                <option value="">Select a country</option>
                <option value="au">Australia</option>
                <option value="ca">Canada</option>
                <option value="usa">USA</option>
                <option value="au">Hurghada-Egypt (Nearby)</option>
                <option value="ca">Cairo-Egypt (Nearby)</option>
                <option value="usa">Alexandria-Egypt (Nearby)</option>
            </select>
            </div>
            <div className="relative mr-4">
                <label htmlFor="quantity" className="block">Days</label>
                <select
                    id="dropdown"
                    value={SelectedDays}
                    onChange={handleSelectedDays}
                    className="w-40 py-2 px-2 mt-1 text-gray-700 leading-tight focus:outline-none border border-gray-300 rounded"
                >
                    <option value="">Select Days</option>
                    <option value="option1">1</option>
                    <option value="option2">2</option>
                    <option value="option3">3</option>
                    <option value="option1">4</option>
                    <option value="option2">5</option>
                    <option value="option3">6+</option>
                </select>
            </div>
            <div className="relative mr-4">
                <label htmlFor="adults" className="block">Adults</label>
                <select
                    id="dropdown"
                    value={SelectedAdults}
                    onChange={handleSelectedAdults}
                    className="w-40 py-2 px-2 mt-1 text-gray-700 leading-tight focus:outline-none border border-gray-300 rounded"
                >
                    <option value="">Select Adults</option>
                    <option value="option1">1</option>
                    <option value="option2">2</option>
                    <option value="option3">3</option>
                    <option value="option4">4+</option>
                </select>
            </div>
            <div className="relative mr-4">
                <label htmlFor="rooms" className="block">Rooms</label>
                <select
                    id="dropdown"
                    value={SelectedRoom}
                    onChange={handleSelectedRoom}
                    className="w-40 py-2 px-2 mt-1 text-gray-700 leading-tight focus:outline-none border border-gray-300 rounded"
                >
                    <option value="">Select Room</option>
                    <option value="option1">1</option>
                    <option value="option2">2</option>
                    <option value="option3">3</option>
                    <option value="option4">4+</option>
                </select>
            </div>
            <div className="relative mr-4">
                <label htmlFor="checkInDate" className="block">Check-In Date</label>
                <input type="date" id="checkInDate" name="checkInDate" 
                    value={selectedDate}
                    onChange={handleDateChange}
                    className="w-40 py-2 px-2 mt-1 text-gray-700 leading-tight focus:outline-none border border-gray-300 rounded" />
            </div>
            <div>
                <label htmlFor="checkInDate" className="block text-blue-900 ">~</label>
                <button type="submit" className="bg-white text-blue-900 py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-500 hover:text-white transition-colors rounded">Search</button>
            </div>
        </form>
    </div>

        <div className=" pl-40 justify-center ">
        <div id="exclusive" className="mt-16">
            <div id="custom-offers" className="text-2xl font-medium">Offers</div>
            <div id="custom-discr" className="text-lg text-gray-500 ">Promotions, deals, and special offers for you</div>
            
            <div id="custom-offerPic" className="border rounded-xl overflow-hidden mt-8 relative" style={{ width: '1520px', height: '400px' }}>
                <img src={offerImage} alt="offer" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 text-white p-4 flex flex-col justify-center">
                    <h1 className="text-7xl font-medium text-center m-5">Seize The Moment</h1>
                    <p className="text-base text-center">Save 15% or more when you book and stay before October 1, 2024</p>
                </div>
            </div>
        </div>

        <div id="trend" className="mt-16">
            <div className="text-2xl font-semibold">Trending destinations</div>
            <div className="text-lg">Most popular choices for travelers from Egypt</div>
            
            <div className="flex flex-wrap mt-4" >
                <div className="w-full md:w-1/3 p-2" style={{ marginLeft: '180px' }}>
                    <div className="border rounded-lg overflow-hidden cursor-pointer relative h-80 w-120 transition-transform duration-300 hover:scale-110 hover:border-yellow-500">
                        <img src={hurghadaImage} alt="hurghada" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-5 flex justify-center items-center text-3xl">
                            <h2>Hurghada</h2>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/3 p-2">
                    <div className="border rounded-lg overflow-hidden cursor-pointer relative h-80 transition-transform duration-300 hover:scale-110 hover:border-yellow-500">
                        <img src={pyramidsImage} alt="cairo" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-5 flex justify-center items-center text-3xl">
                            <h2>Cairo</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap mt-4"style={{ marginLeft: '170px' }}>
                <div className="w-full md:w-1/4 p-2">
                    <div className="border rounded-lg overflow-hidden cursor-pointer relative h-60 transition-transform duration-300 hover:scale-110 hover:border-yellow-500">
                        <img src={AinSokhnaImage} alt="AinSokhna" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 flex justify-center items-center text-2xl">
                            <h2>Ain Sokhna</h2>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/4 p-2">
                    <div className=" border rounded-lg overflow-hidden cursor-pointer relative h-60 transition-transform duration-300 hover:scale-110 hover:border-yellow-500">
                        <img src={sharmImage} alt="Sharm" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 flex justify-center items-center text-2xl">
                            <h2>Sharm Al-Sheikh</h2>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/4 p-2">
                    <div className="border rounded-lg overflow-hidden cursor-pointer relative h-60 transition-transform duration-300 hover:scale-110 hover:border-yellow-500">
                        <img src={alexImage} alt="alex" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 flex justify-center items-center text-2xl">
                            <h2>Alexandria</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        




        <div id="hotelTitle" className="text-2xl font-medium font-sans mb-2 mt-4">Find the best hotels all over the world</div>
        <div id="Hotels" className="flex  items-center">
        
        <div className="mr-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-yellow-500" style={{ width: "350px", height: "400px" }}>
            <img src={hotel2Image} className="rounded-3xl w-full h-full" alt="Hotel Image" />
            <div className="p-4 text-center font-sans">
                Desert Rose Resort Hurghada
                <br />
                <div className="text-blue-700 underline font-sans" id="custom-rate1">Rating:7.8</div>
                <br />
                Starting From
                <div id="custom-money1" className="font-medium">EGP 11,061</div>
            </div>
        </div>

        <div className="m-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-yellow-500" style={{ width: "350px", height: "400px" }}>
            <img src={hotel9Image} className="rounded-3xl w-full h-full" alt="Hotel Image" />
            <div className="p-4 text-center font-sans">
                Jungle Aqua park Hotel NYC
                <br />
                <div className="text-blue-700 underline font-sans" id="custom-rate2">Rating:8.1</div>
                <br />
                Starting From
                <div id="custom-money2" className="font-medium">EGP 28,681</div>
            </div>
        </div>

        <div className="m-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-yellow-500" style={{ width: "350px", height: "400px" }}>
            <img src={hotel1Image} className="rounded-3xl w-full h-full" alt="Hotel Image" />
            <div className="p-4 text-center font-sans">
                AMC Resort California
                <br />
                <div className="text-blue-700 underline font-sans" id="custom-rate3">Rating:9.2</div>
                <br />
                Starting From
                <div id="custom-money3" className="font-medium">EGP 16,921</div>
            </div>
        </div>

        <div className="m-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-yellow-500" style={{ width: "350px", height: "400px" }}>
            <img src={hotel3Image} className="rounded-3xl w-full h-full" alt="Hotel Image" />
            <div className="p-4 text-center font-sans">
                Mercure Resort Ain Sokhna
                <br />
                <div className="text-blue-700 underline font-sans" id="custom-rate4">Rating:6.7</div>
                <br />
                Starting From
                <div id="custom-money4" className="font-medium">EGP 7,809</div>
            </div>
        </div>
</div>

<div className="text-2xl font-medium font-sans mb-2 mt-4">Find the best flights reservation</div>
        <div id="flights" className="flex items-center">
        
        <div className="mr-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-yellow-500" style={{ width: "350px", height: "400px" }}>
            <img src={flight1Image} className="rounded-3xl w-full h-full" alt="Hotel Image" />
            <div className="p-4 text-center font-sans">
            Nesma Airlines
                <br />
                <div className="text-blue-700 underline font-sans" id="custom-rate1">Rating:8.7</div>
                <br />
                Starting From
                <div id="custom-money1" className="font-medium">EGP 11,482</div>
            </div>
        </div>

        <div className="m-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-yellow-500" style={{ width: "350px", height: "400px" }}>
            <img src={flight2Image} className="rounded-3xl w-full h-full" alt="Hotel Image" />
            <div className="p-4 text-center font-sans">
            Emirates Airlines
                <br />
                <div className="text-blue-700 underline font-sans" id="custom-rate3">Rating:9.2</div>
                <br />
                Starting From
                <div id="custom-money3" className="font-medium">EGP 15,000</div>
            </div>
        </div>

        <div className="m-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-yellow-500" style={{ width: "350px", height: "400px" }}>
            <img src={flight3Image} className="rounded-3xl w-full h-full" alt="Hotel Image" />
            <div className="p-4 text-center font-sans">
                AMC Resort California
                <br />
                <div className="text-blue-700 underline font-sans" id="custom-rate3">Rating:6.7</div>
                <br />
                Starting From
                <div id="custom-money3" className="font-medium">EGP 10,921</div>
            </div>
        </div>

        <div className="m-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-yellow-500" style={{ width: "350px", height: "400px" }}>
            <img src={flight4Image} className="rounded-3xl w-full h-full" alt="Hotel Image" />
            <div className="p-4 text-center font-sans">
                Saudi-Arabia Airlines
                <br />
                <div className="text-blue-700 underline font-sans" id="custom-rate4">Rating:7.3</div>
                <br />
                Starting From
                <div id="custom-money4" className="font-medium">EGP 13,266</div>
            </div>
        </div>
</div>
<div className="text-2xl font-medium font-sans mb-2 mt-4">Find the best car rentals</div>
        <div id="cars" className="flex items-center">
        
        <div className="mr-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-yellow-500" style={{ width: "350px", height: "400px" }}>
            <img src={car4Image} className="rounded-3xl w-full h-full" alt="Hotel Image" />
            <div className="p-4 text-center font-sans">
            Hyundai
                <br />
                <div className="text-blue-700 underline font-sans" id="custom-rate1">Rating:8.7</div>
                <br />
                Starting From
                <div id="custom-money1" className="font-medium">EGP 3,482</div>
            </div>
        </div>

        <div className="m-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-yellow-500" style={{ width: "350px", height: "400px" }}>
            <img src={car5Image} className="rounded-3xl w-full h-full" alt="Hotel Image" />
            <div className="p-4 text-center font-sans">
            Hyundai ION-105
                <br />
                <div className="text-blue-700 underline font-sans" id="custom-rate3">Rating:9.2</div>
                <br />
                Starting From
                <div id="custom-money3" className="font-medium">EGP 5,482</div>
            </div>
        </div>

        <div className="m-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-yellow-500" style={{ width: "350px", height: "400px" }}>
            <img src={car1Image} className="rounded-3xl w-full h-full" alt="Hotel Image" />
            <div className="p-4 text-center font-sans">
            Mercedes
                <br />
                <div className="text-blue-700 underline font-sans" id="custom-rate3">Rating:8.7</div>
                <br />
                Starting From
                <div id="custom-money3" className="font-medium">EGP 4,482</div>
            </div>
        </div>

        <div className="m-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-yellow-500" style={{ width: "350px", height: "400px" }}>
            <img src={car2Image} className="rounded-3xl w-full h-full" alt="Hotel Image" />
            <div className="p-4 text-center font-sans">
            Mercedes
                <br />
                <div className="text-blue-700 underline font-sans" id="custom-rate4">Rating:7.3</div>
                <br />
                Starting From
                <div id="custom-money4" className="font-medium">EGP 3,966</div>
            </div>
        </div>
</div>



</div>



<footer id="custom-footer" className="relative">
    <div id="custom-foot" className="absolute left-0 top-full h-7 w-full bg-blue-900 flex justify-between">
        <div id="uraccfoot" className="text-white font-medium underline cursor-pointer ml-14">Your account</div>
        <div id="changesfoot" className="text-white font-medium underline cursor-pointer ml-29">Make changes online to your booking</div>
        <div id="helpfoot" className="text-white font-medium underline cursor-pointer ml-37">Customer service help</div>
    </div>
    <div id="custom-foot2" className="absolute left-0 top-full h-60 w-full bg-whitesmoke flex justify-between">
        <div id="custom-f1" className="text-blue-900 font-serif ml-14">
            <br/>
            <br/>
            Countries<br />
            Regions<br />
            Cities<br />
            Districts<br />
            Airports<br />
            Hotels<br />
            Places of interest
        </div>
        <div id="custom-f2" className="text-blue-900 font-serif ml-30">
        <br/>
        <br/>
            Homes<br />
            Resorts<br />
            Hostels
        </div>
        <div id="custom-f3" className="text-blue-900 font-serif ml-41">
        <br/><br/>Car rental<br />
            Flight finder<br />
            Restaurant reservations<br />
            Booking.com for Travel Agents
        </div>
        <div id="custom-f4" className="text-blue-900 font-serif ml-60">
        <br/><br/>Unique places to stay<br />
            All destinations<br />
            All flight destinations<br />
            All car rental locations<br />
            All vacation destinations<br />
            Reviews<br />
            Discover monthly stays<br />
            Unpacked: Travel articles<br />
            Seasonal and holiday deals<br />
            Traveller Review Awards
        </div>
        <div id="custom-f5" className="text-blue-900 font-serif ml-80">
        <br/><br/> Coronavirus (COVID-19) FAQs<br />
            About Bookify.com<br />
            Customer Service Help<br />
            Partner help<br />
            Careers<br />
            Sustainability<br />
            Press Center<br />
            Safety Resource Center<br />
            Investor relations<br />
            Terms & Conditions<br />
            Partner dispute<br />
            How We Work<br />
            Privacy & cookie statement<br />
            MSA statement<br />
            Corporate contact<br />
            Content guidelines and reporting
        </div>
        </div>
    </footer>


        </div></>
    );
};

export default Header;
