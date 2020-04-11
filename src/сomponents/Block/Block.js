import React from "react";


export default function Block(props) {
  return (
    <div
      className="play-game__game-desk-block"
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
}