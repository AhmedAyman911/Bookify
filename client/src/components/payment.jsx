import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        country: '',
        email: '',
        address: '',
        paymentMethod: 'visa', // Default to Visa
        visaInfo: {
            cvv: '',
            cardname: '',
            cardnum: '',
            exp: ''
        },
        cashInfo: '' // Placeholder for cash payment details
    });
    const handleVisaInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            visaInfo: {
                ...formData.visaInfo,
                [name]: value
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        navigate("/thankyou");
    };

    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-100 to-blue-300">
            <form onSubmit={handleSubmit} className="bg-white p-10 rounded-xl shadow-lg w-[700px]">
                {formData.paymentMethod === 'visa' && (
                    <div className="flex flex-col items-center">
                        <h2 className="text-3xl font-bold text-blue-800 mb-8">Payment Information</h2>
                        <div className="w-full flex flex-wrap justify-between mb-6">
                            <label className="w-[45%] font-bold text-left text-black">
                                Name on card:
                                <input
                                    placeholder="John Doe"
                                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                                    type="text"
                                    name="cardname"
                                    value={formData.visaInfo.cardname}
                                    onChange={handleVisaInputChange}
                                    required  // Required field
                                />
                            </label>
                            <label className="w-[45%] font-bold text-left text-black">
                                Card Number:
                                <input
                                    placeholder="**** **** **** ****"
                                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                                    type="text"
                                    name="cardnum"
                                    value={formData.visaInfo.cardnum}
                                    onChange={handleVisaInputChange}
                                    required  // Required field
                                />
                            </label>
                        </div>
                        <div className="w-full flex flex-wrap justify-between mb-6">
                            <label className="w-[45%] font-bold text-left text-black">
                                CVV:
                                <input
                                    placeholder="***"
                                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                                    type="text"
                                    name="cvv"
                                    value={formData.visaInfo.cvv}
                                    onChange={handleVisaInputChange}
                                    required  // Required field
                                />
                            </label>
                            <label className="w-[45%] font-bold text-left text-black">
                                Expiry date:
                                <input
                                    placeholder="MM/YYYY"
                                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                                    type="text"
                                    name="exp"
                                    value={formData.visaInfo.exp}
                                    onChange={handleVisaInputChange}
                                    required  // Required field
                                />
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-indigo-400 transition duration-300"
                        >
                            Submit
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default PaymentForm;
