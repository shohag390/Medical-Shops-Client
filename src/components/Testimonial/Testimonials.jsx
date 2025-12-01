import image1 from "../../assets/user.PNG";
import image2 from "../../assets/banner1.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SectionHeader from "../SectionHeader/SectionHeader";
import Testimonial from "./Testimonial";

const bestSellerProducts = [
  {
    id: 1,
    image: image1,
    role: "Buyer",
    userName: "Mst Soniya",
    description:
      "We value your time, so we ensure quick billiong, minimal waiting, and a smooth shopping exprience.",
    ratting: 4,
  },
  {
    id: 2,
    image: image2,
    role: "Seller",
    userName: "Mst Monira Khatun",
    description:
      "Medical store is dedicated to providing top-quality heathcare products and services to our valued customers",
    ratting: 5,
  },
  {
    id: 3,
    image: image1,
    role: "Seller",
    userName: "Md Sumona",
    description:
      "Believe in serving not just as a store, but as a trusted healthcare partner in your wellness journey.",
    ratting: 4,
  },
  {
    id: 4,
    image: image2,
    role: "Buyer",
    userName: "Mst Samanta",
    description:
      "Apart from medicines, we also stock a variety of healthcare essentials such as first aid kits equipment.",
    ratting: 3,
  },
  {
    id: 5,
    image: image1,
    role: "Seller",
    userName: "Moriom Khatun",
    description:
      "Medical store is dedicated to providing top-quality heathcare products and services to our valued customers",
    ratting: 4,
  },
  {
    id: 6,
    image: image2,
    role: "Seller",
    userName: "Tonusree Das",
    description:
      "Medical store is dedicated to providing top-quality heathcare products and services to our valued customers",
    ratting: 5,
  },
  {
    id: 7,
    image: image1,
    role: "Buyer",
    userName: "Mst Mowsumi",
    description:
      "Apart from medicines, we also stock a variety of healthcare essentials such as first aid kits equipment.",
    ratting: 4,
  },
];

const Testimonials = () => {
  return (
    <div className="2xl:px-[180px] lg:px-[100px] md:px-[50px] px-[20px] py-[50px]">
      <SectionHeader
        title={"See what our customers says"}
        subtitle={
          "Check out our latest reviews from customers and say your feedback"
        }
      />

      <div className="w-full">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          navigation={true}
          pagination={false}
          className="mySwiper"
        >
          {bestSellerProducts?.map((item) => (
            <SwiperSlide key={item?.id}>
              <Testimonial item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
