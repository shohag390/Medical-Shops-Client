import React from "react";
import payment from "../assets/payment.png";
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.svg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const quickLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/shops",
    display: "Shops Now",
  },
  {
    path: "/about",
    display: "About Us",
  },
  {
    path: "/blog",
    display: "Blog",
  },
  {
    path: "/contacts",
    display: "Contacts",
  },
];
const account = [
  {
    path: "/",
    display: "Product Support",
  },
  {
    path: "/",
    display: "Checkout",
  },
  {
    path: "/",
    display: "License Policy",
  },
  {
    path: "/",
    display: "Order Tracking",
  },
];

const Footer = () => {
  return (
    <footer className="2xl:px-[180px] lg:px-[100px] md:px-[50px] px-[20px] pt-[25px]">
      <div className="flex justify-between pb-[35px]">
        <div className="w-[25%]">
          {/* Left Section */}
          <Link to={"/"}>
            <img
              className="lg:h-[40px] md:h-[35px] h-[30px]"
              src={logo}
              alt="logo"
            />
          </Link>
          <p className="text-justify pt-[20px] text-[#353232]">
            Welcome to our store, wehre we pride ourselves on providing
            exceptional products and inparalleled customer service our store
            style, and innovation.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-[20px] text-[#111] pb-[10px]">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-[10px]">
            {quickLinks?.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-[10px] text-[#353232] hover:text-[#4572e6] duration-500"
              >
                <MdKeyboardDoubleArrowRight />
                <NavLink to={item?.path}>{item?.display}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[20px] pb-[10px] text-[#111]">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-[10px]">
            {account?.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-[10px] text-[#353232] hover:text-[#4572e6] duration-500"
              >
                <MdKeyboardDoubleArrowRight />
                <NavLink to={item?.path}>{item?.display}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[35%]">
          <h4 className="font-bold text-[20px] pb-[10px] text-[#111]">
            About Information
          </h4>
          <ul className="flex flex-col gap-[10px]">
            <li className="flex items-center gap-[10px] text-[#353232] hover:text-[#4572e6] duration-500">
              <div>
                <MdKeyboardDoubleArrowRight />
              </div>
              <p>
                60 29th Street San Francisco 507-Union Trade Center, United
                States America-94110
              </p>
            </li>
            <li className="flex items-center gap-[10px] text-[#353232] hover:text-[#4572e6] duration-500">
              <div>
                <MdKeyboardDoubleArrowRight />
              </div>
              <p>(+00) 123-456-7890</p>
            </li>
            <li className="flex items-center gap-[10px] text-[#353232] hover:text-[#4572e6] duration-500">
              <div>
                <MdKeyboardDoubleArrowRight />
              </div>
              <p>+880 123-456-7890</p>
            </li>
            <li className="flex items-center gap-[10px] text-[#353232] hover:text-[#4572e6] duration-500">
              <div>
                <MdKeyboardDoubleArrowRight />
              </div>
              <p>shohag.webdev@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between py-[20px] border-t-[1px] border-gray-200">
        <div className="flex items-center gap-[10px]">
          <div className="h-[40px] w-[40px] rounded-md bg-[#f8f8f8] text-[#111] hover:text-[#f8f8f8] hover:bg-[#4572e6] flex items-center justify-center duration-500 text-[20px]">
            <FaFacebookF />
          </div>
          <div className="h-[40px] w-[40px] rounded-md bg-[#f8f8f8] text-[#111] hover:text-[#f8f8f8] hover:bg-[#4572e6] flex items-center justify-center duration-500 text-[20px]">
            <FaTwitter />
          </div>
          <div className="h-[40px] w-[40px] rounded-md bg-[#f8f8f8] text-[#111] hover:text-[#f8f8f8] hover:bg-[#4572e6] flex items-center justify-center duration-500 text-[20px]">
            <RiInstagramFill />
          </div>
          <div className="h-[40px] w-[40px] rounded-md bg-[#f8f8f8] text-[#111] hover:text-[#f8f8f8] hover:bg-[#4572e6] flex items-center justify-center duration-500 text-[20px]">
            <FaPinterestP />
          </div>
        </div>
        <div>
          <p>
            &copy; 2025 Medico | Medical Shop - All Right Reserved By Md Shohag
            Ali
          </p>
        </div>
        <div>
          <img src={payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
