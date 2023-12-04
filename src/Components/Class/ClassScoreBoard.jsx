import { Component } from "react";
import "./styles/score-board.css";
import React from "react";

export class ClassScoreBoard extends Component {
  render() {
    const { initialFishes, correctCount, incorrectCount } = this.props;
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
}
