import { useNavigate } from "react-router-dom";

const DoctorCard = ({ doctors }) => {
  const navigate = useNavigate();

  return (
    <div className="lg:grid-cols-5 grid md:grid-cols-3 gap-x-4 gap-y-6 my-10">
      {doctors.map((doctor, index) => (
        <div
          onClick={() => {
            navigate(`/appointments/${doctor._id}`);
            scrollTo(0, 0);
          }}
          key={index}
          className=" border border-slate-300 rounded-2xl overflow-hidden pb-6 hover:cursor-pointer hover:-translate-y-2 transition-transform duration-500"
        >
          <img className="bg-slate-200 mb-3 w-full" src={doctor.image} alt="" />
          <span className="text-green-400 pl-3">Available</span>
          <h2 className="pl-3 font-bold">{doctor.name}</h2>
          <p className="pl-3 text-sm font-light">{doctor.speciality}</p>
        </div>
      ))}
    </div>
  );
};

export default DoctorCard;
