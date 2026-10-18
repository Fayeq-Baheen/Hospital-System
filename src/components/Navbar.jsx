import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {assets} from "../assets/assets_frontend/assets"

const hrDesign = "border-none outline-none h-0.5 bg-[#5f6fff] w-3/5 m-auto hidden";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="fixed left-0 z-50 bg-stone-50 w-full flex gap-4 justify-between items-center px-10 py-4">
      <img
        src={assets.logo}
        onClick={() => navigate("/")}
        className="hover:cursor-pointer"
      />
      <ul className="md:flex gap-5 items-start font-medium hidden ">
        <NavLink to="/">
          <li className="py-1">Home</li>
          <hr className={hrDesign} />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">All Doctors</li>
          <hr className={hrDesign} />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">About</li>
          <hr className={hrDesign} />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">Contact</li>
          <hr className={hrDesign} />
        </NavLink>
      </ul>
      <div className="flex gap-2">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img src={assets.dropdown_icon} className="w-2.5" />
            <div className="absolute top-full right-0 bg-white shadow-lg rounded-md hidden group-hover:block">
              <div className="min-w-48 flex flex-col gap-2 px-4 py-2 bg-stone-100 rounded-xl text-gray-600">
                <p
                  onClick={() => navigate("/profile")}
                  className="border-b border-gray-300 pb-1 hover:text-black"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="border-b border-gray-300 pb-1 hover:text-black"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="border-b border-gray-300 pb-1 hover:text-black"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-[#4f2fdf] text-white rounded-full px-3 py-1.5 font-light hover:cursor-pointer hover:bg-blue-900"
          >
            Create Account
          </button>
        )}
        <img onClick={()=>setShowMenu(true)} className="w-6 md:hidden cursor-pointer" src={assets.menu_icon} alt="" />
        {/*  MOBILE MENU  */}
        <div className={`${showMenu? 'fixed w-full':'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all `}>
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img className="w-7 cursor-pointer" onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium ">
            <NavLink onClick={()=>setShowMenu(false)} to="/"><p className="px-4 py-2 rounded inline-block">HOME</p></NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to="/doctors"><p className="px-4 py-2 rounded inline-block">ALL DOCTORS</p></NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to="/about"><p className="px-4 py-2 rounded inline-block">ABOUT</p></NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to="/contact"><p className="px-4 py-2 rounded inline-block">CONTACT</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
