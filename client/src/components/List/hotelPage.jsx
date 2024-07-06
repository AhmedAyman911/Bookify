import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios"
import buspic from "../../assets/bus.png";
import carpic from "../../assets/car.png";
import poolpic from "../../assets/swim.png";
import forkpic from "../../assets/fork.png";
import showerpic from "../../assets/underarm.png";
import eyepic from "../../assets/eye.png";
import wifipic from "../../assets/wifi.png";
import seapic from "../../assets/sea.png";
import lakepic from "../../assets/lake.png";
import citypic from "../../assets/city.png";
import coffeepic from "../../assets/coffee-cup.png";
import balconypic from "../../assets/coffee-shop.png";
import Cart from '../../components/cart/cartt';
import { jwtDecode } from "jwt-decode";
import { Alert, Snackbar } from '@mui/material';

const Hotel = () => {

    const [cart, setCart] = useState([]);
    const [uid, setUserid] = useState('');
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
                setUserid(decodedToken.id);
            } else { console.log("heeeeeeeeeeeelp") }
        }
    }, []);
    //cart
    const handleBook = (hotel) => {
        if (!uid) {
            console.log("User is not logged in. Please log in to book a room.");
            setAlertOpen(true);
        } else {
            setAlertOpen2(true);
            const newCartItem = {
                uid: uid,
                item: hotel.Name,
                date: '',
                price: hotel.Price,
            };

            const updatedCart = [...cart, newCartItem];
            setCart(updatedCart);
            saveCartToBackend(newCartItem);
        }
    };

    const saveCartToBackend = async (updatedCart) => {
        try {
            const result = await axios.post('http://localhost:3001/addtocart', updatedCart);
            console.log('Save to backend result:', result);
        } catch (err) {
            console.log('Error saving to backend:', err);
        }
    };



    const { id } = useParams()
    const [hotel, setHotel] = useState()
    useEffect(() => {
        axios.get(`http://localhost:3001/getHotel/${id}`)
            .then(response => {
                setHotel(response.data);
                console.log(response.data)
            })
            .catch(err => console.log(err));
    }, [id]);

    const [alertOpen, setAlertOpen] = useState(false);
    const handleClose = () => {
        setAlertOpen(false);
    };
    const [alertOpen2, setAlertOpen2] = useState(false);
    const handleClose2 = () => {
        setAlertOpen2(false);
    };

    if (!hotel) return <div>Loading...</div>;

    return (

        <div className="ml-28">

            <Snackbar open={alertOpen} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    User is not logged in. Please log in to Book a Hotel.
                </Alert>
            </Snackbar>
            <Snackbar open={alertOpen2} autoHideDuration={3000} onClose={handleClose2}>
                <Alert onClose={handleClose2} severity="success" sx={{ width: '100%' }}>
                    Added to Cart.
                </Alert>
            </Snackbar>
            <h2 className="text-left ml-24 mt-10 mb-5 font-bold">{hotel.Name}</h2>

            <div className='allImages'>

                <div className='flex'>

                    <div className='flex flex-col'>

                        <img id="img1" src={hotel.photosArray[0]} className="ml-24 text-left w-[270px] h-[180px]" />
                        <img id="img2" src={hotel.photosArray[1]} className="mt-2.5 ml-24 text-left w-[270px] h-[180px]" />

                    </div>

                    <img id="img3" src={hotel.photosArray[2]} className="ml-2.5 w-[500px] h-[370px] object-cover" />

                    <div className='ml-9 bg-gray-200 w-[300px] h-[370px]'>
                        {/* review box */}

                        <h5 className="text-3xl font-bold mb-2 text-center mt-3">Rating:</h5>

                        <p style={{ width: '60px', borderRadius: '10px', marginLeft: '115px', color: 'white', border: '10px solid #003B95', backgroundColor: '#003B95' }}
                            className="text-3xl text-left mt-4 mb-2 font-bold">
                            {hotel.Rate}
                        </p>



                        <p style={{ marginLeft: '90px', color: '#003B95' }} className="text-2xl text-left mt-2 mb-16 font-bold">{hotel.Rating_e}</p>
                        <h5 className="text-2xl font-bold mb-2 text-center mt-6">Number of positive reviews:</h5>
                        <p style={{ marginLeft: '80px', color: '#003B95' }} className="text-2xl text-left mt-4 mb-2 font-bold text-yellow-500">{hotel.Rating_r}</p>

                    </div>


                </div>

                <div className="mt-2.5 ml-24 flex">

                    <img id="img4" src={hotel.Photo} className="w-[187.5px] h-[150px] object-cover" />
                    <img id="img5" src={hotel.photosArray[3]} className="ml-2.5 w-[187.5px] h-[150px] object-cover" />
                    <img id="img6" src={hotel.photosArray[4]} className="ml-2.5 w-[187.5px] h-[150px] object-cover" />
                    <img id="img7" src={hotel.photosArray[5]} className="ml-2.5 w-[187.5px] h-[150px] object-cover" />
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.7251788237186!2d33.81035077523702!3d27.259147276442402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14528763833af4a5%3A0xb233887b3f953be2!2sPalm%20Inn%20Hotel!5e0!3m2!1sen!2seg!4v1715126810048!5m2!1sen!2seg"
                        className="w-74 h-[150px] border-0 ml-9">

                    </iframe>


                </div>

            </div>



            <div className="mt-12 ml-24 flex flex-col">

                <div className="flex w-auto">

                    <div className="p-2 flex items-center border border-gray-300 rounded-md w-[200px]" style={{ width: '200px' }}>

                        <img src={coffeepic} width="20" height="20" style={{ marginRight: '10px', marginLeft: '10px' }} />

                        <p>Fabolous Breakfast</p>
                    </div>

                    <div className='p-2 flex items-center border border-gray-300 rounded-md ml-8 h-16' style={{ width: '260px' }}>

                        <img src={poolpic} width="30" height="30" style={{ marginRight: '10px', marginLeft: '10px' }} />

                        <p> Outdoor swimming pool</p>
                    </div>

                    <div className='p-2 flex items-center border border-gray-300 rounded-md ml-8 h-16' style={{ width: '190px' }}>

                        <img src={carpic} width="30" height="30" style={{ marginRight: '10px', marginLeft: '10px' }} />
                        <p> Free parking  </p>
                    </div>

                    <div className='p-2 flex items-center border border-gray-300 rounded-md ml-8 h-16' style={{ width: '180px' }}>
                        <img src={forkpic} width="30" height="30" style={{ marginRight: '10px', marginLeft: '10px' }} />
                        <p className="">Restaurants</p>



                    </div>
                    <div className='p-2 flex items-center border border-gray-300 rounded-md ml-8 h-16' style={{ width: '160px' }}>
                        <img src={balconypic} width="30" height="30" style={{ marginRight: '10px', marginLeft: '10px' }} />
                        <p>Balcony</p>
                    </div>


                </div>

                <div className="flex mt-5 ">


                    <div className='p-2 flex items-center border border-gray-300 rounded-md w-[200px]' style={{ width: '230px' }}>

                        <img src={showerpic} width="30" height="30" style={{ marginRight: '10px', marginLeft: '10px' }} />

                        <p>Private bathroom</p>

                    </div>

                    <div className='p-2 flex items-center border border-gray-300 rounded-md ml-8 h-16' style={{ width: '160px' }}>

                        <img src={eyepic} width="30" height="30" style={{ marginRight: '10px', marginLeft: '10px' }} />

                        <p> Nice view</p>

                    </div>

                    <div className='p-2 flex items-center border border-gray-300 rounded-md ml-8 h-16' style={{ width: '220px' }}>

                        <img src={buspic} width="30" height="30" style={{ marginRight: '10px', marginLeft: '10px' }} />

                        <p> Airport Shuttle</p>

                    </div>

                    <div className='p-2 flex items-center border border-gray-300 rounded-md ml-8 h-16' style={{ width: '200px' }}>

                        <img src={wifipic} width="30" height="30" style={{ marginRight: '10px', marginLeft: '10px' }} />

                        <p>Free wifi</p>

                    </div>

                    <div className='p-2 flex items-center border border-gray-300 rounded-md ml-8 h-16' style={{ width: '180px' }}>

                        <img src={seapic} width="30" height="30" style={{ marginRight: '10px', marginLeft: '10px' }} />

                        <p>Sea view</p>
                    </div>



                </div>



            </div>


            <div className="mt-32 flex">

                <div className=" w-[800px]">
                    <p className="ml-24 mr-26"> You`re eligible for a Genius discount at Palm Inn Suites Hotel! To save at this property, all you have to do is sign in.
                        Facing the beachfront, Palm Inn Suites Hotel offers 4-star accommodation in Hurghada and has an outdoor swimming
                        <br /> pool, shared lounge and terrace. The property features a bar, as well as a restaurant serving Italian cuisine.
                        <br />
                        <br />
                        The accommodation features a 24-hour front desk, airport transfers, a kids` club and free WiFi.

                        The hotel will provide guests
                        with air-conditioned rooms offering a wardrobe, a kettle, a fridge, a minibar, a safety deposit box, a flat-screen TV,
                        a balcony and a private bathroom with a bidet.<br />
                        At Palm Inn Suites Hotel rooms are equipped with bed linen and towels.

                        The daily breakfast offers <br /> <br />buffet, continental or
                        Full English/Irish options.

                        You can play billiards and table tennis at the accommodation, and the area is popular for hiking.

                        Popular points of interest near Palm Inn Suites Hotel include Elysees Dream Beach,
                        Qesm Hurghada Public Beach and El Sawaki Beach.
                        <br /><br />The nearest airport is Hurghada International Airport, 9 km from the hotel.
                        <br />
                        Distance in property description is calculated using © OpenStreetMap
                    </p>
                </div>

                {/* THIS ONE IS A VALID COMMENT */}



                <div className="ml-24 bg-blue-100 w-[300px] h-[410px] border-2 border-blue-100 rounded-md">


                    <div className='pl-5'>
                        <h3 className="text-xl font-bold">Property highlights</h3>
                        <h4 className="text-lg font-bold mt-6 mb-3">Breakfast Info</h4>
                        <p className=' m-1 p-1 text-base'>Continental, Italian, Full English/Irish, Vegetarian,
                            Halal, American, Buffet.</p>

                        <h4 className="text-lg font-bold mt-6 mb-3">Rooms with:</h4>

                        <div className="flex items-center mt-0 mb-1 py-0">

                            <img src={citypic} width="20" height="20" />

                            <p className="ml-3">City view</p>
                        </div>

                        <div className="flex items-center mt-0 mb-1 py-0">

                            <img src={lakepic} width="20" height="20" />

                            <p className="ml-3">Lake view</p>
                        </div>

                        <div className="flex items-center mt-0 mb-1 py-0">

                            <img src={seapic} width="20" height="20" />

                            <p className="ml-3">Sea view</p>
                        </div>


                        <div className="flex items-center mt-0 mb-1 py-0">

                            <img src={poolpic} width="20" height="20" />

                            <p className="ml-3">Pool with a view</p>
                        </div>

                        <div className="flex items-center mt-0 mb-1 py-0">

                            <img src={carpic} width="20" height="20" />

                            <p className="ml-3">Free parking</p>
                        </div>

                        <button
                            className="mt-3 ml-8 w-48 px-4 py-2 bg-blue-600 text-white border-none rounded-md text-base cursor-pointer transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md hover:shadow-lg"
                            onClick={() => handleBook(hotel)}
                        >
                            Reserve
                        </button>


                    </div>


                </div>

            </div>
            <Cart />
        </div>
    );
}
export default Hotel;