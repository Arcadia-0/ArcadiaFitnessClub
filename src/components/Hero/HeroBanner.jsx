import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation"; 
import { Navigation } from "swiper/modules"; 
import herobanner from "../../assets/hero/herobanner.png";

const HeroBanner = () => {
  const sliderContent = [
    {
      title: "Arcadia Fitness Club",
      description: "The best place to stay fit, healthy, and active.",
    },
    {
      title: "Join Our Community",
      description: "Become part of a supportive fitness journey with experts.",
    },
    {
      title: "Achieve Your Goals",
      description: "Personalized programs tailored to your fitness aspirations.",
    },
  ];

  return (
    <div className="relative w-full h-[400px] md:h-[600px] mt-12">
      {/* Image */}
      <img
        src={herobanner}
        alt="herobanner"
        className="w-full h-full object-cover rounded-lg"
      />

      {/* Swiper Container */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2  bg-primary rounded-lg w-3/4 md:w-1/3">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true} 
          navigation={true} 
          modules={[Navigation]} 
        >
          {/* Swiper Slide 1 */}
          <SwiperSlide className="text-center">
            <h1 className="text-xl md:text-3xl font-bold text-black  mb-4">
              {sliderContent[0].title}
            </h1>
            <p className="text-sm md:text-lg  text-black mb-6 leading-relaxed">
              {sliderContent[0].description}
            </p>
          </SwiperSlide>

          {/* Swiper Slide 2 */}
          <SwiperSlide className="text-center">
            <h1 className="text-xl md:text-3xl font-bold text-black  mb-4">
              {sliderContent[1].title}
            </h1>
            <p className="text-sm md:text-lg text-black mb-6 leading-relaxed">
              {sliderContent[1].description}
            </p>
          </SwiperSlide>

          {/* Swiper Slide 3 */}
          <SwiperSlide className="text-center">
            <h1 className="text-xl md:text-3xl font-bold text-black  mb-4">
              {sliderContent[2].title}
            </h1>
            <p className="text-sm md:text-lg text-black mb-6 leading-relaxed">
              {sliderContent[2].description}
            </p>
          </SwiperSlide>
        </Swiper>
      </div>

     
      
      </div>
   
  );
};

export default HeroBanner;
