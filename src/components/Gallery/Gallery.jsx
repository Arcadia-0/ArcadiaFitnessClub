import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  
import { Navigation } from 'swiper/modules'; 
import image_1 from "../../assets/gallery/image-1.png";
import image_2 from "../../assets/gallery/image-2.png";
import image_3 from "../../assets/gallery/image-3.png";
import image_4 from "../../assets/gallery/image-4.png";

const Gallery = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <Swiper
        spaceBetween={20}
        slidesPerView={4} 
        loop={true} 
        navigation={true} 
        modules={[Navigation]} 
        breakpoints={{
          1024: {
            slidesPerView: 4, // 1024px and above shows 4 slides
            spaceBetween: 30, // Adjust space between slides for larger screens
          },
          768: {
            slidesPerView: 3, 
            spaceBetween: 20, 
          },
          440: {
            slidesPerView: 2, 
            spaceBetween: 15, 
          },
          0: {
            slidesPerView: 1, 
            spaceBetween: 10, 
          },
         
        }}
        
      >
        {/* SwiperSlide elements */}
        <SwiperSlide>
          <img src={image_1} alt="Image 1" className="w-full rounded-lg shadow-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_2} alt="Image 2" className="w-full rounded-lg shadow-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_3} alt="Image 3" className="w-full rounded-lg shadow-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_4} alt="Image 4" className="w-full rounded-lg shadow-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_1} alt="Image 1" className="w-full rounded-lg shadow-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_2} alt="Image 2" className="w-full rounded-lg shadow-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_3} alt="Image 3" className="w-full rounded-lg shadow-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_4} alt="Image 4" className="w-full rounded-lg shadow-lg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;