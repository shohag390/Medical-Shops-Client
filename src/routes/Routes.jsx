import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout/HomeLayout";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
