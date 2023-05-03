import React from "react";

function Question({ question, onAnswerClick }) {
  return (
    <div>
      <h2>{question.question}</h2>
      <ul>
        {question.answers.map((answer, index) => (
          <li key={index}>
            <button onClick={() => onAnswerClick(index)}>{answer.text}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
