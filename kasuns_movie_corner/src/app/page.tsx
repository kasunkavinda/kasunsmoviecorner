import NavBar from "@/components/navBar/page";
import React from "react";
import MovieGetter from "./movieGetter/page";
import { Counter } from "@/components/counter/page";
import { store } from '../store/store'
import { Provider } from 'react-redux'

const page = () => {
  console.log("third");
  return (
    <div>
      <Provider store={store}>
      <NavBar />
      {/* @ts-expect-error Server Component */}
      <MovieGetter />
      <Counter />
      </Provider>
    </div>
  );
};

export default page;
