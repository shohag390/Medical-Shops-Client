import React from "react";
import { FaStar } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Rating from "react-rating";

const Product = ({ item }) => {
  return (
    <div className="border-[1px] border-[#e7e7e7] p-[15px] rounded-md group">
      <div className="h-[160px] w-full relative overflow-hidden">
        <img
          className="absolute h-full w-full group-hover:scale-[1.1] duration-500"
          src={item?.image}
          alt=""
        />
      </div>
      <p className="text-[#353232] pb-[5px]">{item?.categoriName}</p>
      <h2 className="font-medium text-[19px] text-[#111] line-clamp-2 leading-[24px]">
        {item?.description}
      </h2>
      <div className="py-[10px]">
        <Rating
          initialRating={item?.ratting}
          fullSymbol={<FaStar className="text-amber-300" />}
          emptySymbol={<FaStar className="text-gray-300" />}
          readonly
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <p className="text-[red] text-[18px] font-semibold">
            ${item?.discountPrice}
          </p>
          <p className="line-through text-[red] text-[18px] font-semibold">
            ${item?.orginalPrice}
          </p>
        </div>
        <div>
          <button className="h-[45px] w-[45px] flex items-center justify-center bg-[#f8f8f8] rounded-md text-[#4572e6] text-[22px] hover:text-[#f8f8f8] hover:bg-[#4572e6] duration-500">
            <HiOutlineShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
