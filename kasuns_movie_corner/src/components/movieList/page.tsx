"use-client";

import React from "react";
import { MovieListType } from "../../types/types";
import Image from "next/image";

const MovieList = (props: any) => {
  return (
    <div>
      {props.movieItems.map((item: MovieListType) => {
        return (
          <div key={item.id}>
            {item.original_title}
            <div>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt={`Poster of the ${item.original_title} movie`}
              width={499}
              height={748}
            />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
