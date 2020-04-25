import React from "react"
import './Input.scss'


export default function Input(props) {

  return (
    <input
      className="input"
      onChange={props.onChange}
      name={props.name}
      placeholder={props.name + " type your name"}
      value={props.value}
      type="text"/>
  )
}
