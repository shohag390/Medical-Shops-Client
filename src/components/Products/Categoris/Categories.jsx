import image1 from "../../../assets/categorylist1.jpg";
import image2 from "../../../assets/categorylist2.jpg";
import image3 from "../../../assets/categorylist3.jpg";
import image4 from "../../../assets/categorylist5.jpg";
import image5 from "../../../assets/categorylist8.jpg";
import image6 from "../../../assets/categorylist4.jpg";
import image7 from "../../../assets/categorylist1.jpg";
import image8 from "../../../assets/categorylist7.jpg";
import image9 from "../../../assets/categorylist9.jpg";
import image10 from "../../../assets/categorylist6.jpg";
import SectionHeader from "../../SectionHeader/SectionHeader";
import Categorie from "./Categorie";

const categories = [
  {
    id: 1,
    image: image1,
    categoriName: "Eye Drop",
    totalItems: 20,
  },
  {
    id: 2,
    image: image2,
    categoriName: "Heart Monitor",
    totalItems: 20,
  },
  {
    id: 3,
    image: image3,
    categoriName: "Microscope",
    totalItems: 20,
  },
  {
    id: 4,
    image: image4,
    categoriName: "Nitrile Gloves",
    totalItems: 20,
  },
  {
    id: 5,
    image: image5,
    categoriName: "Human Skull",
    totalItems: 20,
  },
  {
    id: 6,
    image: image6,
    categoriName: "Stethoscope",
    totalItems: 20,
  },
  {
    id: 7,
    image: image7,
    categoriName: "Face Mask",
    totalItems: 20,
  },
  {
    id: 8,
    image: image8,
    categoriName: "Thermometer",
    totalItems: 20,
  },
  {
    id: 9,
    image: image9,
    categoriName: "Ventilation",
    totalItems: 20,
  },
  {
    id: 10,
    image: image10,
    categoriName: "Electic Bed",
    totalItems: 20,
  },
];

const Categories = () => {
  return (
    <div className="2xl:px-[180px] lg:px-[100px] md:px-[50px] px-[20px] py-[25px]">
      <SectionHeader
        title={"Shop By Categories"}
        subtitle={
          "Check Out all the feature categories for simple product discovery."
        }
      />

      <div className="grid grid-cols-5 gap-[20px]">
        {categories?.map((item) => (
          <Categorie key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
