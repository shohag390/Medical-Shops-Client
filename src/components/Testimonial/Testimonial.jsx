import React from "react";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";

const Testimonial = ({ item }) => {
  return (
    <div className="border-[1px] border-[#e7e7e7] p-[20px] rounded-md">
      <p className="text-[#353232] line-clamp-3 text-justify">
        "{item?.description}"
      </p>
      <div className="pt-[15px] flex items-center gap-[10px]">
        <img
          className="h-[50px] w-[50px] rounded-full"
          src={item?.image}
          alt=""
        />
        <div>
          <h4 className="text-[#353232] font-medium text-[18px] leading-[25px]">
            {item?.userName}
          </h4>
          <Rating
            initialRating={item?.ratting}
            fullSymbol={<FaStar className="text-amber-300" />}
            emptySymbol={<FaStar className="text-gray-300" />}
            readonly
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
