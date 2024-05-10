import { useState } from "react";
import { IoPersonOutline, IoLocationOutline } from "react-icons/io5";
import { MdCardTravel } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { FaCalendarDays } from "react-icons/fa6";
function Search() {
  const [selectedType, setSelectedType] = useState('');
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };
  const [selectedDate, setSelectedDate] = useState('');
  const handleselectedDate = (event) => {
    setSelectedDate(event.target.value);
  };
  const [selectedDays, setSelectedDays] = useState('');
  const handleselectedDays = (event) => {
    setSelectedDays(event.target.value);
  };
  const [selectedLoc, setSelectedLoc] = useState('');
  const handleselectedLoc = (event) => {
    setSelectedLoc(event.target.value);
  };

  return (
    <div className="mx-auto bg-yellow-400 ">
      <br />
      <div className="max-w-3xl mx-auto bg-white rounded-xl overflow-hidden shadow-md flex justify-between">
        <div className="px-4 py-2">
          <label htmlFor="dropdown" className="text-gray-700">Type: </label>
          <select
            id="dropdown"
            value={selectedType}
            onChange={handleTypeChange}
            className="w-full py-2 px-2 mt-1 text-gray-700 leading-tight focus:outline-none border border-gray-300 rounded"
          >
            <option value="">Select...</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
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
            value={selectedDays}
            onChange={handleselectedDays}
            className="w-full py-2 px-2 mt-1 text-gray-700 leading-tight focus:outline-none border border-gray-300 rounded"
          >
            <option value="">Select...</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="px-4 py-2">
          <label htmlFor="dropdown" className="text-gray-700">Location: </label>
          <select
            id="dropdown"
            value={selectedLoc}
            onChange={handleselectedLoc}
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
      <br />
    </div>
  );
}
function Card() {
  return (
    <div className="max-w-2xl  mx-auto bg-white shadow-md rounded-md overflow-hidden m-5 transition duration-300 ease-in-out transform hover:shadow-xl hover:-translate-y-1">
      <div className="flex gap-x-3">
        <img className="w-1/3 h-auto object-cover max-w-1/3 p-5" src="https://www-europe.nissan-cdn.net/content/dam/Nissan/eg/vehicles/sunny/product_code/product_version/design/SUNNY-CAR.jpg.ximg.l_12_m.smart.jpg"
          alt="Car img" />
        <div className="p-4 flex flex-col justify-between flex-grow">
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Nissan Sunny</h2>
              <p className="text-green-500 font-semibold">$300</p>
            </div>
            <div className="flex items-center mt-2">
              <IoLocationOutline />
              <p className="text-blue-600 ml-1 font-bold underline">Giza</p>
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex items-center">
                <IoPersonOutline />
                <p className="text-gray-600 ml-1">4 seats</p>
              </div>
              <div className="flex items-center">
                <MdCardTravel />
                <p className="text-gray-600 ml-1">2 Bags</p>
              </div>
              <div className="flex items-center">
                <LuCalendarDays />
                <p className="text-gray-600 ml-1">3 Days</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex items-center">
              <FaCalendarDays />
              <p className="text-gray-600 ml-1">20 May 2024</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}



export default function CarRentals() {

  return (
    <div>
      <Search />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}