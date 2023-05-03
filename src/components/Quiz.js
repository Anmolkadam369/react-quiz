import React, { useState } from "react";
import Question from "./Question.js";

const questions = [
  {
    question: "what are the rules that are followed in Geopolitics?",
    answers: [
      { text: "dont trust US", correct: false },
      { text: "dont trust China", correct: false },
      { text: "dont trust West", correct: false },
      { text: "above all options are correct", correct: true },
    ],
  },
  {
    question: "becuase of whom world war 1 started?",
    answers: [
      { text: "Gavrilo Princip ", correct: true },
      { text: "raven snow", correct: false },
      { text: "deliph phil", correct: false },
      { text: "morphie joey", correct: false },
    ],
  },
  // add more questions here
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswerClick = (answerIndex) => {
    setUserAnswers([...userAnswers, answerIndex]);
  };

  const handleNextClick = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const score = userAnswers.filter(
    (answer, index) => questions[index].answers[answer].correct
  ).length;

  return (
    <div>
      {currentQuestion < questions.length ? (
        <Question
          question={questions[currentQuestion]}
          onAnswerClick={handleAnswerClick}
        />
      ) : (
        <div>
          <h2>Your score: {score}</h2>
        </div>
      )}
      {currentQuestion < questions.length && (
        <button onClick={handleNextClick}>Next</button>
      )}
    </div>
  );
}

export default Quiz;
