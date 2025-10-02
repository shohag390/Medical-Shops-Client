// src/components/HeroSection.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import imageOne from '../../assets/images/heroOne.png';
import imageTwo from '../../assets/images/heroTwo.png';

const slides = [
    {
        id: 1,
        image: imageOne,
        subTitle: "Higher lavel of care",
        title: 'Providing Total Health Care Solutions',
        description: 'Top-tier electronics, delivered right to your door, means you can access the latest technology and high-quality appliances without leaving your home. This service offers a convenient and efficient way to shop for electronics,',
    },
    {
        id: 2,
        image: imageTwo,
        subTitle: "Vacciness of covid-19",
        title: 'Association Between COVID-19 Vaccines',
        description: 'Nonetheless, the bulk of the literature demonstrates that COVID-19 vaccine is associated with temporary changes in menstrual characteristics (cycle length and flow) and menstrual pain.',
    },
];

const Hero = () => {
    return (
        <div className="lg:px-[100px] md:px-[50px] px-[20px] lg:h-[86vh] md:h-[88vh] h-full hero container mx-auto">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 7000 }}
                loop={true}
                pagination={{ clickable: true }}
                className="w-full h-full"
            >
                {slides?.map((item) => (
                    <SwiperSlide key={item?.id}>
                        <div className='flex items-center justify-between'>
                            <div className='w-1/2'>
                                <h4 className='text-[20px] font-medium uppercase pb-[10px]'>{item?.subTitle}</h4>
                                <h1 className='font-bold text-[40px] leading-[45px] capitalize text-[#1a1a1a] lg:w-[85%]'>{item?.title}</h1>
                                <p className='text-[#6b6b6b] pt-[10px] pb-[25px] w-[90%]'>{item?.description}</p>
                                <button className='text-[#fff] bg-[#00a297] py-[10px] px-[30px] rounded-md uppercase hover:bg-[#1a1a1a] duration-500'>Shop Now</button>
                            </div>
                            <div className='pt-[50px]'>
                                <img className='h-[89vh]' src={item?.image} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Hero;