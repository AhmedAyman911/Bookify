import { FaLock, FaRegUser } from "react-icons/fa";

const LoginForm = () => {
    return (

        <div className="bg-white flex justify-center items-center h-screen">
            <div className=" bg-white flex rounded-3xl w-2/5">
                <div className="flex-1 flex justify-center items-center">
                    <img
                        src="https://i.pinimg.com/564x/34/bb/d7/34bbd73293f74527e4440a746645d475.jpg"
                        alt="Image"
                        className="w-full h-auto rounded-l-3xl"
                    />
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <form className="p-8 custom-loginform">
                        <h1 className="text-5xl text-blue-900 mb-2 font-bold text-center">Welcome Back!</h1>
                        <h2 className="text-xl text-gray-700 mb-8 font-bold text-center">
                            Please enter your login details to access your account
                        </h2>
                        <div className="relative mb-6 flex items-center justify-center">
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                className="w-80 h-12 px-4 bg-transparent outline-none border-2 border-gray-900 rounded-full" // Adjusted padding
                                required
                            />
                            <FaRegUser className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>


                        <div className="relative mb-2 flex items-center justify-center">
                            <input
                                type="Password"
                                placeholder="Enter your Password"
                                className="w-80 h-12 px-4 bg-transparent outline-none border-2 border-gray-900 rounded-full "
                                required
                            />
                            <FaLock className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>
                        <div className="mb-6 text-right flex items-center justify-end">
                            <a href="#" className="text-blue-900 hover:underline">
                                Forgot Password?
                            </a>
                        </div>
                        <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="w-1/3 h-12 bg-blue-900 text-white font-semibold rounded-full"
                        >
                            Login
                        </button></div>
                        <div className="mt-6 text-center">
                            <p>
                                Don`t have an account?{" "}
                                <a href="#" className="text-blue-900 font-semibold hover:underline">
                                    Sign Up
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default LoginForm;
