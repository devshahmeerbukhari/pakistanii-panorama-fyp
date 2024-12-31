import React from 'react';
import Navbar from './components/navbar';
import SearchBar from './components/searchBar';
import LoginAndRegisterPage from './components/loginSignupPage';
//import LoginAndRegisterPage from './components/loginSignupPage';

const App = () => {
    return (
        <div className="font-sans">
            <Navbar />
            
            <SearchBar />
            {/* <LoginAndRegisterPage/> */}
        </div>
    );
};

export default App;