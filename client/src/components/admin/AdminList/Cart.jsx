import "react";
import ratingImage from "../../assets/rating.png";
import numberImage from "../../assets/number-8.png";
import wifiImage from "../../assets/wifi-signal.png";
import parkingImage from "../../assets/parking-area.png";
import poolImage from "../../assets/swimming.png";
import "./cart.css";

const Cart = () => {
    return (
        <div>
            <div className="YourCart">Your Cart</div><br></br>
            <div className="ctitems">1 item at checkout</div>
            <div className="Hotel"></div>
            <div className="headresort"> Resort</div>
            <img src={ratingImage} width="120" height="120" className="stars"/>
            <div className="hotelname">Steigenberger Makadi - Adults Friendly 16 Years Plus</div>
            <div className="address">Safaga Road, 32KM P.O box 178, Makadi Bay, 178 Hurghada, Egypt</div>
            <img src={numberImage} width="30" height="30" className="number8"/>
            <div className="wond">Wonderful . 339 reviews</div>
            <img src={wifiImage} width="30" height="30" className="wifi"/>
            <div className="wififree">Free Wifi</div>
            <img src={parkingImage} width="28" height="28" className="parking"/>
            <div className="parkingdet">Parking</div>
            <img src={poolImage} width="28" height="28" className="pool"/>
            <div className="pooldet">Swimming Pool</div>
            <div className="urbooking"> Your Booking Details</div>
            <div className="checkin">Check-in</div>
            <div className="checkindate">
                Fri, June 1 , 2024
            </div>
            <div className="checkout">Check-out</div>
            <div className="checkoutdate">
                Fri, June 7 , 2024
            </div>
            <div className="YouSelected">You Selected</div>
            <div className="YouSelecteddet">1 room for 2 adults</div>
            <div className="Res">Chinese Restraunt Reservation</div>
            <div className="Price">Price</div>
            <div className="money">$1500</div>
            <button className="checkout-button">Proceed to Checkout</button>
        </div>
    );
};
export default Cart;