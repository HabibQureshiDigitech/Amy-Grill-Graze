import { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Frame from "/Frame.png"; // Adjust path if needed
import FrameLogo from "/logo.png"; // Adjust path if needed

function NavbarLinks() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Top Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-4 md:px-6 py-4 max-w-7xl mx-auto mt-3">
        <div className="flex items-center gap-6 md:gap-10">
          <img src={Frame} alt="logo" className="h-10 md:h-12" />
          <ul className="hidden md:flex space-x-7 text-sm tracking-wide text-[#9F9F9F]">
            <li className="hover:text-white"><Link to="/">Home</Link></li>
            <li className="hover:text-white"><Link to="/food">Menu</Link></li>
            <li className="hover:text-white"><Link to="/about">About</Link></li>
            <li className="hover:text-white"><Link to="/reservation">Reservation</Link></li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/contactus">
            <button className="hidden md:block text-sm px-4 py-1 border border-white rounded-full hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </Link>
          <FaSearch className="hidden md:block text-white text-sm cursor-pointer" />
          <FaBars
            className="text-white text-lg cursor-pointer"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          />
        </div>
      </nav>

      {/* Fullscreen Modal with animation */}
      <div
        className={`fixed inset-0 z-50 flex flex-col md:flex-row bg-black text-white transition-transform duration-300 ease-in-out
          ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"}
        `}
      >
        {/* Left Panel */}
        <div className="w-full md:w-1/3 bg-black p-6 md:p-10 flex flex-col justify-between">
          <div>
            <img src={FrameLogo} alt="logo" className="h-46 mb-6" />
            <div className="text-base space-y-4">
              <div>Happenings</div>
              <div>Group & Private Dining</div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-2/3 text-white p-6 md:p-10 relative flex flex-col">
          {/* Close Button */}
          <FaTimes
            className="absolute top-4 right-4 text-2xl text-white cursor-pointer"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          />

          {/* Center Title */}
          <div className="text-center mt-8 md:mt-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#d5be89] tracking-wider">
              Amy Grill & Graze
            </h1>
            <p className="text-sm mt-1 text-[#d5be89]">Soulful Grilling 🍖 Gracefully Served</p>
          </div>

          {/* Food & Beverages */}
          <div className="flex flex-col p-6 md:flex-row justify-center gap-10 md:gap-28 mt-10 md:mt-20 bg-[#1a1513]">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#f2eadf] mb-5">Food</h2>
              <ul className="space-y-7 text-sm sm:text-base">
                <li>Breakfast</li>
                <li>Main</li>
                <li>Amy Kids</li>
                <li>Lifestyle</li>
                <li>Happy Hour</li>
                <li>Seasonal Specials</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#f2eadf] mb-5">Beverages</h2>
              <ul className="space-y-7 text-sm sm:text-base">
                <li>Smoothies</li>
                <li>Coffee & Tea</li>
                <li>Sake & Classic Cocktails</li>
                <li>Specialty/Signature Drinks</li>
              </ul>
            </div>
          </div>

          {/* Bottom Spacer for Mobile */}
          <div className="h-10 md:hidden" />
        </div>
      </div>
    </>
  );
}

export default NavbarLinks;
