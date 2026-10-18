import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import DoctorCard from "../components/DoctorCard";

const Doctors = () => {
  const { doctors } = useContext(AppContext);
  const [filteredDoctors, setFilteredDoctors] = useState([...doctors]);
  const [showFilter, setShowFilter] = useState(false)
  const { speciality } = useParams();
  const navigate = useNavigate();

  function filterDoctors() {
    if (speciality) {
      setFilteredDoctors(
        doctors.filter((doctor) => speciality === doctor.speciality),
      );
    } else {
      setFilteredDoctors(doctors);
    }
  }

  useEffect(() => {
    filterDoctors();
  }, [doctors, speciality]);

  return (
    <div>
      <p>Browse Through the doctors specialist</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button className={`py-1 px-3 border rounded text-sm cursor-pointer transition-all sm:hidden ${showFilter? 'bg-[#5f6fff] text-white ':''}`} onClick={() => setShowFilter(prev => !prev)}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter? 'flex' : 'hidden sm:flex'}`}>
          <ul>
            <li
              onClick={() =>
                speciality === "General physician"
                  ? navigate("/doctors")
                  : navigate("/doctors/General physician")
              }
              className={`border border-gray-300 px-4 py-1.5 w-50 my-2 hover:cursor-pointer hover:bg-blue-50 rounded ${speciality === "General physician" ? "bg-blue-100" : ""}`}
            >
              General Physician
            </li>
            <li
              onClick={() =>
                speciality === "Gynecologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Gynecologist")
              }
              className={`border border-gray-300 px-4 py-1.5 w-50 my-2 hover:cursor-pointer hover:bg-blue-50 rounded ${speciality === "Gynecologist" ? "bg-blue-100" : ""}`}
            >
              Gynecologist
            </li>
            <li
              onClick={() =>
                speciality === "Dermatologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Dermatologist")
              }
              className={`border border-gray-300 px-4 py-1.5 w-50 my-2 hover:cursor-pointer hover:bg-blue-50 rounded ${speciality === "Dermatologist" ? "bg-blue-100" : ""}`}
            >
              Dermatologist
            </li>
            <li
              onClick={() =>
                speciality === "Pediatricians"
                  ? navigate("/doctors")
                  : navigate("/doctors/Pediatricians")
              }
              className={`border border-gray-300 px-4 py-1.5 w-50 my-2 hover:cursor-pointer hover:bg-blue-50 rounded ${speciality === "Pediatricians" ? "bg-blue-100" : ""}`}
            >
              Pediatricians
            </li>
            <li
              onClick={() =>
                speciality === "Neurologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Neurologist")
              }
              className={`border border-gray-300 px-4 py-1.5 w-50 my-2 hover:cursor-pointer hover:bg-blue-50 rounded ${speciality === "Neurologist" ? "bg-blue-100" : ""}`}
            >
              Neurologist
            </li>
            <li
              onClick={() =>
                speciality === "Gastroenterologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Gastroenterologist")
              }
              className={`border border-gray-300 px-4 py-1.5 w-50 my-2 hover:cursor-pointer hover:bg-blue-50 rounded ${speciality === "Gastroenterologist" ? "bg-blue-100" : ""}`}
            >
              Gastroenterologist
            </li>
          </ul>
        </div>
        <div>
          <div className="mx-10">
            <DoctorCard doctors={filteredDoctors} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
