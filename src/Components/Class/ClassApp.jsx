import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { Images } from "../../assets/Images";
import React from "react";

export const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };

  handleAnswer = (answer) => {
    const { correctCount, incorrectCount } = this.state;
    const fishIndex = correctCount + incorrectCount;

    if (answer.toLowerCase() === initialFishes[fishIndex].name.toLowerCase()) {
      this.setState((prevState) => ({
        correctCount: prevState.correctCount + 1,
      }));
    } else {
      this.setState((prevState) => ({
        incorrectCount: prevState.incorrectCount + 1,
      }));
    }
  };

  render() {
    const { correctCount, incorrectCount } = this.state;
    const fishIndex = correctCount + incorrectCount;
    const gameFinished = fishIndex === initialFishes.length;
    const answersLeft = initialFishes.slice(fishIndex).map((fish) => fish.name);
    return (
      <>
        {gameFinished ? (
          <ClassFinalScore
            correctCount={correctCount}
            totalCount={correctCount + incorrectCount}
          />
        ) : (
          <>
            <ClassScoreBoard
              answersLeft={answersLeft}
              correctCount={correctCount}
              incorrectCount={incorrectCount}
            />
            <ClassGameBoard
              handleAnswer={this.handleAnswer}
              fishIndex={fishIndex}
            />
          </>
        )}
      </>
    );
  }
}
