/* eslint-disable no-unused-vars */
import { Component } from "react";
import "./styles/game-board.css";
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

export class ClassGameBoard extends Component {
  state = {
    nextFishIndex: 0,
    nameThatFish: "",
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { nextFishIndex, nameThatFish } = this.state;
    const {
      setCorrectFishName,
      setIncorrectFishName,
      onGameFinish,
      initialFishes,
      correctFishName,
      incorrectFishName,
    } = this.props;
    const currentFish = initialFishes[nextFishIndex];

    if (nameThatFish.toLowerCase() === currentFish.name.toLowerCase()) {
      setCorrectFishName(correctFishName + 1);
    } else {
      setIncorrectFishName(incorrectFishName + 1);
    }
    this.setState({ nameThatFish: "" });

    if (nextFishIndex !== initialFishes.length - 1) {
      this.setState((prevState) => ({
        nextFishIndex: (prevState.nextFishIndex + 1) % initialFishes.length,
      }));
    }

    if (nextFishIndex === initialFishes.length - 1) {
      onGameFinish();
    }
  };

  setNameThatFish = (e) => {
    this.setState({ nameThatFish: e.target.value });
  };
  render() {
    const currentFish = this.props.initialFishes[this.state.nextFishIndex];
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={currentFish.url} alt={currentFish.name} />
        </div>
        <form id="fish-guess-form" onSubmit={this.handleFormSubmit}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={this.state.nameThatFish}
            onChange={this.setNameThatFish}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
