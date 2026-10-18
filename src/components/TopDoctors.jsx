import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import DoctorCard from "./DoctorCard";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  return (
    <div className="mt-20 flex flex-col">
      <h1 className="text-2xl text-center">Top Doctors To Book</h1>
      <p className="text-sm font-light mt-3 text-center">
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div>
        <DoctorCard doctors={doctors.slice(0, 10)} />
      </div>
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="bg-blue-50 w-30 mx-auto rounded-full py-2 m-5 hover:cursor-pointer"
      >
        more
      </button>
    </div>
  );
};

export default TopDoctors;
