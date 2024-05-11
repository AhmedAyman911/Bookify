import { useState } from "react";
import { GoArrowSwitch,GoArrowRight } from "react-icons/go";
function Search() {
  const [tripType, setTripType] = useState('oneWay');
  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [selectedOption2, setSelectedOption2] = useState('');
  const handleOption2Change = (event) => {
    setSelectedOption2(event.target.value);
  };

  return (
    <div className="mx-auto bg-yellow-400">
     <div className="flex justify-center items-center mb-2">
      <label className="mr-2">
        <input
          type="radio"
          value="oneWay"
          checked={tripType === 'oneWay'}
          onChange={handleTripTypeChange}
          className="mr-1"
        />
        One Way
      </label>

      <label>
        <input
          type="radio"
          value="roundTrip"
          checked={tripType === 'roundTrip'}
          onChange={handleTripTypeChange}
          className="mr-1"
        />
        Round Trip
      </label>
      
    </div>
    
    <div className="max-w-xl mx-auto bg-white rounded-xl overflow-hidden shadow-md flex justify-between">
      <div className="px-4 py-2">
        <label htmlFor="dropdown" className="text-gray-700">From: </label>
        <select
          id="dropdown"
          value={selectedOption}
          onChange={handleOptionChange}
          className="w-full py-2 px-2 mt-1 text-gray-700 leading-tight focus:outline-none border border-gray-300 rounded"
        >
          <option value="">Select...</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="flex justify-center items-center text-5xl" >
      <GoArrowSwitch />
      </div>
      <div className="px-4 py-2">
        <label htmlFor="dropdown" className="text-gray-700">To : </label>
        <select
          id="dropdown"
          value={selectedOption2}
          onChange={handleOption2Change}
          className="w-full py-2 px-2 mt-1 text-gray-700 leading-tight focus:outline-none border border-gray-300 rounded"
        >
          <option value="">Select...</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors ">
        Search
      </button>
    </div>
    <br/>
    </div>
  );
}
function Card(){
  return (
  <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden m-5 transition duration-300 ease-in-out transform hover:shadow-xl hover:-translate-y-1">
    <img className="w-full h-64 object-cover" src="https://media.istockphoto.com/id/531423754/photo/egyptair-a320-taking-off.jpg?s=612x612&w=0&k=20&c=860At5wVXbF-qeAEjDoXXdPF8TfdsalMPbrN3hcBH-I="
      alt="Flight to Paris" />
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Paris</h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Book
        </button>
      </div>
      <p className="text-gray-600 mt-2">Departure: 20 May 2024</p>
      <div className="flex justify-between items-center mt-4">
        <div>
          <p className="text-gray-700">09:00 AM</p>
          <p className="text-gray-500">Cairo</p>
        </div>
        <div className="text-5xl">
        <GoArrowRight />
        </div>
        <div>
          <p className="text-gray-700">03:00 PM</p>
          <p className="text-gray-500">Paris</p>
        </div>
        <p className="text-green-500 font-semibold">$300</p>
    </div>
  </div>
</div>
 
)
}
export default function Flights() {

    return (
      <div>
        <Search />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    )
}