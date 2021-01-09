import React from "react";
import Quizquestion from "./Quizquestion";

function Quiz({ lives, score, question, answers, onClickAnswer }) {
  return lives > 0 ? (
    <Quizquestion
      lives={lives}
      score={score}
      question={question}
      answers={answers}
      onClickAnswer={onClickAnswer}
    />
  ) : (
    <p>Game over. Result:{score} </p>
  );
}

export default Quiz;
