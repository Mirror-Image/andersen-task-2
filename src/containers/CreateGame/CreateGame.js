import React, {Component} from "react"
import './CreateGame.scss'
import Input from "../../сomponents/UI/Input/Input";
import Button from "../../сomponents/UI/Button/Button";


export default class CreateGame extends Component {
  constructor(props) {
    super(props);



    this.state = {
      player1: {
        name: '',
        symbolX: false,
        symbolY: false
      },
      player2: {
        name: '',
        symbolX: false,
        // symbolY: false
      }
    };
  }

  handleNameChange = (e) => {
    // TODO: check data with store

    this.setState({
      [e.target.name.toLowerCase().replace('-', '')]: {
        name: e.target.value,
        symbolX: this.state.player1.symbolX,
        symbolY: this.state.player1.symbolY
      }
    });
  }

  handleStartGame = () => {
    // TODO: send the data to the store
  }

  handleSymbolChange = (e) => {
    const name =  e.target.name;
    const symbolX = this.state.player1.symbolX;
    const symbolY = this.state.player1.symbolY;

    this.setState({
      player1: {
        name: this.state.player1.name,
        symbolX: name === 'X' || symbolX ? !symbolX : symbolX,
        symbolY: name === 'Y' || symbolY ? !symbolY : symbolY,
      },
      player2: {
        name: this.state.player2.name,
        symbolX: name === 'X' || symbolX ? symbolX : !symbolX,
        symbolY: name === 'Y' || symbolY ? symbolY : !symbolY,
      }
    });

    console.log(e.target)
  }

  render() {
    return (
      <React.Fragment>
        <Input
          onChange={this.handleNameChange}
          name="Player-1"
          value={this.state.player1.name}
        />
        <p className="create-game-symbol-description">{this.state.player1.name || 'Player-1'} choose your symbol:</p>
        <div className="create-game__choose-symbol-block">
          <Button onClick={this.handleSymbolChange} to="#" className="choose-button" name="X" isActive={this.state.player1.symbolX} />
          <Button onClick={this.handleSymbolChange} to="#" className="choose-button" name="Y" isActive={this.state.player1.symbolY} />
        </div>

        <Input
          onChange={this.handleNameChange}
          name="Player-2"
          value={this.state.player1.name}
        />
        <p className="create-game-symbol-description">
          {this.state.player1.symbolX || this.state.player1.symbolY
            ? `${this.state.player2.name || 'Player-2'} your symbol is ${this.state.player2.symbolX ? 'X' : 'Y'}`
            : ''}
        </p>

        <Button
          className="control-button"
          onClick={this.handleStartGame}
          to="/play-game"
          name="Join Game"
        />
        <Button className="control-button" to="/" name="Back" />

      </React.Fragment>
    );
  }
}