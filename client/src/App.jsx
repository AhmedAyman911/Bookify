import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminCard from './components/admin/Flights/AdminFlights';
import EditFlight from './components/admin/Flights/edit';
import Home from './components/home/Home';
/*import Flights from './components/Flights';*/
import Hotels from './components/List/List';
/*import CarRentals from './components/CarRentals';*/
import NavBar from './components/navBar';
import AddFlight from './components/admin/Flights/add';
import Login from './components/LoginForm/LoginForm';
import Signup from './components/SignUpForm/SignUpForm'
import AdminCar from './components/admin/cars/AdminCars';
import Addcar from './components/admin/cars/add';
import EditCar from './components/admin/cars/edit';
export default function App() {
  return (
    <Router>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/editFlight/:id" element={<EditFlight />} />
          <Route path="/addFlight" element={<AddFlight />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/flights" element={<AdminCard />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/car-rentals" element={<AdminCar />} />
          <Route path="/addcar" element={<Addcar />} />
          <Route path="/editCar/:id" element={<EditCar />} />
        </Routes>
    </Router>
  );
}