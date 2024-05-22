import { FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';

const CartButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const toggleCart = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      fetchCart();
    }
  };

  const fetchCart = async () => {
    try {
      const response = await axios.get('http://localhost:3001/cart');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching flights:', error);
    }
  };

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
                  <p><strong>Date:</strong> {new Date(item.date).toLocaleDateString()}</p>
                  <p><strong>Price:</strong> ${item.price}</p>
                </div>
              ))}
            </>
          ) : (
            <p>No items in the cart.</p>
          )}
          <button className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-700">
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default CartButton;
