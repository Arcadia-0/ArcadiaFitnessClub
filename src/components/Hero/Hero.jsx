import { useState } from 'react';
import heroImage from "../../assets/hero/heroImage.png"; // heroImage1
import heroImage2 from "../../assets/hero/heroImage2.png"; // heroImage2

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel content
  const carouselContent = [
    {
      title: "Arcadia Fitness Club",
      text: "Arcadia Fitness Club has been serving in Helsinki since 2004. Our 8,000 m² facility, with its newly renovated architecture focused entirely on healthy living and sports."
    },
    {
      title: "Personalized Programs",
      text: "We help you achieve your fitness goals with personalized programs tailored for weight loss, weight gain, and improving overall fitness."
    },
    {
      title: "Wellness Focus",
      text: "At Arcadia, we understand that a healthy lifestyle is more than just physical activity. We focus on nutrition, psychology, and overall wellness."
    },
  ];

  // Carousel 
  const nextContent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselContent.length);
  };

  const prevContent = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselContent.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
        {/* left side */}
        <div className="text-white md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-semibold mb-4">
            <span className="text-primary">Arcadia Fitness Club</span> has been serving in Helsinki since 2004.
          </h1>
          <p className="text-base md:text-lg mb-6 leading-relaxed">
          Our 8,000 m² facility, with its newly renovated architecture focused entirely on healthy living and sports, continues to operate as one of Finlands largest sports and wellness centers. We understand that physical activity alone is not enough for a healthy lifestyle, and factors such as nutrition, psychology, physical therapy, and enjoyable living are also important. With personalized programs tailored to various goals such as weight loss, weight gain, spot fat reduction, staying fit, and correcting posture problems, we help you achieve your objectives.
          </p>
        </div>

        {/* first img) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Hero Image 1"
            className="w-full h-auto max-w-none md:max-w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="relative mt-16">
        {/* second img */}
        <div className="relative w-full h-[500px] md:h-[600px]">
          <img
            src={heroImage2}
            alt="Hero Image 2"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />

          {/* Carousel */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-center text-black p-4 md:p-6 bg-opacity-80 bg-primary rounded-lg w-full max-w-[70%] sm:max-w-[60%] md:max-w-[50%] lg:max-w-[40%]">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
              {carouselContent[currentIndex].title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6">
              {carouselContent[currentIndex].text}
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-6 mt-4">
              <button
                onClick={prevContent}
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full shadow-lg transform hover:scale-110 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextContent}
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full shadow-lg transform hover:scale-110 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
