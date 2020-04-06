import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './app.scss';
import MainMenu from "./containers/MainMenu/MainMenu"
import CreateGame from "./containers/CreateGame/CreateGame"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVolumeMute, faVolumeUp} from '@fortawesome/free-solid-svg-icons'
import PlayGame from "./containers/PlayGame/PlayGame";


const data = {
  currentPlayers: [
    {name: '', symbolX: false, score: 0},
    {name: '', symbolX: false, score: 0}
  ],
  settings: {
    menuMusic: true
  }
};

export const Data = React.createContext(data);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuMusic: true
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
