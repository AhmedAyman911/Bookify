import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import EditFlight from './components/admin/Flights/edit';
import Home from './components/home/Home';
import Flights from './components/Flights';
import Hotels from './components/List/List';
import CarRentals from './components/CarRentals';
import NavBar from './components/navBar';
import AddFlight from './components/admin/Flights/add';
import Login from './components/LoginForm/LoginForm';
import Signup from './components/SignUpForm/SignUpForm'
import AdminFlights from './components/admin/Flights/AdminFlights';
import AdminCar from './components/admin/cars/AdminCars';
import Addcar from './components/admin/cars/add';
import EditCar from './components/admin/cars/edit';
import AdminHotels from './components/admin/AdminList/AdminList';
import AddHotels from './components/admin/AdminList/Add';
import EditHotels from './components/admin/AdminList/Edit';
import LoginAdmin from './components/admin/LoginFormAdmin'
import HotelPage from './components/List/hotelPage'
import Hotel from './components/List/hotelPage';
import List from './components/List/List';
import Payment from './components/payment';
import Thanks from './components/thankyou/Thankyou';

export default function App() {
  return (
    <Router>
      <NavBar/>
        <Routes>
          {/*user routes*/}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/car-rentals" element={<CarRentals />} />
          <Route path="/flights" element={<Flights/>} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/List" element={<List />} />
          <Route path="/hotelPage/:id" element={<Hotel />} />
          <Route path="/hotelPage" element={<HotelPage />} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/thankyou" element={<Thanks/>} />
          {/*admin routes*/}
          <Route path="/LoginAdmin" element={<LoginAdmin />} />
          <Route path="/editFlight/:id" element={<EditFlight />} />
          <Route path="/addFlight" element={<AddFlight />} />
          <Route path="/adminFlights" element={<AdminFlights />} />
          <Route path="/adminCar" element={<AdminCar />} />
          <Route path="/addcar" element={<Addcar />} />
          <Route path="/editCar/:id" element={<EditCar />} />
          <Route path="/editHotels/:id" element={<EditHotels />} />
          <Route path="/addHotels" element={<AddHotels />} />
          <Route path="/adminHotels" element={<AdminHotels />} />
        </Routes>
    </Router>
  );
}