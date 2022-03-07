import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <section>
      <h1>Actors Page</h1>
      <div>
        <h3>Name: {actors[0].name}</h3>
        <p>Movies: </p>
        <ul>
          <li>{actors[0].movies[0]}</li>
          <li>{actors[0].movies[1]}</li>
          <li>{actors[0].movies[2]}</li>
        </ul>
      </div>
      <div>
        <h3>Name: {actors[1].name}</h3>
        <p>Movies: </p>
        <ul>
          <li>{actors[1].movies[0]}</li>
          <li>{actors[1].movies[1]}</li>
          <li>{actors[1].movies[2]}</li>
        </ul>
      </div>
      <div>
        <h3>Name: {actors[2].name}</h3>
        <p>Movies: </p>
        <ul>
          <li>{actors[2].movies[0]}</li>
          <li>{actors[2].movies[1]}</li>
        </ul>
      </div>
      <div>
        <h3>Name: {actors[3].name}</h3>
        <p>Movies: </p>
        <ul>
          <li>{actors[3].movies[0]}</li>
          <li>{actors[3].movies[1]}</li>
          <li>{actors[3].movies[2]}</li>
        </ul>
      </div>
    </section>
  )
}

export default Actors;
