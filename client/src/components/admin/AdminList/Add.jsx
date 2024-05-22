import "./Add.css";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const navigateTo = useNavigate();

    const [formData, setFormData] = useState({
        Name: '',
        Photo: '',
        Location: '', 
        Meters: '',
        Deals: '',
        Description: '',
        Features: '',
        Food: '',
        Number: '',
        Rating_e: '',
        Rating_r: '',
        Rate: '',
        Price: '',
        Tax: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/addNewHotel', formData)
            .then(result => { 
                console.log(result);
                navigateTo('/adminHotels');
            })
            .catch(err => console.log(err));
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <h2 className="form-title">Hotel Information</h2>
            <div className="form-group">
                <label htmlFor="Name" className="form-label">Hotel Name:</label>
                <input
                    type="text"
                    id="Name"
                    name="Name"
                    value={formData.Name}
                    placeholder=" "
                    onChange={handleChange}
                    required
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <label htmlFor="Photo" className="form-label">Photo:</label>
                <input
                    type="text"
                    id="Photo"
                    name="Photo"
                    value={formData.Photo}
                    placeholder=""
                    onChange={handleChange}
                    required
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <label htmlFor="Location" className="form-label">Location:</label>
                <input
                    type="text"
                    id="Location"
                    name="Location"
                    value={formData.Location}
                    placeholder=""
                    onChange={handleChange}
                    required
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <label htmlFor="Meters" className="form-label">Distance from Center:</label>
                <input
                    type="text"
                    id="Meters"
                    name="Meters"
                    value={formData.Meters}
                    placeholder=""
                    onChange={handleChange}
                    required
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <label htmlFor="Description" className="form-label">Room Description:</label>
                <input
                    type="text"
                    id="Description"
                    name="Description"
                    value={formData.Description}
                    placeholder=" "
                    onChange={handleChange}
                    required
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <label htmlFor="Features" className="form-label">Number of beds:</label>
                <input
                    type="text"
                    id="Features"
                    name="Features"
                    value={formData.Features}
                    placeholder=""
                    onChange={handleChange}
                    required
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <label htmlFor="Food" className="form-label">Food:</label>
                <input
                    type="text"
                    id="Food"
                    name="Food"
                    value={formData.Food}
                    placeholder=""
                    onChange={handleChange}
                    required
                    className="form-input"
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="Number" className="form-label">Number of Available Rooms:</label>
                <input
                    type="text"
                    id="Number"
                    name="Number"
                    value={formData.Number}
                    placeholder=""
                    onChange={handleChange}
                    required
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <label htmlFor="Rate" className="form-label">Hotel Rate:</label>
                <input
                    type="text"
                    id="Rate"
                    name="Rate"
                    value={formData.Rate}
                    placeholder=""
                    onChange={handleChange}
                    required
                    className="form-input"
                />
                </div>
            <div className="form-group">
                <label htmlFor="Price" className="form-label">Price:</label>
                <input
                    type="text"
                    id="Price"
                    name="Price"
                    value={formData.Price}
                    placeholder=""
                    onChange={handleChange}
                    required
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <label htmlFor="Tax" className="form-label">Taxes:</label>
                <input
                    type="text"
                    id="Tax"
                    name="Tax"
                    value={formData.Tax}
                    placeholder=""
                    onChange={handleChange}
                    required
                    className="form-input"
                />
            </div>
            <button type="submit" className="form-button" >
                Add
            </button>
        </form>
    );
}
export default Add;
