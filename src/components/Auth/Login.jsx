import React from "react";
import SocialLogin from "./SocialLogin";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="2xl:h-[83vh] lg:h-[84vh] h-[89vh] w-full bg-[#f8f8f8] flex items-center justify-center">
      <div className="w-[30%] bg-[#fff] rounded-md p-[40px]">
        <h4 className="font-medium text-[20px] text-[#111] pb-[15px] text-center">
          Login Account
        </h4>
        <form className="flex flex-col gap-[15px]">
          <input
            className="bg-[#f8f8f8] py-[11px] px-[20px] rounded-md text-[#111] border-[1px] border-[#e9e9e9] focus:outline-0"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            className="bg-[#f8f8f8] py-[11px] px-[20px] rounded-md text-[#111] border-[1px] border-[#e9e9e9] focus:outline-0"
            type="password"
            placeholder="Enter Your Password"
          />
          <div>
            <a href="#">Forgot password?</a>
          </div>
          <button className="py-[10px] rounded-md bg-[#4572e6] hover:bg-[#2b62ec] duration-500 text-[#fff]">
            Login Now
          </button>
        </form>
        <div className="pt-[15px]">
          <p>
            You don't have an account? <Link to={"/register"}>Register</Link>
          </p>
        </div>
        <div className="py-[15px] flex items-center justify-between gap-[5px]">
          <div className="h-[1px] w-[45%] bg-[#e9e9e9]"></div>
          <p className=" flex items-center justify-center w-[10%]">Or</p>
          <div className="h-[1px] w-[45%] bg-[#e9e9e9]"></div>
        </div>
        <div>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
