import "./styles/game-board.css";
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

export function FunctionalGameBoard({ setCorrectFish, setIncorrectFish, onGameFinished, correctFish, incorrectFish }) {
  const [nextFishIndex, setNextFishIndex] = useState(0);
  const [nameThatFish, setNameThatFish] = useState("");
  const nextFishToName = initialFishes[nextFishIndex];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (nameThatFish.toLowerCase() === nextFishToName.name) {
      setCorrectFish(correctFish + 1);
    } else {
      setIncorrectFish(incorrectFish + 1);
    }
    setNameThatFish("");
    
    if(nextFishIndex !== initialFishes.length -1 ){
      setNextFishIndex((prev)=> prev + 1)% initialFishes.length;
    }

    if(nextFishIndex === initialFishes.length - 1){
      onGameFinished();
    }
  };
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleFormSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={nameThatFish}
          onChange={(e) => {
            setNameThatFish(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
