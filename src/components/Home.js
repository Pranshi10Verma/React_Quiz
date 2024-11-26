import React, { useState } from 'react';

const Home = ({ setName, setStartQuiz }) => {
  const [inputName, setInputName] = useState('');

  const handleStart = () => {
    if (inputName.trim()) {
      setName(inputName);
      setStartQuiz(true);
    } else {
      alert('Please enter your name!');
    }
  };

  return (
    <div className="home">
      <h1>ABES Quiz Platform</h1>
      <label htmlFor="name">Contestant Name:</label>
      <input
        type="text"
        id="name"
        placeholder="Please enter your name"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <button onClick={handleStart}>Start Quiz</button>
    </div>
  );
};

export default Home;
