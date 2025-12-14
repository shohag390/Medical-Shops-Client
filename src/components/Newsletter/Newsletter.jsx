import React from "react";

const Newsletter = () => {
  return (
    <div className="2xl:px-[180px] lg:px-[100px] md:px-[50px] px-[20px] py-[25px]">
      <div className="h-full w-full newsletter rounded-md p-[60px] flex items-center justify-between">
        <div className="w-[60%]">
          <h1 className="text-[#ff1a1a] uppercase font-medium pb-[10px]">
            Discount for your first order
          </h1>
          <h3 className="text-[#111] text-[30px] font-semibold leading-[40px] pb-[10px]">
            Join Our Newsletter <br /> Get Best Deals Everyday
          </h3>
          <p className="text-[#353232]">
            Join our email subscription now to get updates on promotion and
            coupons.
          </p>
        </div>
        <div className="w-[40%]">
          <div className="w-full h-[50px] bg-[#fff] flex items-center justify-between p-[5px] rounded-md">
            <input
              className="w-[70%] h-full focus:outline-none px-[15px]"
              type="text"
              placeholder="Your email address"
            />
            <button className="w-[30%] h-full bg-[#4572e6] hover:bg-[#2b62ec] text-[#fff] rounded-sm">
              Subscribe
            </button>
          </div>
          <div className="pt-[12px] flex items-center gap-[10px]">
            <input type="checkbox" />
            <span>
              I aggree to the terms and conditions ant the privacy policy.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
