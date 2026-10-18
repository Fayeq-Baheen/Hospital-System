import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets_frontend/assets";

const SpecialityMenu = () => {
  return (
    <div id="speciality" className="items-center flex flex-col gap-4 py-16 text-gray-800">
      <h2 className="text-3xl font-medium">Find By Speciality</h2>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
        {specialityData.map((speciality, index) => (
          <Link className="flex flex-col items-center text-xs cursor-pointer shrink-0 hover:-translate-y-2.5 transition-all duration-400" key={index} to={`/doctors/${speciality.speciality}`}>
            <img className="w-16 sm:w-24 mb-2" src={speciality.image} alt="speciality img" />
            <p>{speciality.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
