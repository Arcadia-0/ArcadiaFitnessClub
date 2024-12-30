import Slider from "react-slick";
import image_1 from "../../assets/gallery/image-1.png";
import image_2 from "../../assets/gallery/image-2.png";
import image_3 from "../../assets/gallery/image-3.png";
import image_4 from "../../assets/gallery/image-4.png";

// Slick slider settings
const settings = {
  dots: false, 
  infinite: true, 
  speed: 500,  
  slidesToShow: 3, 
  slidesToScroll: 1,  
  autoplay: false,  
  autoplaySpeed: 2000,  
  responsive: [
    {
      breakpoint: 1024, // Tablets and below
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768, // Mobile devices
      settings: {
        slidesToShow: 1,
        arrows: false,  // Hide arrows on smaller screens
      },
    },
  ],
};

const Gallery = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <Slider {...settings}>
        <div className="relative">
          <img src={image_1} alt="image 1" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="relative">
          <img src={image_2} alt="image 2" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="relative">
          <img src={image_3} alt="image 3" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="relative">
          <img src={image_4} alt="image 4" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="relative">
          <img src={image_1} alt="image 1" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="relative">
          <img src={image_2} alt="image 2" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="relative">
          <img src={image_3} alt="image 3" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="relative">
          <img src={image_4} alt="image 4" className="w-full rounded-lg shadow-lg" />
        </div>
      </Slider>
    </div>
  );
};

export default Gallery;
