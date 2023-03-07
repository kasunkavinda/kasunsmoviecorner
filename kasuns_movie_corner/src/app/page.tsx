import React from "react";
import MovieGetter from "./movieGetter/page";

const page = async () => {
  console.log("third");
  return (
    <div>
      page
      <MovieGetter />
    </div>
  );
};

export default page;
