import offerImage from "../../assets/offerpic.jpg";
import hurghadaImage from "../../assets/Hurghada.jpg";
import pyramidsImage from "../../assets/pyramids.webp";
import AinSokhnaImage from "../../assets/barcelona.jpg";
import sharmImage from "../../assets/sharm.jpg";
import alexImage from "../../assets/paris.jpg";
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
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
const Header = () => {



    return (
        <>


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

                    <div className="flex flex-wrap mt-4" style={{ marginLeft: '170px' }}>
                        <div className="w-full md:w-1/4 p-2">
                            <div className="border rounded-lg overflow-hidden cursor-pointer relative h-60 transition-transform duration-300 hover:scale-110 hover:border-yellow-500">
                                <img src={AinSokhnaImage} alt="AinSokhna" className="w-full h-full object-cover" />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 flex justify-center items-center text-2xl">
                                    <h2>Barcelona</h2>
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
                                    <h2>Paris</h2>
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
            </div>
            <footer className="bg-blue-900 text-white pt-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                        <h4 className="text-lg font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Careers</a></li>
                            <li><a href="#" className="hover:underline">Press Center</a></li>
                            <li><a href="#" className="hover:underline">Investor Relations</a></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                        <h4 className="text-lg font-semibold mb-4">Support</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Customer Service</a></li>
                            <li><a href="#" className="hover:underline">Partner Help</a></li>
                            <li><a href="#" className="hover:underline">Contact Us</a></li>
                            <li><a href="#" className="hover:underline">Safety Resource Center</a></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                        <h4 className="text-lg font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Blog</a></li>
                            <li><a href="#" className="hover:underline">Help Center</a></li>
                            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                        <h4 className="text-lg font-semibold mb-4">Connect</h4>
                        <ul className="flex space-x-4">
                            <li><a href="#" className="hover:text-gray-400"><FaFacebook size={24} /></a></li>
                            <li><a href="#" className="hover:text-gray-400"><FaTwitter size={24} /></a></li>
                            <li><a href="#" className="hover:text-gray-400"><FaInstagram size={24} /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between items-center mt-10 border-t border-gray-700 pt-6">
                    <p className="text-gray-400 text-sm">&copy; 2024 Bookify. All rights reserved.</p>
                    <div className="text-gray-400 text-sm space-x-6">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer></>
    );
};

export default Header;