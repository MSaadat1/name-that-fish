import "./styles/game-board.css";
import { initialFishes } from "./FunctionalApp";
import { useState } from "react";
import React from "react";



export function FunctionalGameBoard({ handleAnswer, fishIndex}) {
  
  const [guessThatFish, setGuessThatFish] = useState("");
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleAnswer(guessThatFish);
    setGuessThatFish("")
  };
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={initialFishes[fishIndex].url} alt={initialFishes[fishIndex].name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleFormSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={guessThatFish}
          onChange={(e) => {
            setGuessThatFish(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
