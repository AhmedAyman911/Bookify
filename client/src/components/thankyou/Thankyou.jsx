import React from "react";

const Thanks = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-100 to-blue-300">
            <div className="bg-white p-10 rounded-xl shadow-lg text-center">
                <h1 className="text-4xl font-bold text-blue-800 mb-4">
                    Your Reservation has been confirmed
                </h1>
                {/* <h2 className="text-2xl text-gray-700 mb-6">
                    Have a Great Trip
                </h2> */}
                <br></br>
                <h1 className="text-3xl font-bold text-blue-800">
                    Thank You For Your Reservation!
                </h1>
            </div>
        </div>
    );
};

export default Thanks;
