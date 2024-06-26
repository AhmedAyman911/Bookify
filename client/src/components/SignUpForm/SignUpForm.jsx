//import { FaLock } from "react-icons/fa";
import axios from 'axios'
//import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const SignUpForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const handelsubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', { name, password, email })
        .then(result => console.log(result),navigate('/'))
        .catch(err => console.log(err))
    }
    return (
        <div className="bg-white flex justify-center items-center h-screen">
            <div className=" bg-white flex rounded-3xl w-2/5">
                <div className="flex-1 flex justify-center items-center">
                    <img src="https://i.pinimg.com/564x/34/bb/d7/34bbd73293f74527e4440a746645d475.jpg"
                        className="w-full h-auto rounded-l-3xl"
                        alt="Image" />
                </div>
                <form onSubmit={handelsubmit} className="p-8">
                    <h1 className="text-4xl text-blue-900 mb-10 font-bold text-center">Create an Account</h1>

                    <div className="relative mb-6 flex items-center justify-center">
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(ev) => setName(ev.target.value)}
                            required
                            className="w-80 h-12 px-4 bg-transparent outline-none border-2 border-gray-900 rounded-full" />
                    </div>
                    <div className="relative mb-6 flex items-center justify-center">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(ev) => setEmail(ev.target.value)}
                            required
                            className="w-80 h-12 px-4 bg-transparent outline-none border-2 border-gray-900 rounded-full" />
                    </div>
                    <div className="relative mb-6 flex items-center justify-center">
                        <input
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                            required
                            className="w-80 h-12 px-4 bg-transparent outline-none border-2 border-gray-900 rounded-full" />
                        {/*<FaLock className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />*/}
                    </div>
                    <div className="relative mb-6 flex items-center justify-center">
                        <input
                            type="Password"
                            placeholder='Confirm Password'
                            required
                            className="w-80 h-12 px-4 bg-transparent outline-none border-2 border-gray-900 rounded-full" />
                        {/*<FaLock className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />*/}
                    </div>
                    <div className="flex items-center justify-center mb-10">
                        <button type="submit" className="w-1/3 h-12 bg-blue-900 text-white font-semibold rounded-full">Sign Up</button>
                    </div>
                    <div className="flex items-center justify-center text-blue-900 font-semibold hover:underline">
                        <p >Already have an account? <a href="./Login">Login</a></p>
                    </div>
                </form>
            </div>

        </div>
    );
}
export default SignUpForm;
