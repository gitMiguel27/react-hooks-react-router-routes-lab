import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <section>
      <h1>Movies Page</h1>
      <div>
        <h3>Name: {movies[0].title}</h3>
        <p>Time: {movies[0].time}</p>
        <p>Genres: </p>
        <ul>
          <li>{movies[0].genres[0]}</li>
          <li>{movies[0].genres[1]}</li>
          <li>{movies[0].genres[2]}</li>
        </ul>
      </div>
      <div>
        <h3>Name: {movies[1].title}</h3>
        <p>Time: {movies[1].time}</p>
        <p>Genres: </p>
        <ul>
          <li>{movies[1].genres[0]}</li>
          <li>{movies[1].genres[1]}</li>
          <li>{movies[1].genres[2]}</li>
          <li>{movies[1].genres[3]}</li>
          <li>{movies[1].genres[4]}</li>
        </ul>
      </div>
      <div>
        <h3>Name: {movies[2].title}</h3>
        <p>Time: {movies[2].time}</p>
        <p>Genres: </p>
        <ul>
          <li>{movies[2].genres[0]}</li>
          <li>{movies[2].genres[1]}</li>
          <li>{movies[2].genres[2]}</li>
          <li>{movies[2].genres[3]}</li>
          <li>{movies[2].genres[4]}</li>
        </ul>
      </div>
    </section>
  )
}

export default Movies;
