import React from "react";
import './Block.scss'

export default function Block(props) {
  return (
    <div
      className={props.className}
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
}