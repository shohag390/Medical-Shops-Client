import React from "react";
import image1 from "../../assets/01.jpg";
import image2 from "../../assets/02.jpg";
import image3 from "../../assets/03.jpg";
import image4 from "../../assets/04.jpg";
import SectionHeader from "../SectionHeader/SectionHeader";

const blogs = [
  {
    id: 1,
    image: image1,
    date: "Jun 18,2025",
    description: "Quality tools crafted to handle tough jubs with ease.",
  },
  {
    id: 2,
    image: image2,
    date: "Jun 30,2025",
    description: "Discover top brands and unbeatable value on tools now.",
  },
  {
    id: 3,
    image: image3,
    date: "Sep 23,2025",
    description: "Get the tools your trade or project demands today.",
  },
  {
    id: 4,
    image: image4,
    date: "Nov 9,2025",
    description: "Affordable,long-lasting tools built to work as hand.",
  },
];

const Blogs = () => {
  return (
    <div className="2xl:px-[180px] lg:px-[100px] md:px-[50px] px-[20px] pb-[25px]">
      <SectionHeader
        title={"Get Latest Update & News"}
        subtitle={
          "Check Out our collection of the top Popular Blog that encourage conversion."
        }
      />

      <div className="grid grid-cols-4 gap-[20px]">
        {blogs?.map((item) => (
          <div key={item?.id} className="group cursor-pointer">
            <div className="h-[280px] w-full relative overflow-hidden rounded-md bg-amber-300">
              <img
                className="h-full w-full group-hover:scale-[1.1] duration-500"
                src={item?.image}
                alt=""
              />
            </div>
            <div>
              <p className="font-medium text-[red] pt-[5px] pb-[8px]">
                {item?.date}
              </p>
              <h4 className="font-medium text-[19px] text-[#111] line-clamp-2 leading-[24px]">
                {item?.description}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
