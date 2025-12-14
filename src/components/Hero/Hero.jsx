import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import image1 from "../../assets/cms1.webp";
import image2 from "../../assets/cms2.webp";
import banner1 from "../../assets/sample-3.webp";
import banner2 from "../../assets/sample-2.webp";
import banner3 from "../../assets/sample-1.webp";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router";

const heroData = [
  {
    id: 1,
    title: "Quick service",
    subtitle: "See Beyond Advanced Imaging Technology",
    description: "Hospital Staff quickly admitted her and began conducting",
    price: 9.99,
    image: banner1,
  },
  {
    id: 2,
    title: "Healthcare Products",
    subtitle: "Check Blood Pressure Anytime anywhere",
    description: "Hospital Staff quickly admitted her and began conducting",
    price: 999,
    image: banner2,
  },
  {
    id: 3,
    title: "Supportive Staff",
    subtitle: "Fast Precise Hygienic Temperature Check",
    description: "Hospital Staff quickly admitted her and began conducting",
    price: 499,
    image: banner3,
  },
];

const Hero = () => {
  return (
    <div className="2xl:h-[83vh] lg:h-[84vh] h-[89vh] w-full 2xl:px-[180px] lg:px-[100px] md:px-[50px] px-[20px] flex items-center justify-center">
      <div className="2xl:h-[79vh] lg:h-[80vh] w-full grid 2xl:grid-cols-3 grid-cols-1 gap-[20px]">
        {/* Main Hero Slider */}
        <div className="rounded-md col-span-2 row-span-2 overflow-hidden cursor-pointer bg-amber-50">
          <Swiper
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="overflow-hidden shadow-xl h-full"
          >
            {heroData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative w-full h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-start px-[60px]">
                    <h1 className="text-[#ff1a1a] uppercase font-medium pb-[10px]">
                      {item.title}
                    </h1>
                    <h3 className="text-[#111] text-[45px] font-semibold w-1/2 leading-[55px] pb-[18px]">
                      {item.subtitle}
                    </h3>
                    <p className="text-[#353232] pb-[20px]">
                      {item.description}
                    </p>
                    <h4 className="text-[24px] font-bold text-[#ff1a1a]">
                      Price From ${item.price}
                    </h4>
                    <button className="mt-[25px] py-[12px] px-[30px] bg-[#4572e6] hover:bg-[#2b62ec] text-[#fff] rounded-md">
                      Learn More
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Top Box */}
        <div className="rounded-md flex items-center justify-center font-semibold text-lg relative overflow-hidden group">
          <img
            className="h-full w-full group-hover:scale-[1.1] duration-500"
            src={image1}
            alt=""
          />
          <div className="h-full w-full absolute p-[20px] flex justify-center flex-col">
            <h6 className="text-[#353232] font-medium text-[20px] pb-[10px]">
              Trending Item
            </h6>
            <h4 className="text-[#111] font-bold text-[30px] w-[60%] leading-[35px]">
              Explore Ultherapy Firmer Skin
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

        {/* Right Bottom Box */}
        <div className="rounded-md flex items-center justify-center font-semibold text-lg relative overflow-hidden group">
          <img
            className="h-full w-full group-hover:scale-[1.1] duration-500"
            src={image2}
            alt=""
          />
          <div className="h-full w-full absolute p-[20px] flex justify-center flex-col">
            <h6 className="text-[#353232] font-medium text-[20px] pb-[10px]">
              Flat 50% Off
            </h6>
            <h4 className="text-[#111] font-bold text-[30px] w-[60%] leading-[35px] ">
              First Aid Needs Best Price
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
    </div>
  );
};

export default Hero;

/*

Primary Color: #4572e6   [Blue]
Secondary Color: #ffffff  [White]
Price Color: #ff1a1a   [Red]
Link Hover Color: #4572e6  [Blue]
Title Font Size: 20px
Body Font Size: 15px

*/
