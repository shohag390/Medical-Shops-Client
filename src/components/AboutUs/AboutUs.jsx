import about1 from "../../assets/banner1.webp";
import about2 from "../../assets/banner2.webp";

const AboutUs = () => {
  return (
    <div className="2xl:px-[180px] lg:px-[100px] md:px-[50px] px-[20px] py-[50px] grid grid-cols-4 gap-[20px]">
      <div className="h-full w-full group overflow-hidden rounded-md">
        <img
          className="w-full h-full group-hover:scale-[1.1] duration-500"
          src={about1}
          alt=""
        />
      </div>
      <div className="h-full w-full group overflow-hidden rounded-md">
        <img
          className="w-full h-full group-hover:scale-[1.1] duration-500"
          src={about2}
          alt=""
        />
      </div>
      <div className="col-span-2">
        <p className="text-[#ff1a1a] font-medium pb-[8px]">About us</p>
        <h4 className="font-semibold text-[30px] text-[#111] w-[60%] leading-[38px]">
          We Are Committed Curating Constantly-Expanding
        </h4>
        <p className="py-[20px] text-justify text-[#353232]">
          There are many variations of passages of available but the majority
          have suffered alteration in same from by injected humore or randomised
          words which don't look even slightly belivable if you are going to use
          a passage.
        </p>
        <ul className="list-disc pl-[20px] flex flex-col gap-[5px] text-[#353232]">
          <li>Providr trusted medicines every day</li>
          <li>Products are 100% genuine and safe</li>
          <li>Medical Supplics are always available</li>
          <li>Affordable price suit every customer's</li>
          <li>Over-the -counter items are well-stocked</li>
        </ul>
        <button className="mt-[25px] py-[12px] px-[30px] bg-[#4572e6] hover:bg-[#2b62ec] text-[#fff] rounded-md">
          Read More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
