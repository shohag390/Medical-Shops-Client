import { Link } from "react-router";
import image1 from "../../assets/cms-promot1.webp";
import image2 from "../../assets/cms-promot2.webp";
import image3 from "../../assets/cms-promot3.webp";

const promot = [
  {
    image: image1,
    subtitle: "Biggest Deals",
    title: "Temperature Test Makes Simple",
  },
  {
    image: image2,
    subtitle: "Today Offer",
    title: "Explore Analyze Discover More",
  },
  {
    image: image3,
    subtitle: "Up To 50% Off",
    title: "Monitor Heart Stay Healthy",
  },
];

const PromptThree = () => {
  return (
    <div className="2xl:px-[180px] lg:px-[100px] md:px-[50px] px-[20px] grid 2xl:grid-cols-3 grid-cols-1 gap-[20px] h-[50vh] w-full">
      {promot?.map((item, index) => (
        <div
          key={index}
          className="h-full w-full relative group overflow-hidden rounded-md"
        >
          <img
            className="absolute h-full w-full group-hover:scale-[1.1] duration-500"
            src={item?.image}
            alt=""
          />
          <div className="h-full w-full absolute p-[20px] flex justify-center flex-col">
            <h6 className="text-[#353232] font-medium text-[20px] pb-[10px]">
              {item?.subtitle}
            </h6>
            <h4 className="text-[#111] font-bold text-[30px] w-[60%] leading-[35px] ">
              {item?.title}
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
      ))}
    </div>
  );
};

export default PromptThree;
