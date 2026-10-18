import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="flex my-20 px-6 sm:px-10 lg:px-12 md:px-14 md:mx-10 bg-[#5666ff] text-white rounded-lg shadow-2xl">
      {/* LEFT SIDE */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-white">
          <p>Book Appointment</p>
          <p className="my-2">With 100+ Trusted Doctors</p>
        </div>
        <button
          onClick={() => {navigate("/login"); scrollTo(0, 0)}}
          className="mt-2 text-center text-xl bg-white text-[#5666ff] w-50 rounded-full py-2 px-4 border-2 hover:cursor-pointer hover:bg-[#5f6fff] hover:border-2 hover:border-white hover:text-white transition-transform duration-200"
        >
          Create Account
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img src={assets.appointment_img} className="w-full absolute bottom-0 right-0 max-w-md" />
      </div>
    </div>
  );
};

export default Banner;
