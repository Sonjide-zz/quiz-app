import React, { useState, useEffect } from "react";
import "./App.css";
import Quiz from "./Quiz";

function App() {
  const [question, setQuestion] = useState("");
  // destructering example
  // const questionArray = useState("");
  // const question = questionArray[0];
  // const setQuestion = questionArray[1];
  const [btnPressed, setBtnpress] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=3&difficulty=easy&encode=url3986`)
      .then((res) => res.json())
      .then((data) => setQuestion(data.results[0]));
  }, []);

  useEffect(() => {
    const unshuffledAnswers = [
      question.correct_answer,
      question.incorrect_answers,
    ];
    const flattenedAnswers = unshuffledAnswers.flat();
    const shuffled = flattenedAnswers.sort(() => Math.random() - 0.5);
    setAnswers(shuffled);
  }, [question]);

  function onClickHandler() {
    setBtnpress(true);
  }

  function onClickAnswer(answer) {
    if (answer === question.correct_answer) {
      setScore(score + 1);
    } else {
      setLives(lives - 1);
    }
    fetch(`https://opentdb.com/api.php?amount=3&difficulty=easy&encode=url3986`)
      .then((res) => res.json())
      .then((data) => setQuestion(data.results[1]));
    //fetches 1 question each time
  }

  return (
    <div className="App">
      {btnPressed ? (
        <Quiz
          lives={lives}
          score={score}
          question={question}
          answers={answers}
          onClickAnswer={onClickAnswer}
        />
      ) : (
        <button onClick={onClickHandler}> Start!</button>
      )}
    </div>
  );
}

export default App;

//https://codesandbox.io/s/fetch-with-prop-updates-not-working-x1dox?file=/src/App.js

//https://codesandbox.io/s/react-hotel-project-exercise-16-solution-8dnbv?file=/src/TableRow.js

//https://reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values
//https://syllabus.codeyourfuture.io/react/week-2/lesson.html

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
