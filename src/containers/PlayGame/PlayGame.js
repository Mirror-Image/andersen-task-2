import React from "react"
import './PlayGame.scss'
import Button from "../../сomponents/UI/Button/Button";
import Block from "../../сomponents/Block/Block";
import calculateWinner from "../../helpers/CalculateWinner";
import {connect} from "react-redux";
import {addCount} from "../../store/actions/play";


class PlayGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldsData: this.props.fieldsData || Array(9).fill(null),
      xIsNext: true,
      isWinner: false
    }
  }

  renderSquare(i) {
    return (
      <Block
        value={this.state.fieldsData[i]}
        onClick={() => this.handleClick(i)}
        className={"play-game__game-desk-block " + this.state.fieldsData[i]}
      />
    );
  }

  handleClick(i) {
    const squaresArray = this.state.fieldsData;

    if (calculateWinner(squaresArray) || squaresArray[i]) {
      return;
    }

    squaresArray[i] = this.state.xIsNext ? "X" : "O";
    this.setState((prevProps) => {
      console.log(!prevProps.xIsNext)

      return {
        fieldsData: squaresArray,
        xIsNext: !prevProps.xIsNext
      }
    }, () => {
      const data = {
        ...this.props,
        ...this.state,
      }
      const test2 = JSON.stringify(data)
      localStorage.setItem('lastSession', test2);
    });

    if (calculateWinner(squaresArray)) {
      const player = (this.props.player1.symbolX === this.state.xIsNext ? 'player1' : 'player2' );
      const scoreData = {
        [player]: {
          name: this.props[player].name,
          symbolX: this.props[player].symbolX,
          score: this.props[player].score + 1
        }
      };

      this.props.addCount(scoreData);

      return this.setState({
        isWinner: true
      });
    }
  }

  handleResetGame = () => {
    this.setState({
      fieldsData: Array(9).fill(null),
      xIsNext: true,
      isWinner: false
    });

    localStorage.removeItem('lastSession')
  }

  render() {
    return (
      <React.Fragment>
        <div className="play-game">
          <div className="play-game__score">
            <div className={"play-game__score-player " + (this.props.player1.symbolX ? "x" : "y")}>
              <p className="play-game__score-player-name">{this.props.player1.name}</p>
              <p className="play-game__score-player-score">{this.props.player1.score}</p>
            </div>
            <div className={"play-game__score-player " + (this.props.player2.symbolX ? "x" : "y")}>
              <p className="play-game__score-player-name">{this.props.player2.name}</p>
              <p className="play-game__score-player-score">{this.props.player2.score}</p>
            </div>
          </div>
          <div className="play-game__game-desk">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>

          <div className="<div play-game__game-controls">
            <Button
              className="control-button"
              onClick={this.handleResetGame}
              to={false}
              name="Reset"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  return {
    player1: {
      name: state.player1.name,
      symbolX: state.player1.symbolX,
      score: state.player1.score
    },
    player2: {
      name: state.player2.name,
      symbolX: state.player2.symbolX,
      score: state.player2.score
    },
    fieldsData: state.fieldsData,
    settings: {
      menuMusic: state.settings.menuMusic
    }
  }
}

// манипулируем состоянием Store
function mapDispatchToProps(dispatch) {
  return {
    addCount: (item) => dispatch(addCount(item)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayGame);