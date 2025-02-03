import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route for routing
import Navbar from './components/navbar';
import SearchBar from './components/searchBar';
import LoginAndRegisterPage from './components/loginSignupPage';
import HotelSearch from './components/hotels';
// Import other components as needed

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      {/* <SearchBar /> */}
      <Routes>
        <Route path="/" element={<SearchBar />} /> {/* Example Home Route */}
        <Route path="/lahore" element={<SearchBar />} />
        <Route path="/components/hotels" element={<HotelSearch />} />
        <Route path="/things-to-do" element={<SearchBar />} />
        <Route path="/restaurants" element={<SearchBar />} />
        <Route path="/flights" element={<SearchBar />} />
        {/* Add other routes */}
      </Routes>
    </div>
  );
};

export default App;
