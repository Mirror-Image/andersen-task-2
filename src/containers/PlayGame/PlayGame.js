import React from "react"
import './PlayGame.scss'


export default class PlayGame extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="play-game">
          <h1>Play Game</h1>
          <div className="">

          </div>
          <div className="play-game__game-desk">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}