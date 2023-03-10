import NavBar from "@/components/navBar/page";
import React from "react";
import MovieGetter from "./movieGetter/page";
import { Counter } from "@/components/counter/page";

const page = ({ children }: { children: React.ReactNode }) => {
  console.log("third");
  return (
    <div>
      <NavBar />
      {/* @ts-expect-error Server Component */}
      <MovieGetter />
      <>{children}</>
      <Counter />
    </div>
  );
};

export default page;
