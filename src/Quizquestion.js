import React from "react";

function Quizquestion({ lives, score, question, answers, onClickAnswer }) {
  return (
    <div>
      <div>
        <p>Lives:{lives}</p>
        <p>/</p>
        <p>Score:{score}</p>
      </div>
      <p>{decodeURIComponent(question.question)}</p>
      {answers.map((eachAnswer) => {
        //component
        return (
          <button onClick={() => onClickAnswer(eachAnswer)}>
            {decodeURIComponent(eachAnswer)}
          </button>
        );
      })}
    </div>
  );
}

export default Quizquestion;
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
