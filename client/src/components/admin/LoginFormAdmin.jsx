import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminImage from "../../assets/5124556.jpg";

const LoginFormAdmin = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { password, email })
            .then(response => {
                const { token, user } = response.data;
                if (token && user) {
                    if (user.username === 'admin') {
                    localStorage.setItem('token', token);
                    localStorage.setItem('user', JSON.stringify(user));
                    navigate("/");
                    window.location.reload();
                  }
                } else {
                    console.error('Token or admin data missing in response');
                }
            })
            .catch(error => console.error('Error logging in:', error));
    };

    return (
        <div className="bg-white flex justify-center items-center h-screen">
            <img
                src={AdminImage}
                alt="Cartoon Businesswoman Character"
                className="w-1/4 h-3/4 rounded-l-3xl"
            />
            <div className="bg-gray-200 flex rounded-3xl w-2/5 border-gray-400 border-2">
                <div className="flex-1 flex justify-center items-center">
                    <form onSubmit={handleSubmit} className="p-8 custom-loginform">
                        <h1 className="text-5xl text-blue-900 mb-2 font-bold text-center">Welcome Admin!</h1>
                        <br></br>
                        <h2 className="text-xl text-gray-700 mb-8 font-bold text-center">
                            Enter your credentials to manage the system
                        </h2>
                        <div className="relative mb-6 flex items-center justify-center">
                            <input
                                type="email"
                                placeholder="@email.com"
                                value={email}
                                onChange={(ev) => setEmail(ev.target.value)}
                                className="w-80 h-12 px-4 bg-transparent outline-none border-2 border-gray-900 rounded-full" // Adjusted padding
                                required
                            />
                        </div>


                        <div className="relative mb-2 flex items-center justify-center">
                            <input
                                type="password"
                                placeholder="type password"
                                value={password}
                                onChange={(ev) => setPassword(ev.target.value)}
                                className="w-80 h-12 px-4 bg-transparent outline-none border-2 border-gray-900 rounded-full "
                                required
                            />
                        </div>
                        <div className="mb-6 text-right flex items-center justify-center">
                            <a href="#" className="text-blue-900 hover:underline">
                                Forgot Password? Go Back To Your Mentor
                            </a>
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="w-1/3 h-12 bg-blue-900 text-white font-semibold rounded-full"
                            >
                                Login
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}
export default LoginFormAdmin;
