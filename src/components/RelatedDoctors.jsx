import { useContext, useEffect, useState } from "react"
import {AppContext} from "../context/AppContext"
import DoctorCard from "../components/DoctorCard"

const RelatedDoctors = ({speciality, docId}) => {

    const {doctors} = useContext(AppContext)

    const [relDoc, setRelDoc] = useState([])

    useEffect(() => {
        if(doctors.length > 0 && speciality){
            const doctorsData = doctors.filter((doctor) => (doctor.speciality === speciality && doctor._id !== docId))
            setRelDoc(doctorsData)
        }
    }, [docId, speciality, doctors])


  return (
    <div>
        <DoctorCard doctors={relDoc} />
    </div>
  )
}

export default RelatedDoctors