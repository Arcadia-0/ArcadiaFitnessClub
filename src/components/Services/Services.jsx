import CardsData from "./CardsData";

const Services = () => {
  return (
    <div>
      {/* Title */}
      <div className="container mx-auto text-center mb-8">
        <h1 className="text-primary font-bold text-3xl">Our Services</h1>
      </div>

      {/* Card's Container */}
      <div className="container mx-auto flex flex-col md:flex-row flex-wrap justify-center gap-8">
        {CardsData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8 h-full"
          >
            {/* Card Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full max-w-md mb-4"
            />

            {/* Card Header & Content  */}
            <div className="text-center w-full max-w-md">
              <h1 className="text-primary text-xl font-semibold mb-2">
                {item.title}
              </h1>
              <p className="text-white">{item.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
