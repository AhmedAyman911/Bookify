import { useState, useEffect } from 'react';
import "./List.css";
import axios from 'axios'

const List = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/getHotels')
      .then(response => setHotels(response.data))
      .catch(err => console.log(err));
  }, []);


 
  const handleButtonClick = () => {
    navigate('/hotelPage');
  }; 
  return (
    <div className="flex flex-col items-center m-5">
      <br/>
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
              <button className="siCheckButton" onClick={handleButtonClick} >See availability</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const ListContainer = () => {
  return (
    <div>
      <List />
      {/* <List />
      <List />
      <List />
      <List /> */}
    </div>
  );
};

export default ListContainer;