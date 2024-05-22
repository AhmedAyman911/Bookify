import { useState } from 'react';
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
        exp:''
      },
      cashInfo: '' // Placeholder for cash payment details
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
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
      // Handle form submission logic here
      console.log(formData);
    };
 
    return (
      <div className="">
          <form onSubmit={handleSubmit}>
              {formData.paymentMethod === 'visa' && (
                  <div className=" bg-white mt-12 ml-[450px] w-[700px] h-[650px] border-l-[5px] border-r-[5px] border-t-[5px] border-b-[5px] border-[black] rounded-[80px]">{/*paymentsec*/}
                      <h2 className="ml-[200px] mt-12 mb-[50px]">Payment Information</h2>
                      <div className="flex flex-wrap">
                          <label className="ml-[110px] font-bold text-left text-black">
                              Name on card:
                              <br/>
                              <input placeholder="John Doe" className="w-[150px] p-[10px] mb-[15px] border border-[#ced4da] rounded-[5px] text-[16px] text-[#495057] bg-[#fff]" type="text" name="cardname" value={formData.visaInfo.clientNumber} onChange={handleVisaInputChange}/>
                          </label>
                          <label id='cardnum' className="font-bold text-left text-black ml-[150px]" >
                              Card Number:
                              <br/>
                              <input placeholder=" **** **** **** **** ****" className="w-[200px] p-[10px] mb-[15px] border border-[#ced4da] rounded-[5px] text-[16px] text-[#495057] bg-[#fff]" type="text" name="cardNumber" value={formData.visaInfo.cardNumber} onChange={handleVisaInputChange}/>
                          </label>
                      </div>
                      <div className="ml-130 flex flex-wrap">
                          <label id='cvv' className="font-bold text-left text-black ml-[110px] mt-[20px]">
                              CVV:
                              <br/>
                              <input placeholder="***" className="w-[100px] p-[10px] mb-[15px] border border-[#ced4da] rounded-[5px] text-[16px] text-[#495057] bg-[#fff]" type="text" name="cvv" value={formData.visaInfo.cvv} onChange={handleVisaInputChange}/>
                          </label>
                          <label id='exp' className="font-bold text-left text-black ml-[200px] mt-[20px]">
                              Expiry date:
                              <br/>
                              <input placeholder="MM/YYYY" className="w-[100px] p-[10px] mb-[15px] border border-[#ced4da] rounded-[5px] text-[16px] text-[#495057] bg-[#fff]" type="text" name="cvv" value={formData.visaInfo.exp} onChange={handleVisaInputChange}/>
                          </label>
                      </div>
                      
                      <button type="submit" className="ml-[280px] mt-[100px] hover:bg-indigo-400 m-100 ml-120 w-200 bg-blue-900 text-white border-none rounded-5 p-15 text-lg cursor-pointer transition duration-300 ease-in-out">Submit</button>
                  </div>
              )}
          </form>
      </div>
  );
  
};

export default PaymentForm;
