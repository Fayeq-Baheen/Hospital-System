import {assets} from "../assets/assets_frontend/assets"

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between my-6 pt-20 px-10 bg-[#5666ff] text-white rounded-xl shadow-2xl">
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-4 w-1/2">
        <h1 className="text-4xl/12 font-bold ">
          Book Appointment <br /> With Trusted Doctors
        </h1>
        <div className="flex items-center">
          <img className="w-30 h-10" src={assets.group_profiles} alt="" />
        <p className="border-y border-cyan-400 px-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit consectetur.
        </p>
        </div>
        <a href="#speciality" className="text-center bg-white text-[#5666ff] w-50 rounded-full py-2 border-2 hover:cursor-pointer hover:bg-[#5f6fff] hover:border-2 hover:border-white hover:text-white transition-transform duration-200">
          Book Appointment &rarr;
        </a>
      </div>

      {/* RIGHT SIDE */}
      <div>
        <img src={assets.header_img} className="w-150" />
      </div>
    </div>
  );
};

export default Header;
