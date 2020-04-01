import React, {Component} from "react"
import './CreateGame.scss'


export default class CreateGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: {
        score: 0, symbol: ''
      },
      player2: {
        score: 0, symbol: ''
      }
    }
  }

  render() {
    return (
      <div className="create-game">
        <p>Create game</p>
      </div>
    );
  }
}