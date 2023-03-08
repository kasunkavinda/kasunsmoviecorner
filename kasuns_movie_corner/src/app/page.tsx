import React from "react";
import MovieGetter from "./movieGetter/page";

const page = () => {
  console.log("third");
  return (
    <div>
      page
       {/* @ts-expect-error Server Component */}
      <MovieGetter />
    </div>
  );
};

export default page;
