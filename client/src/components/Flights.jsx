import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { GoArrowSwitch, GoArrowRight } from 'react-icons/go';
import axios from 'axios';

const SearchComponent = ({
  selectOption1,
  selectOption2,
  onSelectOption1Change,
  onSelectOption2Change,
  onSubmit,
}) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/combined-unique')
      .then(response => setOptions(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="mx-auto bg-yellow-400">
      <br />
      <div className="max-w-xl mx-auto bg-white rounded-xl overflow-hidden shadow-md flex justify-between">
        <div className="px-4 py-2">
          <label htmlFor="dropdown1" className="text-gray-700">From: </label>
          <select
            id="dropdown1"
            value={selectOption1}
            onChange={onSelectOption1Change}
            className="w-full py-2 px-2 mt-1 text-gray-700 leading-tight focus:outline-none border border-gray-300 rounded"
          >
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="flex justify-center items-center text-5xl">
          <GoArrowSwitch />
        </div>
        <div className="px-4 py-2">
          <label htmlFor="dropdown2" className="text-gray-700">To: </label>
          <select
            id="dropdown2"
            value={selectOption2}
            onChange={onSelectOption2Change}
            className="w-full py-2 px-2 mt-1 text-gray-700 leading-tight focus:outline-none border border-gray-300 rounded"
          >
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <button onClick={onSubmit} className="bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors">
          Search
        </button>
      </div>
      <br />
    </div>
  );
};

// Add prop validation for SearchComponent
SearchComponent.propTypes = {
  selectOption1: PropTypes.string.isRequired,
  selectOption2: PropTypes.string.isRequired,
  onSelectOption1Change: PropTypes.func.isRequired,
  onSelectOption2Change: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const Card = () => {

  const [filteredData, setFilteredData] = useState([]);
  const [selectOption1, setSelectOption1] = useState('');
  const [selectOption2, setSelectOption2] = useState('');

  useEffect(() => {
    fetchFlights();
  }, []);

  const fetchFlights = async () => {
    try {
      const response = await axios.get('http://localhost:3001/flights');
      setFilteredData(response.data);
    } catch (error) {
      console.error('Error fetching flights:', error);
    }
  };

  const fetchFilteredData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/Searchflights', {
        params: {
          from: selectOption1,
          to: selectOption2,
        },
      });
      setFilteredData(response.data);
      console.log('Filtered data fetched:', response.data);
    } catch (error) {
      console.error('Error fetching filtered data:', error);
    }
  };

  const handleSelectOption1Change = (e) => setSelectOption1(e.target.value);
  const handleSelectOption2Change = (e) => setSelectOption2(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchFilteredData();
  };

  return (
    <div>
      <SearchComponent
        selectOption1={selectOption1}
        selectOption2={selectOption2}
        onSelectOption1Change={handleSelectOption1Change}
        onSelectOption2Change={handleSelectOption2Change}
        onSubmit={handleSubmit}
      />
      {filteredData.map((flight) => (
        <div key={flight._id} className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden m-5 transition duration-300 ease-in-out transform hover:shadow-xl hover:-translate-y-1">
          <img className="w-full h-64 object-cover" src={flight.photo} alt={flight.flightName} />
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{flight.flightName}</h2>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                Book
              </button>
            </div>
            <p className="text-gray-600 mt-2">Departure: {new Date(flight.date).toLocaleDateString()}</p>
            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-gray-700">{flight.departureTime}</p>
                <p className="text-gray-500">{flight.from}</p>
              </div>
              <div className="text-5xl">
                <GoArrowRight />
              </div>
              <div>
                <p className="text-gray-700">{flight.arrivalTime}</p>
                <p className="text-gray-500">{flight.to}</p>
              </div>
              <p className="text-green-500 font-semibold">${flight.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Flights = () => {
  return (
    <div>
      <Card />
    </div>
  );
};

export default Flights;
