import React from "react";
import logoImage from "../assets/logo.svg";
import { Link } from "react-router";

const Logo = () => {
  return (
    <div>
      <Link to={"/"}>
        <img
          className="2xl:h-[32px] lg:h-[28px] md:h-[25px] h-[22px]"
          src={logoImage}
          alt=""
        />
      </Link>
    </div>
  );
};

export default Logo;
