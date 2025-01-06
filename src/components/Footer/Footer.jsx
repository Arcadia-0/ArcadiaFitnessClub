import { FaPhoneAlt } from 'react-icons/fa';  
import { MdLocationOn } from 'react-icons/md';  
import { AiOutlineClockCircle } from 'react-icons/ai'; 

const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer id='contact' style={{backgroundColor:'#757575'}} className="text-white pt-8 ">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Side */}
        <div>
          <h3 className="text-xl text-primary font-semibold mb-4">Contact Us</h3>
          
          <div className="mb-4 flex items-center">
            <FaPhoneAlt className="h-5 w-5 mr-2" />
            <p>+358 123 456 789</p>
          </div>
        
          <div className="mb-4 flex items-center">
            <MdLocationOn className="h-5 w-5 mr-2" />
            <p>Helsinki, Finland</p>
          </div>
          
          <div>
            <p><AiOutlineClockCircle className="inline-block mr-2" /><strong>Opening Hours:</strong></p>
            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
            <p>Sat: 10:00 AM - 4:00 PM</p>
            <p>Sun: Closed</p>
          </div>
        </div>

        {/* Right Side (Google Maps) */}
        <div className="w-full h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249556.3980975368!2d24.7500403452179!3d60.16985737352812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920b91c29228af%3A0x2d28c156bfa6e313!2sHelsinki%2C%20Finland!5e0!3m2!1sen!2sus!4v1704035222322!5m2!1sen!2sus"
            className="w-full h-full border-0 rounded-lg"
            allowFullScreen={true}  // Correctly passing the boolean value
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Copyright Text */}
      <div style={{backgroundColor:'#810101'}} className="text-center mt-8">
        <p>© {currentYear} Arcadia’s Fitness Club All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
