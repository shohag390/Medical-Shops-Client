import React from "react";
import image1 from "../../../assets/product1.PNG";
import image2 from "../../../assets/product2.PNG";
import image3 from "../../../assets/product3.PNG";
import image4 from "../../../assets/product4.PNG";
import image5 from "../../../assets/product5.PNG";
import image6 from "../../../assets/product6.PNG";
import Product from "../AllProducts/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SectionHeader from "../../SectionHeader/SectionHeader";

const featuredProducts = [
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
  {
    id: 6,
    image: image6,
    categoriName: "Solutlons",
    description: "New Johnson antibacterial hand soap",
    orginalPrice: 70,
    discountPrice: 65,
    ratting: 5,
  },
  {
    id: 7,
    image: image3,
    categoriName: "Presonalized",
    description: "Waterproof first aid kit inc cont ents Red",
    orginalPrice: 86,
    discountPrice: 75,
    ratting: 4,
  },
];

const FeaturedProducts = () => {
  return (
    <div className="2xl:px-[180px] lg:px-[100px] md:px-[50px] px-[20px] py-[50px]">
      <SectionHeader
        title={"Featured Products"}
        subtitle={
          "Check out our collection of the top Featured Products that encourage conversion"
        }
      />

      <div className="w-full">
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          navigation={true}
          pagination={false}
          className="mySwiper"
        >
          {featuredProducts?.map((item) => (
            <SwiperSlide key={item?.id}>
              <Product item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedProducts;
