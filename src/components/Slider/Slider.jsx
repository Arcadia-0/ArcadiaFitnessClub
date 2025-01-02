import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


import slide from "../../assets/slider/slide.png";

const SimpleSlider = () => {
  return (
    <div className="w-full h-auto">
      <Swiper
        spaceBetween={10} 
        slidesPerView={1} 
        loop={true} 
        autoplay={{
          delay: 4000, 
          disableOnInteraction: false, 
        }}
        cssMode={true}
        modules={[Autoplay]} 
       
      >
        <SwiperSlide>
          <img src={slide} alt="Pilates" className="w-full h-auto rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide} alt="Fitness" className="w-full h-auto rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide} alt="Pilates" className="w-full h-auto rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide} alt="Fitness" className="w-full h-auto rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide} alt="Pilates" className="w-full h-auto rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide} alt="Fitness" className="w-full h-auto rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide} alt="Pilates" className="w-full h-auto rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide} alt="Fitness" className="w-full h-auto rounded-lg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SimpleSlider;
