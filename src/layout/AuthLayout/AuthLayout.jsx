import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AuthLayout;
