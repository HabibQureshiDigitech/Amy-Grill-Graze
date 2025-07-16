import { useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Frame from "/Frame.png";

function NavbarLinks() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="relative z-20 flex items-center mt-3 justify-between px-4 md:px-6 py-4 max-w-7xl mx-auto">
        <div className="flex gap-15">
          <img src={Frame} alt="logo" className="h-10 md:h-12" />
          <ul className="hidden md:flex space-x-7 text-[14px] tracking-wide mt-2 font-lora">
            <li className="hover:text-white text-[#9F9F9F] cursor-pointer">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:text-white text-[#9F9F9F] cursor-pointer">
              <Link to={"/menu"}>Menu</Link>
            </li>
            <li className="hover:text-white text-[#9F9F9F] cursor-pointer">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="hover:text-white text-[#9F9F9F] cursor-pointer">
              <Link to={"/reservation"}>Reservation</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <button className="border border-white lg:block sm:block md:block hidden text-[14px] px-4 py-1 rounded-full hover:bg-white hover:text-black transition text-[#FFFFFF]">
           <Link to={'/contactus'}>Contact Us</Link>
          </button>
          <FaSearch className="text-white text-sm lg:block sm:block md:block hidden cursor-pointer" />
          <FaBars
            className="text-white text-lg cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </nav>

      {/* Modal */}
      <div
        className={`fixed inset-0 z-50 flex flex-col md:flex-row transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {/* Left Side */}
        <div className="w-full md:w-1/3 bg-black flex flex-col items-center justify-center gap-6 p-6 md:p-8">
          <img src={Frame} alt="logo" className="h-14 animate-fade-in" />
          <div className="space-y-4 text-[14px] animate-fade-in font-medium font-lora text-[#F3F3F3]" >
            <p>Happenings</p>
            <p>Group & Private Dining</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-2/3 bg-[#1a1513] flex flex-col md:flex-row justify-around p-6 md:p-8 space-y-6 md:space-y-0 animate-slide-in">
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl lg:text-[52px] font-semibold mb-4 text-[#c7b98b] font-lora ">Food</h2>
            <ul className="space-y-4 text-[14px] font-lora text-[#F3F3F3] font-medium">
              <li>Breakfast</li>
              <li>Main</li>
              <li>Amy Kids</li>
              <li>Lifestyle</li>
              <li>Happy Hour</li>
              <li>Seasonal Specials</li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-lora mb-4 text-[#FFFDF4] lg:text-[52px] font-semibold">Beverages</h2>
            <ul className="space-y-4 text-[14px] font-lora text-[#F3F3F3]">
              <li>Smoothies</li>
              <li>Coffee & Tea</li>
              <li>Sake & Classic Cocktails</li>
              <li>Specialty/Signature Drinks</li>
            </ul>
          </div>
        </div>

        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-2xl text-white"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </button>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 0.5s ease forwards;
          }
          .animate-slide-in {
            animation: slideIn 0.5s ease forwards;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideIn {
            from { transform: translateX(30px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
        `}
      </style>
    </>
  );
}

export default NavbarLinks;
