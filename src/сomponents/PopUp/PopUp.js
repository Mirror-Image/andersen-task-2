import React from "react";
import './PopUp.scss'


export default function PopUp(props) {
  return (
    <div className={props.visible ? "pop-up visible" : "pop-up"}>
      <p className="pop-up__text">
        {props.text}
      </p>
    </div>
  )
}