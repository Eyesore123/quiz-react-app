import React, { useState, useEffect } from 'react';
import './styles.css';
import kierkegaard from '../images/kierkegaard.jpg';
import heraclitus from '../images/heraclitus.jpg';
import protagoras from '../images/protagoras.jpg';
import sartre from '../images/sartre.jpg';
import aristotle from '../images/aristotle.jpg';
import epicurus from '../images/epicurus.jpg';
import schopenhauer from '../images/schopenhauer.jpg';
import nietzsche from '../images/nietzsche.jpg';
import james from '../images/james.jpg';

const questions = [
  {
    question: 1,
    text: 'Who said this: "Life can only be understood backwards; but it must be lived forwards"?',
    options: ["Socrates", "Schopenhauer", "Kierkegaard"],
    correctAnswer: "Kierkegaard",
    explanation: 'Kierkegaard said that life is a series of transitions. You enter the future through the leap of faith. And then you make the interpretation.',
    image: kierkegaard
  },
  {
    question: 2,
    text: 'Who is known to have said: "There is nothing permanent except change"?',
    options: ["Plato", "Heraclitus", "Socrates"],
    correctAnswer: "Heraclitus",
    explanation: 'Heraclitus emphasized the concept of change.',
    image: heraclitus
  },
  {
    question: 3,
    text: '"Man is the measure of all things"?',
    options: ["Protagoras", "Freud", "Kant"],
    correctAnswer: "Protagoras",
    explanation: 'According to Protagoras, human beings are the measure of all things.',
    image: protagoras
  },
  {
    question: 4,
    text: '"If you are lonely when you\'re alone, you are in bad company"?',
    options: ["Sartre", "Socrates", "Heraclitus"],
    correctAnswer: "Sartre",
    explanation: 'Sartre believed that loneliness is a sign of bad company. If you cannot stand loneliness, you need to look in the mirror.',
    image: sartre
  },
  {
    question: 5,
    text: '"It is the mark of an educated mind to be able to entertain a thought without accepting it"?',
    options: ["Marx", "Pythagoras", "Aristotle"],
    correctAnswer: "Aristotle",
    explanation: 'Aristotle believed that a civilized person can entertain a thought without accepting it.',
    image: aristotle
  },
  {
    question: 6,
    text: '"Do not spoil what you have by desiring what you have not; remember that what you now have was once among the things you only hoped for"?',
    options: ["Epicurus", "Donald Trump", "Hegel"],
    correctAnswer: "Epicurus",
    explanation: 'It was Epicurus who warned against wanting what you have not.',
    image: epicurus
  },
  {
    question: 7,
    text: '"No man ever steps in the same river twice, for it\'s not the same river and he\'s not the same man"?',
    options: ["Aristotle", "Heraclitus", "Plato"],
    correctAnswer: "Heraclitus",
    explanation: 'Heraclitus emphasized the importance of living in harmony with nature. Everything changes.',
    image: heraclitus
  },
  {
    question: 8,
    text: '"A man can be himself only so long as he is alone, and if he does not love solitude, he will not love freedom, for it is only when he is alone that he is really free"?',
    options: ["Schopenhauer", "Rousseau", "Freud"],
    correctAnswer: "Schopenhauer",
    explanation: 'Schopenhauer was a lonely, introverted guy.',
    image: schopenhauer
  },
  {
    question: 9,
    text: '"Madness is rare in individuals - but in groups, parties, nations, and ages it is the rule"?',
    options: ["Hegel", "Heidegger", "Nietzsche"],
    correctAnswer: "Nietzsche",
    explanation: 'Nietzsche believed that madness lies in groups.',
    image: nietzsche
  },
  {
    question: 10,
    text: '"When you have to make a choice and don\'t make it, that is in itself a choice"?',
    options: ["Plato", "William James", "Diogenes"],
    correctAnswer: "William James",
    explanation: 'William James was a psychologist who encouraged people to be bold and courageous.',
    image: james
  }
];

const preloadImages = (images) => {
  images.forEach(image => {
    const img = new Image();
    img.src = image;
  })
}

const QuizApp = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [characterization, setCharacterization] = useState('');

  // Recalculate score whenever the answers change
  useEffect(() => {
    let newScore = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        newScore += 1;
        // For tracking score:
        // console.log(newScore);
      }
    });
    setScore(newScore);
  }, [answers]);

    // Preload philosopher images
  useEffect(() => {
    const philosopherImages = [
      kierkegaard,
      heraclitus,
      protagoras,
      sartre,
      aristotle,
      epicurus,
      schopenhauer,
      nietzsche,
      james
    ];

    preloadImages(philosopherImages);
    setImagesLoaded(true);
  }, []);

  // Handle answer selection
  const handleAnswerSelection = (e) => {
    const selectedAnswer = e.target.value;
    const newAnswers = [...answers];
    newAnswers[currentStep] = selectedAnswer; // Store the selected answer
    setAnswers(newAnswers);
    setAnswered(true); // Set the answered state to true whenever a selection is made
  };

  // Handle showing explanation and moving to the next question
  const handleNextStep = () => {
    if (answered) {
      if (!showExplanation) {
        setShowExplanation(true); // Explanation
      } else {
        if (currentStep < questions.length - 1) {
          setCurrentStep(currentStep + 1);
          setAnswered(false); // Reset
          setShowExplanation(false); // Hide the explanation for the next question
        } else {
          setShowResults(true);
          if (score === 10) {
            setCharacterization("You're a true Philosophy Master!");
          } else if (score >= 8) {
            setCharacterization("Great job! You're a Philosophy Enthusiast!");
          } else if (score >= 5) {
            setCharacterization("Not bad! You're on your way to becoming a Philosopher.");
          } else {
            setCharacterization("Keep studying! The world of philosophy is vast and fascinating.");
          }
        }
      }
    } else {
      alert('Please select an answer before moving to the next question.');
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      const previousStep = currentStep - 1;
      setCurrentStep(previousStep);
      setShowExplanation(false); // Hide the explanation when going back to the previous question
  
      // Check if an answer is already selected for the previous step
      if (answers[previousStep]) {
        setAnswered(true); // Set answered to true if an answer exists for the previous step
      } else {
        setAnswered(false); // Otherwise, set answered to false
      }
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers([]);
    setScore(0);
    setShowResults(false);
    setShowExplanation(false);
    setAnswered(false);
    setCharacterization('');
  };

  return (
    <div className="quiz-container">
      {showResults ? (
        <div className="results">
          <h2>Congratulations! Your score: {score}/{questions.length}</h2>
          <div className="characterization" id="characterization">{characterization}</div>
          <p>Want to try again?</p>
          <button className="btn btn-success" onClick={handleRestart}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <div className="question-section" style={{ display: showExplanation ? 'none' : 'block' }}>
            <h2>Question {currentStep + 1}</h2>
            <p>{questions[currentStep].text}</p>
            {questions[currentStep].options.map((option, index) => (
              <div key={index} className="option">
                <label>
                  <input
                    type="radio"
                    name={`question${currentStep}`}
                    value={option}
                    checked={answers[currentStep] === option}
                    onChange={handleAnswerSelection}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
          <div className="answer-section">
            {showExplanation && (
              <div className="explanation">
                <p>{questions[currentStep].explanation}</p>
                <img src={questions[currentStep].image} alt="philosopher" className="img" />
              </div>
            )}
            <div className="navigation-buttons">
              {currentStep > 0 && <button className="btn btn-success" onClick={handlePreviousStep}>Back</button>}
              <button className="btn btn-success" onClick={handleNextStep}>
                {showExplanation ? "Next Question" : "Answer"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizApp;