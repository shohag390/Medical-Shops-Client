import React from "react";
import image1 from "../../assets/cms-banner1.webp";
import image2 from "../../assets/cms-banner2.webp";
import { Link } from "react-router";

const PromptsOne = () => {
  return (
    <div className="2xl:px-[180px] lg:px-[100px] md:px-[50px] px-[20px] grid 2xl:grid-cols-3 grid-cols-1 gap-[20px] h-[50vh] w-full">
      <div className="col-span-2 h-full w-full relative group overflow-hidden rounded-md">
        <img
          className="absolute h-full w-full group-hover:scale-[1.1] duration-500"
          src={image1}
          alt=""
        />
        <div className="h-full w-full absolute p-[40px] flex justify-center flex-col">
          <h6 className="text-[#353232] font-medium text-[20px] pb-[10px]">
            Biggest Deals
          </h6>
          <h4 className="text-[#111] font-bold text-[30px] w-[40%] leading-[35px] ">
            Comfort Every Partent Premium Quality Hospital Beds
          </h4>
          <div className="pt-[15px]">
            <Link
              to="shops"
              className="py-[8px] px-[20px] bg-[#4572e6] hover:bg-[#2b62ec] text-[#fff] rounded-md"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <div className="h-full w-full relative group overflow-hidden rounded-md">
        <img
          className="absolute h-full w-full group-hover:scale-[1.1] duration-500"
          src={image2}
          alt=""
        />
        <div className="h-full w-full absolute p-[20px] flex justify-center flex-col">
          <h6 className="text-[#353232] font-medium text-[20px] pb-[10px]">
            Up To 50% Off
          </h6>
          <h4 className="text-[#111] font-bold text-[30px] w-[60%] leading-[35px] ">
            Essential Tool For Health Checks
          </h4>
          <div className="pt-[15px]">
            <Link
              to="shops"
              className="py-[8px] px-[20px] bg-[#4572e6] hover:bg-[#2b62ec] text-[#fff] rounded-md"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptsOne;
