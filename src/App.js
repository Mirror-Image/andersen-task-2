import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './app.scss';
import MainMenu from "./containers/MainMenu/MainMenu"
import CreateGame from "./containers/CreateGame/CreateGame"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVolumeMute, faVolumeUp} from '@fortawesome/free-solid-svg-icons'
import PlayGame from "./containers/PlayGame/PlayGame";
import {createStore} from "redux";
import rootReducer from "./store/reducers/rootReducer";


export const store = createStore(rootReducer)

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Players: [
        {name: 'Test1', symbolX: false, score: 110},
        {name: 'Test2', symbolX: true, score: 220}
      ],
      settings: {
        menuMusic: true
      }
    }
  }

  handleVolume = () => {
    this.setState((prevState) => {
      return {menuMusic: !prevState.menuMusic};
    })
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/play-game" component={PlayGame} />
          {/*<Route path="/ladder" component={} />*/}
          <Route path="/create-game" component={CreateGame} />
          <Route path="/" exact component={MainMenu} />
        </Switch>
        <FontAwesomeIcon onClick={this.handleVolume} className="icon" icon={this.state.menuMusic ? faVolumeUp : faVolumeMute} />
      </div>
    );
  }
}

export default App;
