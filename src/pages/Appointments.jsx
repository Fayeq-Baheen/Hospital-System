import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointments = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const fetchDocInfo = async () => {
    const doctor = await doctors.find((item) => item._id === docId);
    setDocInfo(doctor);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10,
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return (
    docInfo && (
      <div>
        <div className="flex flex-col sm:flex-row h-auto ">
          <img
            className="bg-[#5f6fff] rounded-xl w-60 object-cover"
            src={docInfo.image}
            alt="Doctor Image"
          />
          <div className="mx-10 border-gray-300 border-2 rounded-lg p-6">
            <h1 className="text-2xl flex">
              {docInfo.name}{" "}
              <img
                className="ml-2"
                src={assets.verified_icon}
                alt="verified icon"
              />
            </h1>
            <p className="font-light">
              {docInfo.degree} - {docInfo.speciality}{" "}
              <span className="border border-gray-400 rounded-full px-2 text-sm">
                {docInfo.experience}
              </span>
            </p>
            <h2 className="mt-3 mb-1">About</h2>
            <p className="text-sm font-light">{docInfo.about}</p>
            <p className="font-light mt-4">
              Appointment Fee:{" "}
              <span className="font-bold">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>
        <div className="lg:ml-70 md:ml-40 sm:ml-10">
          <h2 className="text-lg my-5">Booking Slots</h2>
          <div className="flex">
            {docSlots.length &&
              docSlots.map((item, index) => (
                <div className="flex">
                  <div
                    onClick={() => setSlotIndex(index)}
                    key={index}
                    className={`flex flex-col rounded-full border border-gray-400 py-5 w-16 mx-2 text-center hover:border-blue-500 hover:cursor-pointer hover:bg-[#5f6fff] hover:text-white ${slotIndex === index ? "bg-[#5f6fff] text-white border-blue-500" : ""} transition-all duration-300`}
                  >
                    <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                    <p>{item[0] && item[0].dateTime.getDate()}</p>
                  </div>
                </div>
              ))}
          </div>

          <div className="flex">
            {docSlots.length &&
            docSlots[slotIndex].map((item, index) => (
              <p
              onClick={()=>setSlotTime(index === slotTime? null:index)}
                key={index}
                className={`flex flex-row text-xs text-gray-700 rounded-full border border-gray-400 py-2 px-5 w-fit my-5 mx-1 text-center hover:border-blue-500 hover:cursor-pointer hover:bg-[#5f6fff] hover:text-white ${slotTime === index ? "bg-[#5f6fff] text-white border-blue-500" : ""} transition-all duration-300`}
              >
                <span>{item.time.toLowerCase()}</span>
              </p>
            ))}
          </div>
          <button className="text-center bg-[#5666ff] text-white w-50 rounded-full py-2 border-2 hover:cursor-pointer hover:bg-white hover:border-2 hover:border-[#5666ff] hover:text-[#5666ff] transition-transform duration-200">
            Book an appointment
          </button>
        </div>

        <div className="my-30">
          <p className="text-center text-2xl">Related Doctors</p>
          <p className="text-center font-light text-sm">Simply browse through our extensive list of trusted doctors.</p>
          <RelatedDoctors docId={docInfo._id} speciality={docInfo.speciality} />
        </div>
      </div>
    )
  );
};

export default Appointments;
