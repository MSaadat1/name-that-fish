import { Component } from "react";
import "./styles/score-board.css";
import React from "react";

export class ClassScoreBoard extends Component {
  render() {
    const { answersLeft, correctCount, incorrectCount } = this.props;

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
