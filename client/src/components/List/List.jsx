import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./List.css";
import axios from 'axios';

const List = () => {
  const navigate = useNavigate();
  
  const [goOptions, setGoOptions] = useState([]);
  const [priceOptions, setPriceOptions] = useState([]);
  const [rateOptions, setRateOptions] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedRate, setSelectedRate] = useState('');
  const [selectedCont, setSelectedCont] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/places')
      .then(response => setGoOptions(response.data))
      .catch(error => console.error('Error fetching data:', error));

    axios.get('http://localhost:3001/rating')
      .then(response => setRateOptions(response.data))
      .catch(error => console.error('Error fetching data:', error));

    axios.get('http://localhost:3001/price')
      .then(response => setPriceOptions(response.data))
      .catch(error => console.error('Error fetching data:', error));

    axios.get('http://localhost:3001/getHotels')
      .then(response => setHotels(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const fetchFilteredData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/SearchHotels', {
        params: {
          Location: selectedCont,
          Rating: selectedRate,
          Price: selectedPrice,
        },
      });
      setFilteredData(response.data);
      console.log('Filtered data fetched:', response.data);
    } catch (error) {
      console.error('Error fetching filtered data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchFilteredData();
  };

  return (
    <div className="">
      <div id="custom-header" className="relative">
        <div id="custom-MainRect" className="relative bg-blue-900 p-8 flex justify-between items-center text-white">
          <div>
            <div id="custom-Find" className="text-3xl font-medium">Find your next stay</div>
            <div id="custom-befsearch" className="text-lg font-serif">Search deals on hotels and much more...</div>
          </div>
          <form className="flex items-center" onSubmit={handleSubmit}>
            <div className="relative mr-4">
              <label htmlFor="country" className="block">Where To Go</label>
              <select
                id="dropdown"
                value={selectedCont}
                onChange={(e) => setSelectedCont(e.target.value)}
                className="w-40 py-2 px-2 mt-1 text-gray-700 leading-tight focus:outline-none border border-gray-300 rounded"
              >
                {goOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="relative mr-4">
              <label htmlFor="rating" className="block">Rating</label>
              <select
                id="dropdown"
                value={selectedRate}
                onChange={(e) => setSelectedRate(e.target.value)}
                className="w-40 py-2 px-2 mt-1 text-gray-700 leading-tight focus:outline-none border border-gray-300 rounded"
              >
                {rateOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="relative mr-4">
              <label htmlFor="price" className="block">Price</label>
              <select
                id="dropdown"
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="w-40 py-2 px-2 mt-1 text-gray-700 leading-tight focus:outline-none border border-gray-300 rounded"
              >
                {priceOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="checkInDate" className="block text-blue-900 ">~</label>
              <button type="submit" className="bg-white text-blue-900 py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-500 hover:text-white transition-colors rounded">Search</button>
            </div>
          </form>
        </div>
      </div>

      <div className='flex flex-col items-center m-5'>
      {filteredData.length > 0 ? filteredData.map((hotel) => (
        <div key={hotel._id} className="List">
          <img
            src={hotel.Photo}
            alt={hotel.Name}
            className="siImg"
          />
          <div className="siDesc">
            <div className="loc">
              <h1 className="siTitle">{hotel.Name}</h1>
              <span className="siDistance">{hotel.Location}</span>
              <span className="dot"> • </span>
              <span className="map">Show on map</span>
              <span className="dot"> • </span>
              <span className="center">{hotel.Meters}</span>
            </div>
            <span className="siTaxiOp">Getaway Deal</span>
            <div className="disc">
              <span className="siSubtitle">{hotel.Description}</span>
              <span className="siFeatures">{hotel.Features}</span>
              <br />
              <span className="siCancelOp">{hotel.Food}</span>
              <span className="siCancelOpSubtitle">{hotel.Number}</span>
            </div>
          </div>
          <div className="siDetails">
            <div className="ra">
              <div className="siRating">
                <span className="e">{hotel.Rating_e}</span>
                <span className="r">{hotel.Rating_r}</span>
              </div>
              <button>{hotel.Rate}</button>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">{hotel.Price}</span>
              <span className="siTaxOp">{hotel.Tax}</span>
              <button className="siCheckButton" onClick={() => navigate(`/hotelPage/${hotel._id}`)}>See availability</button>
            </div>
          </div>
        </div>
      )) : hotels.map((hotel) => (
        <div key={hotel._id} className="List">
          <img
            src={hotel.Photo}
            alt={hotel.Name}
            className="siImg"
          />
          <div className="siDesc">
            <div className="loc">
              <h1 className="siTitle">{hotel.Name}</h1>
              <span className="siDistance">{hotel.Location}</span>
              <span className="dot"> • </span>
              <span className="map">Show on map</span>
              <span className="dot"> • </span>
              <span className="center">{hotel.Meters}</span>
            </div>
            <span className="siTaxiOp">Getaway Deal</span>
            <div className="disc">
              <span className="siSubtitle">{hotel.Description}</span>
              <span className="siFeatures">{hotel.Features}</span>
              <br />
              <span className="siCancelOp">{hotel.Food}</span>
              <span className="siCancelOpSubtitle">{hotel.Number}</span>
            </div>
          </div>
          <div className="siDetails">
            <div className="ra">
              <div className="siRating">
                <span className="e">{hotel.Rating_e}</span>
                <span className="r">{hotel.Rating_r}</span>
              </div>
              <button>{hotel.Rate}</button>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">{hotel.Price}</span>
              <span className="siTaxOp">{hotel.Tax}</span>
              <button className="siCheckButton" onClick={() => navigate(`/hotelPage/${hotel._id}`)}>See availability</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

const ListContainer = () => {
  return (
    <div>
      <List />
    </div>
  );
};

export default ListContainer;
