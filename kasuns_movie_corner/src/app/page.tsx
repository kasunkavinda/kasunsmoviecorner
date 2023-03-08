import NavBar from "@/components/navBar/page";
import React from "react";
import MovieGetter from "./movieGetter/page";

const page = () => {
  console.log("third");
  return (
    <div>
      <NavBar />
      {/* @ts-expect-error Server Component */}
      <MovieGetter />
    </div>
  );
};

export default page;
