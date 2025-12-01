import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/3.jpg";
import image4 from "../../assets/4.jpg";
import image5 from "../../assets/5.jpg";
import image6 from "../../assets/6.jpg";
import image7 from "../../assets/7.jpg";
import image8 from "../../assets/8.jpg";
import image9 from "../../assets/9.jpg";
import image10 from "../../assets/10.jpg";
import image11 from "../../assets/11.jpg";
import image12 from "../../assets/12.jpg";
import image13 from "../../assets/13.jpg";
import image14 from "../../assets/14.jpg";
import image15 from "../../assets/15.jpg";
import image16 from "../../assets/16.jpg";
import SectionHeader from "../SectionHeader/SectionHeader";

const brand = [
  {
    id: 1,
    icone: image1,
  },
  {
    id: 2,
    icone: image2,
  },
  {
    id: 3,
    icone: image3,
  },
  {
    id: 4,
    icone: image4,
  },
  {
    id: 5,
    icone: image5,
  },
  {
    id: 6,
    icone: image6,
  },
  {
    id: 7,
    icone: image7,
  },
  {
    id: 8,
    icone: image8,
  },
  {
    id: 9,
    icone: image9,
  },
  {
    id: 10,
    icone: image10,
  },
  {
    id: 11,
    icone: image11,
  },
  {
    id: 12,
    icone: image12,
  },
  {
    id: 13,
    icone: image13,
  },
  {
    id: 14,
    icone: image14,
  },
  {
    id: 15,
    icone: image15,
  },
  {
    id: 16,
    icone: image16,
  },
];

const Brands = () => {
  return (
    <div className="2xl:px-[180px] lg:px-[100px] md:px-[50px] px-[20px] py-[50px] bg-[#f8f8f8]">
      <SectionHeader
        title={"Shop By Brands"}
        subtitle={
          "Check out our collection of the top Popular Brands that encourage conversion"
        }
      />

      <div className="grid grid-cols-8 gap-[20px]">
        {brand?.map((item) => (
          <div
            key={item?.id}
            className="h-[100px] w-full flex items-center justify-center bg-[#fff] rounded-md group"
          >
            <img
              className="group-hover:scale-[1.1] duration-500"
              src={item?.icone}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
