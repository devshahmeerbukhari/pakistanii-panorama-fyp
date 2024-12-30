import React, { useState } from "react";
import LoginAndRegisterPage from "../loginSignupPage"; // Import the login/register component

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSignInClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <header className="flex justify-between items-center p-4 bg-white shadow-md">
                <div className="text-2xl font-bold text-green-600">Tripadvisor</div>
                <nav>
                    <ul className="flex space-x-4 text-gray-600">
                        <li>Lahore</li>
                        <li>Hotels</li>
                        <li>Things to Do</li>
                        <li>Restaurants</li>
                        <li>Flights</li>
                    </ul>
                </nav>
                <button
                    className="px-4 py-2 bg-green-600 text-white rounded-lg"
                    onClick={handleSignInClick}
                >
                    Sign in
                </button>
            </header>

            {/* Conditionally render the Login/Register Page */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="relative w-full max-w-3xl bg-transparent rounded-lg shadow-lg">
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-4 right-4 text-gray-700 hover:text-black text-xl"
                        >
                            &times;
                        </button>
                        <LoginAndRegisterPage />
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
