import "./styles/score-board.css";
import React from "react";
//  Where the score is presented

export function FunctionalScoreBoard({
  initialFishes,
  correctCount,
  incorrectCount,
}) {
  const answeredCount = correctCount + incorrectCount;
  const answersLeft = initialFishes
    .slice(answeredCount)
    .map((fish) => fish.name);
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
