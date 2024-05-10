import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/*import AdminCard from './components/admin/AdminFlights';*/
import EditFlight from './components/admin/edit';
import Home from './components/home/Home';
import Flights from './components/Flights';
import Hotels from './components/List/List';
import CarRentals from './components/CarRentals';
import NavBar from './components/navBar';
import AddFlight from './components/admin/add';
import Login from './components/LoginForm/LoginForm';
import Signup from './components/SignUpForm/SignUpForm'
export default function App() {
  return (
    <Router>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/edit/:id" element={<EditFlight />} />
          <Route path="/add" element={<AddFlight />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/car-rentals" element={<CarRentals />} />
        </Routes>
    </Router>
  );
}