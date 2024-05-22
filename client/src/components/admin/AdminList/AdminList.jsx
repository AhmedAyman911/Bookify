import { useState, useEffect } from 'react';
import "./AdminList.css";
import axios from 'axios';
import { MdModeEditOutline, MdDelete, MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';

const List = () => {
  const [hotels, setHotels] = useState([]);

  const handleDelete = async (hotelId) => {
    try {
      await axios.delete(`http://localhost:3001/adminHotels/${hotelId}`);
      setHotels(prevHotels => prevHotels.filter(hotel => hotel._id !== hotelId));
    } catch (error) {
      console.error('Error deleting hotel:', error);
    }
  };

  useEffect(() => {
    axios.get('http://localhost:3001/getHotels')
      .then(response => setHotels(response.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='flex flex-col items-center m-5'>
      {hotels.map((hotel) => (
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
              <div>
              <div className="iconRow">
              <div className="editIconContainer">
              <Link to={`/editHotels/${hotel._id}`} className="">
              <MdModeEditOutline className="edittt" />
              </Link>
            </div>
            <div className="deleteIconContainer" onClick={() => handleDelete(hotel._id)}>
              <MdDelete className="deletee" />
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const ListContainer2 = () => {
  return (
    <div>
      <List />
      <div className="addButtonContainer" >
      <Link to="/addHotels" className="inline-block">
      <MdAdd className="addButton"/>
      </Link>
      </div>
    </div>
  );
};

export default ListContainer2;
