import React from "react";
import './Button.scss'
import {NavLink} from "react-router-dom"


export default function Button(props) {


  return (
    <NavLink
      onClick={props.onClick}
      to={props.to}
      className={props.className + (props.isActive ? "-active" : "")}
      name={props.name}
    >
      {props.name}
    </NavLink>
  )
}