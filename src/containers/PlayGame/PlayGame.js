import React from "react"
import './PlayGame.scss'
import Button from "../../сomponents/UI/Button/Button";
import Block from "../../сomponents/Block/Block";
import calculateWinner from "../../helpers/CalculateWinner";
import {connect} from "react-redux";
import {addCount, resetGame, updateFieldsData} from "../../store/actions/play";
import PopUp from "../../сomponents/UI/PopUp/PopUp";
import {Redirect} from "react-router-dom";


class PlayGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xIsNext: true,
      isWinner: false,
      isQuit: false,
    }
  }

  renderSquare(i) {
    return (
      <Block
        value={this.props.fieldsData[i]}
        onClick={() => this.handleClick(i)}
        className={"play-game__game-desk-block " + this.props.fieldsData[i]}
      />
    );
  }

  handleClick(i) {
    console.log(this.props.fieldsData);
    const squaresArray = this.props.fieldsData;

    if (calculateWinner(squaresArray) || squaresArray[i]) {
      return;
    }

    squaresArray[i] = this.state.xIsNext ? "X" : "O";
    // TODO: REDUX
    /*this.setState((prevProps) => {
      return {
        fieldsData: squaresArray,
        xIsNext: !prevProps.xIsNext
      }
    }, () => {
      const data = {
        ...this.props,
        fieldsData: this.state.fieldsData,
        xIsNext: this.state.xIsNext
      }
      const sessionData = JSON.stringify(data)
      localStorage.setItem('lastSession', sessionData);
    });*/

    this.setState((prevProps) => {
      return {
        xIsNext: !prevProps.xIsNext
      }
    }, () => {
      const data = {
        fieldsData: squaresArray,
        xIsNext: !this.props.xIsNext
      }
      this.props.updateFieldsData(data);

      const sessionData = JSON.stringify(this.props)
      localStorage.setItem('lastSession', sessionData);
    }
    );

    /*const data = {
      fieldsData: squaresArray,
      xIsNext: !this.props.xIsNext
    }
    this.props.updateFieldsData(data);*/



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
      xIsNext: true,
      isWinner: false
    });

    this.props.resetGame(
      {
        fieldsData: Array(9).fill(null),
        settings: {
          menuMusic: true
        }
      })
    localStorage.removeItem('lastSession')
  }

  handleQuitGame = () => {
    this.setState((prevProp) => {
      return {
        visible: !prevProp.isFormValid,
      }
    });
  }

  isSaveData = (e) => {
    const response = e.target.name;

    if (response === "Yes") {
      this.setState({
        isQuit: true
      });

    } else {
      this.setState({
        xIsNext: true,
        isWinner: false,
        isQuit: true
      });

      this.props.resetGame(
        {
          fieldsData: Array(9).fill(null),
          player1: {name: '', symbolX: false, score: 0},
          player2: {name: '', symbolX: false, score: 0},
          settings: {
            menuMusic: true
          }
        })
      localStorage.removeItem('lastSession')
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isQuit ? <Redirect push to="/" /> : null}

        <div className="play-game">
          <PopUp text="Do you want to save game?" visible={this.state.visible} >
            <Button
              className="control-button"
              onClick={this.isSaveData}
              name="Yes"
            />
            <Button
              className="control-button"
              onClick={this.isSaveData}
              name="No"
            />
          </PopUp>
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
              name="Reset"
            />
            <Button
              className="control-button"
              onClick={this.handleQuitGame}
              name="Quit"
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
    xIsNext: state.xIsNext,
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
    updateFieldsData: (item) => dispatch(updateFieldsData(item)),
    resetGame: (item) =>dispatch(resetGame(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayGame);