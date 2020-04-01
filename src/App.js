import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './app.scss';
import MainMenu from "./containers/MainMenu/MainMenu"
import CreateGame from "./containers/CreateGame/CreateGame"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVolumeMute, faVolumeUp} from '@fortawesome/free-solid-svg-icons'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      volume: true
    }
  }

  handleVolume = () => {
    this.setState({
      volume: !this.state.volume
    })
  }

  render() {
    return (
      <div className="app">
        <Switch>
          {/*<Route path="/play-game" component={} />*/}
          {/*<Route path="/ladder" component={} />*/}
          <Route path="/create-game" component={CreateGame} />
          <Route path="/" exact component={MainMenu} />
        </Switch>
        <FontAwesomeIcon onClick={this.handleVolume} className="icon" icon={this.state.volume ? faVolumeUp : faVolumeMute} />
      </div>
    );
  }
}

export default App;
