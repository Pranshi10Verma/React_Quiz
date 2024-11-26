import React, { useState } from 'react';
import Question from './Question';
import questions from '../data/questions';

const Quiz = ({ contestantName }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleNext = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`Quiz Over! ${contestantName}, your score is ${score + (isCorrect ? 1 : 0)}/${questions.length}`);
    }
  };

  return (
    <div className="quiz">
      <h2>Contestant: <span>{contestantName}</span></h2>
      <Question
        data={questions[currentQuestion]}
        onNext={handleNext}
        questionNumber={currentQuestion + 1}
        totalQuestions={questions.length}
      />
    </div>
  );
};

export default Quiz;
