import React from "react";
import MovieList from "../../components/movieList/page";
import { MovieListType } from "../../types/types";

const movieGetter: any = async () => {
  let responce = await fetch(
    `${process.env.TMDB_URL}/list/1?api_key=${process.env.TMDB_API_KEY}&language=en-US`
  );
  let result = await responce.json();
  return result;
};

const MovieGetter = async () => {
  const movieResponse = await movieGetter();
  const movieArray: MovieListType[] = movieResponse?.items;
  console.log("first", movieArray.slice(0, 3));
  return (
    <div>
      page <div><MovieList movieItems={movieArray} /></div>
      nnnn
    </div>
  );
};

export default MovieGetter;
