import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { Images } from "../../assets/Images";
import React from "react";

const initialFishes = [
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
    incorrectFishName: 0,
    correctFishName: 0,
    gameFinished: false,
  };

  handleGameFinish = () => {
    this.setState({ gameFinished: true });
  };
  render() {
    const { correctFishName, incorrectFishName, gameFinished } = this.state;
    return (
      <>
        {gameFinished ? (
          <ClassFinalScore
            correctCount={correctFishName}
            totalCount={correctFishName + incorrectFishName}
          />
        ) : (
          <>
            <ClassScoreBoard
              initialFishes={initialFishes}
              correctCount={correctFishName}
              incorrectCount={incorrectFishName}
            />
            <ClassGameBoard
              setCorrectFishName={(value) =>
                this.setState({ correctFishName: value })
              }
              setIncorrectFishName={(value) =>
                this.setState({ incorrectFishName: value })
              }
              onGameFinish={this.handleGameFinish}
              initialFishes={initialFishes}
              correctFishName={correctFishName}
              incorrectFishName={incorrectFishName}
            />
          </>
        )}
      </>
    );
  }
}
