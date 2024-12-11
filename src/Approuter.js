import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage'; // Import your LandingPage component
import QuizApp from './components/App'; // Import your QuizApp component
import './components/styles.css';

const Approuter = () => {
    return (
        <HashRouter>  {/* Use BrowserRouter to wrap all routes */}
            <Routes>  {/* Routes wrapper for the individual routes */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/quiz" element={<QuizApp />} />
            </Routes>
        </HashRouter>
    );
};

export default Approuter;
