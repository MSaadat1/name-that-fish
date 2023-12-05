import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { Images } from "../../assets/Images";
import { useState } from "react";
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

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const fishIndex = correctCount + incorrectCount;
  const gameFinished = fishIndex === initialFishes.length;
  const answersLeft = initialFishes.slice(fishIndex).map((fish) => fish.name);

  const handleAnswer = (answer) => {
    if (answer.toLowerCase() === initialFishes[fishIndex].name.toLowerCase()) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }
  };

  return (
    <>
      {gameFinished ? (
        <FunctionalFinalScore
          correctCount={correctCount}
          totalCount={correctCount + incorrectCount}
        />
      ) : (
        <>
          <FunctionalScoreBoard
            answersLeft={answersLeft}
            correctCount={correctCount}
            incorrectCount={incorrectCount}
          />
          <FunctionalGameBoard
            handleAnswer={handleAnswer}
            fishIndex={fishIndex}
          />
        </>
      )}
    </>
  );
}
