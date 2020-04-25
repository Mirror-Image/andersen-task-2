import React from "react";
import './MainMenu.scss'
import Button from "../../сomponents/UI/Button/Button";
import {lastSessionData} from "../../helpers/LastSessionData";


export default function MainMenu() {
  return (
    <React.Fragment>
      <header className="main-menu__header">
        <h1>Welcome to&nbsp;
          <span>T</span>
          <span>i</span>
          <span>c</span>&nbsp;
          <span>T</span>
          <span>a</span>
          <span>c</span>&nbsp;
          <span>T</span>
          <span>o</span>
          <span>e</span> game!</h1>
      </header>
      <main className="main-menu__main">
        {lastSessionData() ?
          <Button to="/play-game" name="Resume game" className="control-button"/>
           : null
        }
        <Button to="/create-game" name="Create new game" className="control-button"/>
        <Button to="/ladder" name="Ladder" className="control-button"/>
      </main>
    </React.Fragment>
  );
}