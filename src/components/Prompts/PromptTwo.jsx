import Rating from "react-rating";
import image from "../../assets/product1.PNG";
import { FaStar } from "react-icons/fa";
import image1 from "../../assets/product1.PNG";
import image2 from "../../assets/product2.PNG";
import image3 from "../../assets/product3.PNG";
import image4 from "../../assets/product4.PNG";
import image5 from "../../assets/product5.PNG";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const promptTwo = [
  {
    id: 1,
    image: image1,
    categoriName: "Pharmacy",
    description: "Omron mit elite digital automatic upper arm",
    orginalPrice: 77,
    discountPrice: 63,
    ratting: 4,
  },
  {
    id: 2,
    image: image2,
    categoriName: "Presonalized",
    description: "Preventative branded face mask",
    orginalPrice: 26,
    discountPrice: 18,
    ratting: 5,
  },
  {
    id: 3,
    image: image3,
    categoriName: "Presonalized",
    description: "Waterproof first aid kit inc cont ents Red",
    orginalPrice: 86,
    discountPrice: 75,
    ratting: 4,
  },
  {
    id: 4,
    image: image4,
    categoriName: "Remington",
    description: "Nitrile gloves accelerators free reflexx care",
    orginalPrice: 50,
    discountPrice: 42,
    ratting: 3,
  },
  {
    id: 5,
    image: image5,
    categoriName: "Sensile",
    description: "Welness whey isolate protein chocolate",
    orginalPrice: 170,
    discountPrice: 165,
    ratting: 4,
  },
];

const PromptTwo = () => {
  return (
    <div className="PromptTwo h-[60vh] w-full 2xl:px-[180px] lg:px-[100px] md:px-[50px] px-[2 0px] bg-[#f8f8f8] flex items-center justify-between">
      <div className="w-1/2">
        <h1 className="text-[#353232] font-medium pb-[10px]">Only This Week</h1>
        <h3 className="text-[#111] text-[45px] font-semibold w-[70%] leading-[55px] pb-[18px]">
          Precision Microscopes Clearer Insights
        </h3>
        <p className="text-[#353232] pb-[12px]">
          Efficient communication between doctors.
        </p>
        <h4 className="text-[24px] font-bold text-[#ff1a1a]">
          Surgical Assistance
        </h4>
        <button className="mt-[20px] py-[10px] px-[30px] bg-[#4572e6] hover:bg-[#2b62ec] text-[#fff] rounded-md">
          Shop Now
        </button>
      </div>
      <div className="p-[30px] rounded-md bg-[#fff] w-1/2">
        <h4 className="font-semibold text-[25px] text-[#111] text-center pb-[15px]">
          Deal of the week
        </h4>
        <div className="h-[1px] w-full bg-gray-200"></div>
        <div className="">
          <Swiper
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className=""
          >
            {promptTwo.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex items-center gap-[20px]">
                  <div>
                    <img
                      className="h-[250px] w-[250px]"
                      src={item?.image}
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-[20px] pb-[8px]">{item?.description}</p>
                    <div className="pb-[5px]">
                      <Rating
                        initialRating={item?.ratting}
                        fullSymbol={<FaStar className="text-amber-300" />}
                        emptySymbol={<FaStar className="text-gray-300" />}
                        readonly
                      />
                    </div>
                    <div className="flex items-center gap-[10px] pb-[20px]">
                      <p className="text-[red] text-[18px] font-semibold">
                        ${item?.discountPrice}
                      </p>
                      <p className="line-through text-[red] text-[18px] font-semibold">
                        ${item?.orginalPrice}
                      </p>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <div className="h-[60px] w-[60px] bg-[#f8f8f8] rounded-md flex flex-col items-center justify-center">
                        <h4 className="font-medium">428</h4>
                        <span>Days</span>
                      </div>
                      <div className="h-[60px] w-[60px] bg-[#f8f8f8] rounded-md flex flex-col items-center justify-center">
                        <h4 className="font-medium">02</h4>
                        <span>Hrs</span>
                      </div>
                      <div className="h-[60px] w-[60px] bg-[#f8f8f8] rounded-md flex flex-col items-center justify-center">
                        <h4 className="font-medium">18</h4>
                        <span>Min</span>
                      </div>
                      <div className="h-[60px] w-[60px] bg-[#f8f8f8] rounded-md flex flex-col items-center justify-center">
                        <h4 className="font-medium">35</h4>
                        <span>Sec</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PromptTwo;
