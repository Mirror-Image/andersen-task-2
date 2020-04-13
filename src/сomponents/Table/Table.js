import React from "react"
import './Table.scss'


// for Ladder component!!!

export default function Table(props) {

  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Name</th>
          <th>Score</th>
        </tr>
        {props.data.map((item, index) => {
          return (
            <tr>
              <td>{index}</td>
              <td>{item.name}</td>
              <td>{item.score}</td>
            </tr>
          );
        })}
      </thead>
    </table>
  );
}