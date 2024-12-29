import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import slide from "../../assets/slider/slide.png";



const SimpleSlider = () => {
  
  const settings = {
    dots: false, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 2, 
    autoplay: true, 
    autoplaySpeed: 4000, 
    cssEase: "ease-in-out",
    swipeToSlide: true, 
  };

  return (
    <div className="w-full h-auto">
     
      <Slider {...settings}>
        <div >
          <img src={slide} alt="Pilates" className="w-[full] h-auto rounded-lg shadow-md" />
        </div>
        <div >
          <img src={slide} alt="Fitness" className="w-[full]  h-auto rounded-lg shadow-md" />
        </div>
      
      </Slider>
    </div>
  );
};

export default SimpleSlider;
