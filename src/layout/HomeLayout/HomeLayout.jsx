import React from "react";
import Navbar from "../../shared/Navbar";
import { Outlet } from "react-router";
import Footer from "../../shared/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomeLayout;
