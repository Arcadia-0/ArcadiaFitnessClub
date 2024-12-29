import banner from "../../assets/membership/banner.png"

const Membership = () => {
  return (
    <div className="container mx-auto">
        <div className="relative w-full">
            {/* Ensure the image is responsive */}
            <img src={banner} alt="Membership banner" className="w-full h-auto object-cover" />
            
            {/* Center the text and button using absolute positioning and flexbox */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-white text-2xl mb-4">Take the first step towards a healthier lifestyle.</p>
                <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition duration-300">Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Membership;
