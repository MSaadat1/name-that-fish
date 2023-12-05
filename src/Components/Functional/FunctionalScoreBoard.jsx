import "./styles/score-board.css";
import React from "react";
//  Where the score is presented

export function FunctionalScoreBoard({
  answersLeft,
  correctCount,
  incorrectCount,
}) {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
