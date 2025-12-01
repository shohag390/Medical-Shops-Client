import React, { useState } from "react";
import { LuUserRoundPen } from "react-icons/lu";
import { Link, NavLink } from "react-router";
import Logo from "./Logo";
import { MdOutlineMail, MdPhone } from "react-icons/md";
import { FaFacebook, FaLocationArrow, FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { TbBrandLinkedinFilled, TbBrandYoutubeFilled } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

const menu = [
  {
    id: 1,
    path: "/",
    display: "Home",
  },
  {
    id: 2,
    path: "/shops",
    display: "Shops Now",
  },
  {
    id: 3,
    path: "/about",
    display: "About Us",
  },
  {
    id: 4,
    path: "/blog",
    display: "Blog",
  },
  {
    id: 5,
    path: "/contacts",
    display: "Contacts",
  },
];

const favoriteCount = 2;
const cartCount = 5;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(false);

  return (
    <header className="2xl:h-[17vh] lg:h-[16vh] h-[11vh] w-full sticky top-0 left-0 right-0 z-50">
      {/* nav top */}
      <div className="lg:h-[4vh] h-[3vh] 2xl:px-[180px] lg:px-[100px] md:px-[50px] px-[20px] flex items-center justify-between bg-[#4572e6]">
        <p className="text-[#fff] lg:inline-block hidden">
          Get Up To 50% OFF New Season Styles, Today Only
        </p>
        <div className="flex items-center gap-[15px]">
          {!user && (
            <Link
              to={"/be-a-seller"}
              className="flex items-center gap-[5px] text-[#fff] hover:text-[#FF951b] duration-500"
            >
              <LuUserRoundPen className="text-[#fff] hover:text-[#FF961b] duration-500 text-[18px]" />
              <span>Be A Seller</span>
            </Link>
          )}
          <a href="#">
            <FaFacebook className="text-[#fff] hover:text-[#FF961b] duration-500 text-[18px]" />
          </a>
          <a href="#">
            <TbBrandYoutubeFilled className="text-[#fff] hover:text-[#FF961b] duration-500 text-[18px]" />
          </a>
          <a href="#">
            <TbBrandLinkedinFilled className="text-[#fff] hover:text-[#FF961b] duration-500 text-[18px]" />
          </a>
        </div>
      </div>

      {/* Nav Middle */}
      <div className="h-[8vh] w-full bg-[#ffffff] 2xl:px-[180px] lg:px-[100px] md:px-[50px] px-[20px] flex items-center justify-between border-b-[1px] border-gray-100">
        {/* Logo Section */}
        <Logo />

        {/* Contacts Info */}
        <div className="lg:flex items-center gap-[20px] hidden">
          <div className="flex items-center gap-[10px] font-medium">
            <MdPhone className="text-[20px]" />
            <span>+880 1233-445622</span>
          </div>
          <span>|</span>
          <div className="flex items-center gap-[10px] font-medium">
            <MdOutlineMail className="text-[20px]" />
            <span>medicaop@gmail.com</span>
          </div>
          <span>|</span>
          <div className="flex items-center gap-[10px] font-medium">
            <FaLocationArrow className="text-[15px]" />
            <span>Store Location</span>
          </div>
        </div>

        {/* Button Section */}

        <div className="flex items-center 2xl:gap-[20px] lg:gap-[18px] md:gap-[15px] gap-[12px]">
          <div className="lg:hidden flex items-center gap-6 relative">
            {/* Favorite */}
            <div className="relative">
              <Link to="/favorite">
                <FaRegHeart className="2xl:text-[22px] md:text-[17px] text-[20px]" />
              </Link>
              <span
                className={`absolute -top-2 -right-2 bg-[#4572e6] text-white text-[11px] font-semibold 2xl:w-[18px] lg:w-[12px] md:w-[15px] w-[12px] 2xl:h-[18px] md:h-[15px]  flex items-center justify-center rounded-full ${
                  favoriteCount > 0 ? "opacity-100" : "opacity-60"
                }`}
              >
                {favoriteCount || 0}
              </span>
            </div>

            {/* Cart */}
            <div className="relative">
              <Link to="/cart">
                <HiOutlineShoppingCart className="2xl:text-[25px] md:text-[20px] text-[25px]" />
              </Link>
              <span
                className={`absolute -top-2 -right-2 bg-[#4572e6] text-white text-[11px] font-semibold w-[18px] h-[18px] flex items-center justify-center rounded-full ${
                  cartCount > 0 ? "opacity-100" : "opacity-60"
                }`}
              >
                {cartCount || 0}
              </span>
            </div>
          </div>
          <Link
            to={"/login"}
            className="font-medium flex items-center gap-[2px] 2xl:py-[10px] lg:py-[6px] md:py-[7px] py-[5px] 2xl:px-[40px] lg:px-[35px] md:px-[30px] px-[20px] bg-[#4572e6] hover:bg-[#2b62ec] duration-500 text-[#fff] rounded-md"
          >
            Login
          </Link>
          <button
            className="text-[25px] lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {!open ? <IoMenu /> : <IoIosClose />}
          </button>
        </div>
      </div>

      {/* Manu  */}
      <nav className="2xl:h-[5vh] lg:h-[4vh] hidden 2xl:px-[180px] lg:px-[100px] md:px-[50px] bg-[#ffffff] lg:flex items-center justify-between border-b-[1px] border-gray-100">
        <ul className="flex items-center gap-[30px]">
          {menu?.map((item) => (
            <li key={item?.id} className="font-medium">
              <NavLink to={item?.path}>{item?.display}</NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6 relative">
          {/* Favorite */}
          <div className="relative">
            <Link to="/favorite">
              <FaRegHeart className="text-[22px]" />
            </Link>
            <span
              className={`absolute -top-2 -right-2 bg-[#4572e6] text-white text-[11px] font-semibold w-[18px] h-[18px] flex items-center justify-center rounded-full ${
                favoriteCount > 0 ? "opacity-100" : "opacity-60"
              }`}
            >
              {favoriteCount || 0}
            </span>
          </div>

          {/* Cart */}
          <div className="relative">
            <Link to="/cart">
              <HiOutlineShoppingCart className="text-[25px]" />
            </Link>
            <span
              className={`absolute -top-2 -right-2 bg-[#4572e6] text-white text-[11px] font-semibold w-[18px] h-[18px] flex items-center justify-center rounded-full ${
                cartCount > 0 ? "opacity-100" : "opacity-60"
              }`}
            >
              {cartCount || 0}
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

/*

Primary Color: #4572e6   [Blue]
Secondary Color: #ffffff  [White]
Price Color: #ff1a1a   [Red]
Link Hover Color: #4572e6  [Blue]
Title Font Size: 20px
Body Font Size: 15px

*/
