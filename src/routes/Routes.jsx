import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout/HomeLayout";
import Home from "../pages/Home/Home";
import BeASeller from "../components/Auth/BeASeller";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import Favorite from "../components/Favorite/Favorite";
import Cart from "../components/Products/Cart/Cart";
import Products from "../components/Products/AllProducts/Products";
import AboutUs from "../components/AboutUs/AboutUs";
import Blogs from "../components/Blogs/Blogs";
import Contacts from "../components/Contacts/Contacts";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/be-a-seller",
        element: <BeASeller />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/shops",
        element: <Products />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
    ],
  },
]);
