import { FaRegUser } from "react-icons/fa";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Snackbar } from '@mui/material';

const LoginForm = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertSeverity, setAlertSeverity] = useState("error");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { password, email })
            .then(response => {
                const { token, user } = response.data;
                if (token && user) {
                    if (user.username !== 'admin') {
                        localStorage.setItem('token', token);
                        localStorage.setItem('user', JSON.stringify(user));
                        navigate("/");
                        window.location.reload();
                    } 
                } else {
                    console.error('Token or user data missing in response');
                    setAlertMessage("Token or user data missing in response.");
                    setAlertSeverity("error");
                    setAlertOpen(true);
                }
            })
            .catch(error => {
                console.error('Error logging in:', error);
                setAlertMessage("Error logging in. Please check your credentials and try again.");
                setAlertSeverity("error");
                setAlertOpen(true);
            });
    };

    const handleClose = () => {
        setAlertOpen(false);
    };

    return (
        <div className="bg-white flex justify-center items-center h-screen">
            <div className="bg-white flex rounded-3xl w-2/5 shadow-lg">
                <div className="flex-1 flex justify-center items-center">
                    <img
                        src="https://i.pinimg.com/564x/34/bb/d7/34bbd73293f74527e4440a746645d475.jpg"
                        alt="Image"
                        className="w-full h-auto rounded-l-3xl"
                    />
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <form onSubmit={handleSubmit} className="p-8 custom-loginform">
                        <h1 className="text-5xl text-blue-900 mb-2 font-bold text-center">Welcome Back!</h1>
                        <h2 className="text-xl text-gray-700 mb-8 font-bold text-center">
                            Please enter your login details to access your account
                        </h2>
                        <div className="relative mb-6 flex items-center justify-center">
                            <input
                                type="email"
                                placeholder="@email.com"
                                value={email}
                                onChange={(ev) => setEmail(ev.target.value)}
                                className="w-80 h-12 px-4 bg-transparent outline-none border-2 border-gray-900 rounded-full"
                                required
                            />
                            <FaRegUser className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>

                        <div className="relative mb-2 flex items-center justify-center">
                            <input
                                type="password"
                                placeholder="type password"
                                value={password}
                                onChange={(ev) => setPassword(ev.target.value)}
                                className="w-80 h-12 px-4 bg-transparent outline-none border-2 border-gray-900 rounded-full"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="w-1/3 h-12 bg-blue-900 text-white font-semibold rounded-full hover:bg-blue-700 transition"
                            >
                                Login
                            </button>
                        </div>
                        <div className="mt-6 text-center">
                            <p>
                                Don`t have an account?{" "}
                                <a href="./signup" className="text-blue-900 font-semibold hover:underline">
                                    Sign Up
                                </a>
                            </p>
                            <br />
                            <p>
                                Login as an admin user?{" "}
                                <a href="/LoginAdmin" className="text-blue-900 font-semibold hover:underline">
                                    Log In
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <Snackbar
                open={alertOpen}
                autoHideDuration={2500}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                sx={{ width: 'fit-content', ml: 2, mb: 2 }} // Add margins if needed
            >
                <Alert onClose={handleClose} severity={alertSeverity} sx={{ width: '100%' }}>
                    {alertMessage}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default LoginForm;
