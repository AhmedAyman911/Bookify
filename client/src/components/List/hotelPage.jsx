import { useState } from 'react';
//import './hotelPageStyle.css';
const Hotel = () => {
    return ( 

        <div className="ml-28">

        
        <h2 className="text-left ml-24 mt-10 mb-5 font-bold">Palm Inn Suites Hotel</h2>

        <div className='allImages'>

            <div className='flex'> 

                <div className='flex flex-col'>

                    <img id="img1" src = "./assets/pic1.webp"  className="ml-24 text-left w-[270px] h-[180px]"/>
                    <img id="img2" src = "./assets/pic7.jpg" className="mt-2.5 ml-24 text-left w-[270px] h-[180px]"/>

                </div>

                <img id="img3" src = "./assets/pic3.jpg" className="ml-2.5 w-[500px] h-[370px] object-cover"/>

                <div className='ml-9 bg-gray-200 w-[300px] h-[370px]'>
                   {/* review box */}
                   
                    <h5 className="text-2xl font-bold mb-4 text-center mt-3">Reviews</h5>
                </div>

                
            </div>

            <div  className="mt-2.5 ml-24 flex">

                <img id="img4" src = "./assets/pic6.jpg"  className="w-[187.5px] h-[150px] object-cover"/>
                <img id="img5" src = "./assets/pic5.jpg" className="ml-2.5 w-[187.5px] h-[150px] object-cover"/>
                <img id="img6" src = "./assets/pic8.webp" className="ml-2.5 w-[187.5px] h-[150px] object-cover"/>
                <img id="img7" src = "./assets/pic9.jpg" className="ml-2.5 w-[187.5px] h-[150px] object-cover"/>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.7251788237186!2d33.81035077523702!3d27.259147276442402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14528763833af4a5%3A0xb233887b3f953be2!2sPalm%20Inn%20Hotel!5e0!3m2!1sen!2seg!4v1715126810048!5m2!1sen!2seg"
                className="w-74 h-[150px] border-0 ml-9">
                        
                </iframe>


            </div>

        </div>
   


        <div className="mt-12 ml-24 flex flex-col">

            <div className="flex w-auto">

                <div className="p-2 flex items-center border border-gray-300 rounded-md w-[200px]" style={{ width: '200px'}}>

                <img src = "./assets/coffee-cup.png" width="20" height="20" style={{marginRight: '10px', marginLeft: '10px'}}/>

                <p>Fabolous Breakfast</p>
                </div>

                <div className='p-2 flex items-center border border-gray-300 rounded-md ml-8 h-16' style={{ width: '260px'}}>

                    <img src = "./assets/swim.png" width="30" height="30" style={{marginRight: '10px', marginLeft: '10px'}}/>

                    <p> Outdoor swimming pool</p>
                </div>

                <div className='p-2 flex items-center border border-gray-300 rounded-md ml-8 h-16' style={{ width: '190px'}}>

                    <img src = "./assets/car.png" width="30" height="30" style={{marginRight: '10px', marginLeft: '10px'}}/>
                    <p> Free parking  </p>
                </div>

                <div className='p-2 flex items-center border border-gray-300 rounded-md ml-8 h-16' style={{ width: '180px'}}>
                <img src = "./assets/fork.png" width="30" height="30" style={{marginRight: '10px', marginLeft: '10px'}}/>
                    <p className="">Restaurants</p>

               

                </div>
                <div className='p-2 flex items-center border border-gray-300 rounded-md ml-8 h-16' style={{ width: '160px'}}>
                    <img src = "./assets/coffee-shop.png" width="30" height="30" style={{marginRight: '10px', marginLeft: '10px'}} />
                    <p>Balcony</p>
                </div>


            </div>

            <div className="flex mt-5 ">


                <div className='p-2 flex items-center border border-gray-300 rounded-md w-[200px]' style={{ width: '230px'}}>

                    <img src = "./assets/underarm.png" width="30" height="30" style={{marginRight: '10px', marginLeft: '10px'}}/>

                    <p>Private bathroom</p>

                </div>

                <div className='p-2 flex items-center border border-gray-300 rounded-md ml-8 h-16' style={{ width: '160px'}}>

                    <img src = "./assets/eye.png" width="30" height="30" style={{marginRight: '10px', marginLeft: '10px'}}/>

                    <p> Nice view</p>

                </div>

                <div className='p-2 flex items-center border border-gray-300 rounded-md ml-8 h-16' style={{ width: '220px'}}>

                    <img src = "./assets/bus.png" width="30" height="30" style={{marginRight: '10px', marginLeft: '10px'}}/>

                    <p> Airport Shuttle</p>

                </div>

                <div className='p-2 flex items-center border border-gray-300 rounded-md ml-8 h-16' style={{ width: '200px'}}>

                    <img src = "./assets/wifi.png" width="30" height="30" style={{marginRight: '10px', marginLeft: '10px'}}/>

                    <p>Free wifi</p>

                </div>

                <div className='p-2 flex items-center border border-gray-300 rounded-md ml-8 h-16' style={{ width: '180px'}}>

                    <img src = "./assets/sea.png" width="30" height="30" style={{marginRight: '10px', marginLeft: '10px'}}/>

                    <p>Sea view</p>
                </div>

             

            </div>

            

        </div>


        <div className="mt-32 flex">

            <div className=" w-[800px]">
            <p className="ml-24 mr-26"> You're eligible for a Genius discount at Palm Inn Suites Hotel! To save at this property, all you have to do is sign in.
                Facing the beachfront, Palm Inn Suites Hotel offers 4-star accommodation in Hurghada and has an outdoor swimming
                <br /> pool, shared lounge and terrace. The property features a bar, as well as a restaurant serving Italian cuisine.
                <br /> 
                <br />
                The accommodation features a 24-hour front desk, airport transfers, a kids' club and free WiFi.

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
                    <p m-1 p-1 text-base>Continental, Italian, Full English/Irish, Vegetarian,
                     Halal, American, Buffet.</p>

                     <h4 className="text-lg font-bold mt-6 mb-3">Rooms with:</h4>
                     
                     <div className="flex items-center mt-0 mb-1 py-0">

                        <img src = "./assets/city.png" width="20" height="20"/>

                        <p className="ml-3">City view</p>
                    </div>

                    <div className="flex items-center mt-0 mb-1 py-0">

                        <img src = "./assets/lake.png" width="20" height="20"/>

                        <p className="ml-3">Lake view</p>
                    </div>

                    <div className="flex items-center mt-0 mb-1 py-0">

                        <img src = "./assets/sea.png" width="20" height="20"/>

                        <p className="ml-3">Sea view</p>
                    </div>


                    <div className="flex items-center mt-0 mb-1 py-0">

                        <img src = "./assets/swim.png" width="20" height="20"/>

                        <p className="ml-3">Pool with a view</p>
                    </div>

                    <div className="flex items-center mt-0 mb-1 py-0">

                        <img src = "./assets/car.png" width="20" height="20"/>

                        <p className="ml-3">Free parking</p>
                    </div>

                    <button className="mt-3 ml-8 w-48 bg-blue-600 text-white border-none rounded-md text-base cursor-pointer transition duration-300 ease-in-out hover:bg-blue-700">
                        Reserve</button>

                    </div>
                    

                </div>
               
        </div>
        
        </div>
       
    );
}
 
export default Hotel;