import React from 'react';
import philosopherImg from '../images/Epictetus-1.jpg';
import './styles.css';
import { Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <div className="landing-page quiz-container" id="landing-page">

      {/* Content Section */}
      <h1>Philosopher Quiz</h1>
   
      <p style={{fontWeight: 600}}>Welcome to the philosopher quiz! Test your knowledge of history's greatest thinkers. Who said what? Find out by answering 10 questions about famous philosophers.</p>

      {/* Philosopher Image */}
      <img 
        src={philosopherImg} 
        alt="Philosopher" 
        className='img-fluid' 
        style={{
          position: 'relative', // Keep image in normal flow
          zIndex: 1, // Place the image above the background
          maxWidth: '75%', // Ensure the image is responsive
          marginBottom: '20px' // Optional: space between image and button
        }} 
      />

      {/* Start Quiz Button */}
      <Link to="/quiz">
  <button 
    className="btn btn-success" 
    style={{
      zIndex: 1, // Ensures button is above the background
    }}
  >
    Start Quiz
  </button>
</Link>
    </div>
  );
};

export default LandingPage;
