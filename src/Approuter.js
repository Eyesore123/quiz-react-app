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
