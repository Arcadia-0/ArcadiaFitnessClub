import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';  

// Import images
import image_1 from "../../assets/gallery/image-1.png";
import image_2 from "../../assets/gallery/image-2.png";
import image_3 from "../../assets/gallery/image-3.png";
import image_4 from "../../assets/gallery/image-4.png";

const Gallery = () => {
  const swiperRef = useRef(null); // Create a reference for Swiper

  return (
    <div className="container mx-auto py-10 px-4 relative">
      <Swiper
        ref={swiperRef}  // Attach the reference here
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        navigation={false} // Disable default navigation buttons
        modules={[Navigation]}
        breakpoints={{
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          440: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
        }}
      >
        {/* SwiperSlide items */}
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
        {/* Additional slides */}
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

      {/* Custom navigation buttons */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
        <button
          className="text-black bg-primary p-2 rounded-full"
          onClick={() => swiperRef.current.swiper.slidePrev()} 
        >
          <FaChevronLeft />
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
        <button
          className="text-black bg-primary p-2 rounded-full"
          onClick={() => swiperRef.current.swiper.slideNext()} 
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
