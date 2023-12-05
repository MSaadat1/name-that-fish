/* eslint-disable no-unused-vars */
import { Component } from "react";
import "./styles/game-board.css";
import { initialFishes } from "./ClassApp";
import React from "react";

export class ClassGameBoard extends Component {
  state = {
    guessThatFish: "",
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { guessThatFish } = this.state;
    const { handleAnswer, fishIndex } = this.props;
    handleAnswer(guessThatFish);
    this.setState({ guessThatFish: "" });
  };

  render() {
    const { guessThatFish } = this.state;
    const { fishIndex } = this.props;
    return (
      <div id="game-board">
        <div id="fish-container">
          <img
            src={initialFishes[fishIndex].url}
            alt={initialFishes[fishIndex].name}
          />
        </div>
        <form id="fish-guess-form" onSubmit={this.handleFormSubmit}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={guessThatFish}
            onChange={(e) => {
              this.setState({ guessThatFish: e.target.value });
            }}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
