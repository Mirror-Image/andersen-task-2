import React from "react";
import './MainMenu.scss'
import Button from "../../сomponents/UI/Button/Button";


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
        <Button to="/create-game" name="Create new game"/>
        <Button to="/ladder" name="Ladder"/>
      </main>
    </React.Fragment>
  );
}