import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import QuizApp from './components/App';
import './components/styles.css';

const Approuter = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/quiz" element={<QuizApp />} />
            </Routes>
        </HashRouter>
    );
};

export default Approuter;

// If you use browser router, change to BrowserRouter, remove link import from app.js and put this to app.js:
    // <button 
    // className="btn btn-success" 
    // onClick={() => window.location.href = '/quiz'}
    // style={{
    //     zIndex: 1, // Ensures button is above the background
    // }}
    // >
    // Start Quiz
    // </button>