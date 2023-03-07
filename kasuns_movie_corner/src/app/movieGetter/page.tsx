import React from "react";
import MovieList from "../movieList/page";
import { MovieListType } from "../../types/types";

const movieGetter: any = async () => {
  let responce = await fetch(
    "https://api.themoviedb.org/3/list/1?api_key=93fe08ff64c926fbf8f297a5695ad513&language=en-US"
  );
  let result = await responce.json();
  // console.log("result", result);
  return result;
};

const MovieGetter = async () => {
  const movieResponse = await movieGetter();
  const movieArray: MovieListType[] = movieResponse?.items;
  console.log("first", movieArray.slice(0, 3));
  return (
    <div>
      page <MovieList movieItems={movieArray} />
      nnnn
    </div>
  );
};

export default MovieGetter;
