import "./List.css";

const List = () => {
  return (
    <div className="flex justify-center items-center m-5">
      <div className="List">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/250878709.jpg?k=f9a7d8f037133636aa384008abe0c52633037b28447b386dd206b0c869cca59e&o=&hp=1"
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <div className="loc">
            <h1 className="siTitle">Sunrise Arabian Beach Resort</h1>
            <span className="siDistance">Sharks Bay, Sharm El Sheikh</span> <span className="dot"> • </span> <span className="map"> Show on map </span> <span className="dot"> • </span><span className="center"> 100 m from center</span>
          </div>
          
          <span className="siTaxiOp">Getaway Deal</span>
          <div className="disc">
            <span className="siSubtitle">
              Standard Twin Room with Pool View
            </span>
            <span className="siFeatures">
              2 beds (1 king bed, 1 bunk bed)
            </span>
            <br></br>
            <span className="siCancelOp">All inclusive </span>
            <span className="siCancelOpSubtitle">
              Only 2 left left at this price on our site
            </span>
          </div>
        </div>
        <div className="siDetails">
          <div className="ra">
            <div className="siRating">
              <span className="e">Excellent</span>
              <span className="r">500 Reviews</span>
            </div>
            <button>8.9</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">$112</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ListContainer = () => {
  return (
    <div>
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};
export default ListContainer;