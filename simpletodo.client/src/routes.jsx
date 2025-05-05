import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

import Posts from "./components/Posts";

export const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Posts />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
    ],
  },
]);

// {
//   index: true,
//   element: <App />,
// },
// {
//   path: "/posts",
//   element: <Posts />,
// },
