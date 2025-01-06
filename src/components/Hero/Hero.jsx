import heroImage from "../../assets/hero/heroImage.png"; 
import HeroBanner from "./HeroBanner";

const Hero = () => {
  

  return (
    <div id="hero" className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
        
        <div className="text-white md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-semibold mb-4">
            <span className="text-primary">Arcadia Fitness Club</span> has been serving in Helsinki since 2004.
          </h1>
          <p className="text-base md:text-lg mb-6 leading-relaxed">
          Our 8,000 m² facility, with its newly renovated architecture focused entirely on healthy living and sports, continues to operate as one of Finlands largest sports and wellness centers. We understand that physical activity alone is not enough for a healthy lifestyle, and factors such as nutrition, psychology, physical therapy, and enjoyable living are also important. With personalized programs tailored to various goals such as weight loss, weight gain, spot fat reduction, staying fit, and correcting posture problems, we help you achieve your objectives.
          </p>
        </div>

       
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Hero Image 1"
            className="w-full h-auto max-w-none md:max-w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

     <HeroBanner/>
    </div>
  );
};

export default Hero;
