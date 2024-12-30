import React from 'react';

const SearchBar = () => {
    return (
        <div className="flex justify-center space-x-4 p-6 bg-gray-100">
            <div className="flex flex-col">
                <label className="mb-2 text-gray-700">Check-In</label>
                <input type="date" className="p-2 border border-gray-300 rounded-lg" />
            </div>
            <div className="flex flex-col">
                <label className="mb-2 text-gray-700">Check-Out</label>
                <input type="date" className="p-2 border border-gray-300 rounded-lg" />
            </div>
            <div className="flex flex-col">
                <label className="mb-2 text-gray-700">Guests</label>
                <select className="p-2 border border-gray-300 rounded-lg">
                    <option>1 room, 2 adults, 0 children</option>
                </select>
            </div>
        </div>
    );
};

export default SearchBar;