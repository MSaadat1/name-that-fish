import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { Images } from "../../assets/Images";
import { useState } from "react";
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

export function FunctionalApp() {
  const [correctFish, setCorrectFish] = useState(0);
  const [incorrectFish, setIncorrectFish] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);

  const handleGameFinish = () => {
    setGameFinished(true);
  };

  return (
    <>
      {gameFinished ? (
        <FunctionalFinalScore
          correctCount={correctFish}
          totalCount={correctFish + incorrectFish}
        />
      ) : (
        <>
          <FunctionalScoreBoard
            initialFishes={initialFishes}
            correctCount={correctFish}
            incorrectCount={incorrectFish}
          />
          <FunctionalGameBoard
            setCorrectFish={setCorrectFish}
            setIncorrectFish={setIncorrectFish}
            onGameFinished={handleGameFinish}
            correctFish={correctFish}
            incorrectFish={incorrectFish}
          />
        </>
      )}
    </>
  );
}
