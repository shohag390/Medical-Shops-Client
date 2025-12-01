import icone1 from "../../assets/support1.PNG";
import icone2 from "../../assets/support2.PNG";
import icone3 from "../../assets/support3.PNG";
import icone4 from "../../assets/support4.PNG";

const supports = [
  {
    id: 1,
    icone: icone1,
    title: "Free Fast Shipping",
    subtitle: "Free shipping for order over",
  },
  {
    id: 2,
    icone: icone2,
    title: "24/7 Online Suport",
    subtitle: "Within 30 days for an exchange",
  },
  {
    id: 3,
    icone: icone3,
    title: "Best Special Gifts",
    subtitle: "Within 30 days money return",
  },
  {
    id: 4,
    icone: icone4,
    title: "Secure Payments",
    subtitle: "Pay with multiple credit cards",
  },
];

const Support = () => {
  return (
    <div className="2xl:px-[180px] lg:px-[100px] md:px-[50px] px-[20px] pt-[20px] pb-[25px] grid grid-cols-4 gap-[20px]">
      {supports?.map((item) => (
        <div
          key={item?.id}
          className="flex items-center justify-between border-[1px] border-[#e7e7e7] p-[20px] rounded-md group cursor-pointer"
        >
          <div className="w-[30%]">
            <img
              className="h-[50px] w-[50px] group-hover:scale-[1.1] duration-500"
              src={item?.icone}
              alt="icone"
            />
          </div>
          <div className="w-[70%]">
            <h4 className="font-medium text-[20px] text-[#111]">
              {item?.title}
            </h4>
            <p className="text-[#353232]">{item?.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Support;
