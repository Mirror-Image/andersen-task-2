import React, {Component} from "react"
import './CreateGame.scss'
import Input from "../../сomponents/UI/Input/Input";
import Button from "../../сomponents/UI/Button/Button";
import {connect} from 'react-redux'
import {addName, addSymbol} from "../../store/actions/create";
import PopUp from "../../сomponents/PopUp/PopUp";


class CreateGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player1: false,
      player2: false,
      symbol: false,
      isFormValid: false,
      popUpText: ''
    };
  }

  UNSAFE_componentWillMount() {
    if (this.props.player1.name && this.props.player2.name) {
      this.setState({
        player1: true,
        player2: true,
        symbol: true,
        isFormValid: true,
      })
    }
  }

  isFormValid() {
    this.setState((prevProps) => {
      if (prevProps.player1 && prevProps.player2 && prevProps.symbol) {
        return {
          isFormValid: true
        }
      } else {
        return {
          isFormValid: false
        }
      }
    });
  }

  isNameInputValid(name, player) {
    if (name) {
      this.setState((prevProps) => {
        return {[player]: true}
      });
    } else {
      this.setState({
        [player]: false
      });
    }

    this.isFormValid();
  }

  isSymbolChecked() {
    this.setState((prevProps) => {
      return {
        symbol: true
      };
    })

    this.isFormValid();
  }

  handleNameChange = (e) => {
    const player = e.target.name.toLowerCase().replace('-', '');
    const playerName = e.target.value.trim();

    const {name, ...other} = this.props[player];
    const item = {
      [player]: {name: playerName, ...other},
    };

    this.props.addName(item);
    this.isNameInputValid(playerName, player)
  }

  handleSymbolChange = (e) => {
    const name =  e.target.name;
    const symbolX = false;

    const {...other1} = this.props.player1;
    const {...other2} = this.props.player2;

    const item = {
      player1: {
        ...other1,
        symbolX: name === 'X' || symbolX ? !symbolX : symbolX
      },
      player2: {
        ...other2,
        symbolX: name === 'X' || symbolX ? symbolX : !symbolX,
      }
    };

    this.props.addSymbol(item);
    this.isSymbolChecked();
  }

  handPopUp = () => {
    if (!this.state.player1) {
      this.setState((prevProp) => {
        return {
          visible: !prevProp.isFormValid,
          popUpText: 'Player-1 type you name!'
        }
      });

    } else if (!this.state.player2) {
      this.setState((prevProp) => {
        return {
          visible: !prevProp.isFormValid,
          popUpText: 'Player-2 type you name!'
        }
      });

    } else {
      this.setState((prevProp) => {
        return {
          visible: !prevProp.isFormValid,
          popUpText: 'Please, choose your symbol!'
        }
      });

    }

    this.popUptimeOut = setTimeout(() => {
      this.setState((prevProp) => {
        return {visible: prevProp.isFormValid}
      });
    }, 1700);
  }

  componentWillUnmount() {
    clearTimeout(this.popUptimeOut);
  }

  render() {
    return (
      <React.Fragment>
        <PopUp text={this.state.popUpText} visible={this.state.visible} />
        <Input
          onChange={this.handleNameChange}
          name="Player-1"
          value={this.props.player1.name}
        />
        <p className="create-game-symbol-description">{this.props.player1.name || 'Player-1'} choose your symbol:</p>

        <div className="create-game__choose-symbol-block">
          <Button
            onClick={this.handleSymbolChange}
            className="choose-button"
            name="X"
            isActive={this.props.player1.symbolX}
          />

          <Button
            onClick={this.handleSymbolChange}
            className="choose-button"
            name="Y"
            isActive={this.props.player2.symbolX}
          />
        </div>

        <Input
          onChange={this.handleNameChange}
          name="Player-2"
          value={this.props.player2.name}
        />
        <p className="create-game-symbol-description">
          {this.props.player1.symbolX || this.props.player2.symbolX
            ? `${this.props.player2.name || 'Player-2'} your symbol is ${this.props.player2.symbolX ? 'X' : 'Y'}`
            : ''}
        </p>

        <Button
          onClick={!this.state.isFormValid ? this.handPopUp : null }
          className="control-button"
          to={this.state.isFormValid ? "/play-game" : null }
          name="Join Game"
        />
        <Button
          className="control-button"
          to="/"
          name="Back"
        />

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
    }
  }
}

// манипулируем состоянием Store
function mapDispatchToProps(dispatch) {
  return {
    addName: (item) => dispatch(addName(item)),
    addSymbol: (item) => dispatch(addSymbol(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGame);
