import React from "react";
import Browse from "./route/Browse";
import Login from "./route/Login";
import Error from "./route/Error";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Upcomingmovie from "./Upcomingmovie";
import GptSearch from "./gpt/GptSearch";
import Popularmovies from "./Popularmovies";
import Topratedmovie from "./Topratedmovie";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/gptSearch",
      element: <GptSearch />,
    },
    {
      path: "/upcoming",
      element: <Upcomingmovie />,
    },
    {
      path: "/popular",
      element: <Popularmovies />,
    },
    {
      path: "/toprated",
      element: <Topratedmovie />,
    },
    {
      path: "/error",
      element: <Error />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
