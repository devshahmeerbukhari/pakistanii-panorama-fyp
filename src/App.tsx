import React from 'react';
import Header from './components/header';
import SearchBar from './components/searchBar';
import LoginAndRegisterPage from './components/loginSignupPage';
//import LoginAndRegisterPage from './components/loginSignupPage';

const App = () => {
    return (
        <div className="font-sans">
            <Header />
            
            <SearchBar />
            {/* <LoginAndRegisterPage/> */}
        </div>
    );
};

export default App;