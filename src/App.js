import React, { useState } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import './styles/quiz.css';

function App() {
  const [name, setName] = useState('');
  const [startQuiz, setStartQuiz] = useState(false);

  return (
    <div className="App">
      {!startQuiz ? (
        <Home setName={setName} setStartQuiz={setStartQuiz} />
      ) : (
        <Quiz contestantName={name} />
      )}
    </div>
  );
}

export default App;
