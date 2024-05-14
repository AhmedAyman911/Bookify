import { useState, useEffect } from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import { IoPersonOutline, IoLocationOutline } from "react-icons/io5";
import { MdCardTravel } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { FaCalendarDays } from "react-icons/fa6";
import axios from 'axios';

const SearchComponent = ({
  selectOption1,
  selectOption2,
  selectOption3,
  selectedDate,
  onSelectOption1Change,
  onSelectOption2Change,
  onSelectOption3Change,
  handleselectedDate,
  onSubmit,
}) =>{
  
  const [TypeOptions, setTypeOptions] = useState([]);
  const [DaysOptions, setDaysOptions] = useState([]);
  const [LoctionOptions, setLoctionOptions] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/carType')
      .then(response => setTypeOptions(response.data))
      .catch(error => console.error('Error fetching Type data:', error));
  }, []);
  useEffect(() => {
    axios.get('http://localhost:3001/carDays')
      .then(response => setDaysOptions(response.data))
      .catch(error => console.error('Error fetching Days data:', error));
  }, []);
  useEffect(() => {
    axios.get('http://localhost:3001/carLocation')
      .then(response => setLoctionOptions(response.data))
      .catch(error => console.error('Error fetching Location data:', error));
  }, []);

  return (
    <div className="mx-auto bg-yellow-400 ">
      <br />
      <div className="max-w-3xl mx-auto bg-white rounded-xl overflow-hidden shadow-md flex justify-between">
        <div className="px-4 py-2">
          <label htmlFor="dropdown" className="text-gray-700">Type: </label>
          <select
            id="dropdown"
            value={selectOption1}
            onChange={onSelectOption1Change}
            className="w-full py-2 px-2 mt-1 text-gray-700 leading-tight focus:outline-none border border-gray-300 rounded"
          >
            {TypeOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="px-4 py-2">
          <label htmlFor="dropdown" className="text-gray-700">Date: </label>
          <input type="date" id="checkInDate" name="checkInDate"
            value={selectedDate}
            onChange={handleselectedDate}
            className="w-full py-2 px-2 mt-1 text-gray-700 leading-tight focus:outline-none border border-gray-300 rounded" />
        </div>

        <div className="px-4 py-2">
          <label htmlFor="dropdown" className="text-gray-700">Days: </label>
          <select
            id="dropdown"
            value={selectOption2}
            onChange={onSelectOption2Change}
            className="w-full py-2 px-2 mt-1 text-gray-700 leading-tight focus:outline-none border border-gray-300 rounded"
          >
            {DaysOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="px-4 py-2">
          <label htmlFor="dropdown" className="text-gray-700">Location: </label>
          <select
            id="dropdown"
            value={selectOption3}
            onChange={onSelectOption3Change}
            className="w-full py-2 px-2 mt-1 text-gray-700 leading-tight focus:outline-none border border-gray-300 rounded"
          > {LoctionOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
          </select>
        </div>

        <button onClick={onSubmit} className="bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors ">
          Search
        </button>
      </div>
      <br />
    </div>
  );
}
// Add prop validation for SearchComponent
SearchComponent.propTypes = {
  selectOption1: PropTypes.string.isRequired,
  selectOption2: PropTypes.string.isRequired,
  selectOption3: PropTypes.string.isRequired,
  selectedDate: PropTypes.string.isRequired,
  onSelectOption1Change: PropTypes.func.isRequired,
  onSelectOption2Change: PropTypes.func.isRequired,
  onSelectOption3Change: PropTypes.func.isRequired,
  handleselectedDate: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
const Card = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [selectOption1, setSelectOption1] = useState('');
  const [selectOption2, setSelectOption2] = useState('');
  const [selectOption3, setSelectOption3] = useState('');
  const [selectedDate, setselectedDate] = useState('');
  const fetchCars = async () => {
    try {
      const response = await axios.get('http://localhost:3001/car-rentals');
      setFilteredData(response.data);
    } catch (error) {
      console.error('Error fetching Cars:', error);
    }
  };
  useEffect(() => {
    fetchCars();
  }, []);
  const fetchFilteredData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/SearchCars', {
        params: {
          type: selectOption1,
          days: selectOption2,
          location: selectOption3,
          date: selectedDate,
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
  const handleSelectOption3Change = (e) => setSelectOption3(e.target.value);
  const handleselectedDate = (e) => setselectedDate(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchFilteredData();
  };
  return (
    <div>
      <SearchComponent
        selectOption1={selectOption1}
        selectOption2={selectOption2}
        selectOption3={selectOption3}
        selectedDate={selectedDate}
        onSelectOption1Change={handleSelectOption1Change}
        onSelectOption2Change={handleSelectOption2Change}
        onSelectOption3Change={handleSelectOption3Change}
        handleselectedDate={handleselectedDate}
        onSubmit={handleSubmit}
      />
    {filteredData.map((car) => (
      <div key={car._id} className="max-w-2xl  mx-auto bg-white shadow-md rounded-md overflow-hidden m-5 transition duration-300 ease-in-out transform hover:shadow-xl hover:-translate-y-1">
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
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default function CarRentals() {

  return (
    <div>
      <Card />
    </div>
  )
}