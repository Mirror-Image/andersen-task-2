import React from "react"
import './PlayGame.scss'
import Button from "../../сomponents/UI/Button/Button";
import Block from "../../сomponents/Block/Block";


export default class PlayGame extends React.Component {
  constructor(props) {
    super(props);
    // this.state = props.data
  }

  render() {
    return (
      <React.Fragment>
        <div className="play-game">
          <div className="play-game__score">
            <div className="play-game__score-player">
              <p className="play-game__score-player-name">Player 1</p>
              <p className="play-game__score-player-score">0000</p>
              {/*<p>{this.props.player1.name}</p>*/}
              {/*<p>{this.props.player1.score}</p>*/}
            </div>
            <div className="play-game__score-player">
              <p className="play-game__score-player-name">Player 2</p>
              <p className="play-game__score-player-score">0000</p>
              {/*<p>{this.props.player2.name}</p>*/}
              {/*<p>{this.props.player1.score}</p>*/}
            </div>
          </div>
          <div className="play-game__game-desk">
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
          </div>

          <div className="<div play-game__game-controls">
            <Button
              className="control-button"
              // onClick={this.handleStartGame}
              to={false}
              name="Reset"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}