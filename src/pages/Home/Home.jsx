import React from "react";
import Hero from "../../components/Hero/Hero";
import Support from "../../components/Support/Support";
import Categories from "../../components/Products/Categoris/Categories";
import NewProducts from "../../components/Products/NewProducts/NewProducts";
import PromptsOne from "../../components/Prompts/PromptsOne";
import FeaturedProducts from "../../components/Products/FeaturedProducts/FeaturedProducts";
import PromptTwo from "../../components/Prompts/PromptTwo";
import BestSellerProducts from "../../components/Products/BestSellerProducts/BestSellerProducts";
import PromptThree from "../../components/Prompts/PromptThree";
import Blogs from "../../components/Blogs/Blogs";
import Brands from "../../components/Brands/Brands";
import AboutUs from "../../components/AboutUs/AboutUs";
import Testimonials from "../../components/Testimonial/Testimonials";
import Newsletter from "../../components/Newsletter/Newsletter";

const Home = () => {
  return (
    <div>
      <Hero />
      <Support />
      <Categories />
      <NewProducts />
      <PromptsOne />
      <FeaturedProducts />
      <PromptTwo />
      <BestSellerProducts />
      <PromptThree />
      <Testimonials />
      <Brands />
      <AboutUs />
      <Blogs />
    </div>
  );
};

export default Home;
