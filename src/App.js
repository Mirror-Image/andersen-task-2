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
import {connect} from "react-redux";


export const store = createStore(rootReducer)

class App extends React.Component {
  render() {
    return (
    <div className="app">
      <Switch>
        <Route path="/play-game" component={PlayGame} />
        {/*<Route path="/ladder" component={} />*/}
        <Route path="/create-game" component={CreateGame} />
        <Route path="/" exact component={MainMenu} />
      </Switch>
      <FontAwesomeIcon
        onClick={this.props.toggleMenuMusic}
        className="icon"
        icon={this.props.settings.menuMusic ? faVolumeUp : faVolumeMute} />
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    settings: {
      menuMusic: state.settings.menuMusic
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleMenuMusic: () => dispatch({type: 'TOGGLE_MENU_MUSIC'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
