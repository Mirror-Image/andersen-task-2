import React from "react";
import './Button.scss'
import {NavLink} from "react-router-dom"


export default function Button(props) {


  return (
    <NavLink to={props.to} className="button">{props.name}</NavLink>
  )
}