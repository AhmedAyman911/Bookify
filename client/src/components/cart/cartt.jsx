import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { Link } from 'react-router-dom';
const CartButton = () => {

  const [uid, setUserid] = useState('');
  // Function to decode the JWT token and extract the username
  const decodeToken = (token) => {
    try {
      const decoded = jwtDecode(token);
      return decoded;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  };
  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      // Decode the token and extract the username
      const decodedToken = decodeToken(token);

      if (decodedToken) {
        setUserid(decodedToken.id);
      } else { console.log("heeeeeeeeeeeelp") }
    }
  }, []);





  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const toggleCart = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      fetchCart(uid);
    }
  };

  const fetchCart = async (uid) => {
    try {
      const response = await axios.get(`http://localhost:3001/cart?uid=${uid}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };
  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`http://localhost:3001/cart/${itemId}`);
      setData(prevReservations => prevReservations.filter(item => item._id !== itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };
  const totalPrice = data.reduce((acc, item) => acc + parseFloat(item.price), 0);

  return (

    <div className="fixed bottom-4 right-4">
      <button
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
        onClick={toggleCart}
      >
        <FaShoppingCart size={24} />
      </button>
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white shadow-lg rounded-lg p-4 overflow-y-auto max-h-96">
          <h2 className="text-lg font-bold mb-4">Your Reservations</h2>
          {data.length > 0 ? (
            <>
              {data.map((item, index) => (
                <div key={index} className="mb-4 bg-blue-100 p-2 rounded">
                  <p><strong>Item:</strong> {item.item}</p>
                  <div className="flex justify-between items-center">
                    {item.date && !isNaN(new Date(item.date).getTime()) && (
                      <p>
                        <strong>Date:</strong> {new Date(item.date).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <p><strong>Price:</strong> ${item.price}</p>
                    <button
                      className="text-red-500 hover:text-red-700 mr-2"
                      onClick={() => handleDelete(item._id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
              <p className="font-bold text-lg">
                Total: 
                <span className="text-green-500"> {totalPrice.toFixed(2)} $</span> 
              </p>
              <Link to='/payment'>
            <button className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-700">
              Proceed to Payment
            </button></Link>
            </>
          ) : (
            <p className='mb-5'>No items in the cart.</p>
          )}
          
        </div>
      )}
    </div>
  );
};

export default CartButton;
