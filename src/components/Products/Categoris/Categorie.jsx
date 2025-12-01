import React from "react";

const Categorie = ({ item }) => {
  return (
    <div className="flex items-center justify-between bg-[#f8f8f8] p-[20px] rounded-md group cursor-pointer">
      <div className="w-[50%]">
        <img
          className="rounded-full h-[100px] w-[100px] group-hover:scale-[1.1] duration-500"
          src={item?.image}
          alt=""
        />
      </div>
      <div className="w-[50%]">
        <h4 className="font-medium text-[19px] text-[#111] line-clamp-1">
          {item?.categoriName}
        </h4>
        <p className="text-[#353232]">Items ({item?.totalItems})</p>
      </div>
    </div>
  );
};

export default Categorie;
