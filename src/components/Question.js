import React, { useState } from 'react';

const Question = ({ data, onNext, questionNumber, totalQuestions }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = () => {
    if (selectedOption !== null) {
      onNext(selectedOption === data.correctOption);
      setSelectedOption(null);
    } else {
      alert('Please select an option!');
    }
  };

  return (
    <div className="question">
      <h3>{questionNumber}. {data.question}</h3>
      <ul>
        {data.options.map((option, index) => (
          <li
            key={index}
            className={selectedOption === index ? 'selected' : ''}
            onClick={() => setSelectedOption(index)}
          >
            {option}
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Next Question</button>
      <p>{questionNumber}/{totalQuestions}</p>
    </div>
  );
};

export default Question;
