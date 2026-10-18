import About from './pages/About'
import Contact from './pages/Contact'
import Doctors from './pages/Doctors'
import Home from './pages/Home'
import Login from './pages/Login'
import MyAppointments from './pages/MyAppointments'
import Profile from './pages/Profile'
import Appointments from './pages/Appointments'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <div className='h-25'>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/appointments/:docId" element={<Appointments />} />
      </Routes>
      <Footer />
    </div>
  )
}
