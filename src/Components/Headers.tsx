
import videoo from "/video/Home1.mp4";
import logoo from "/logo.png";
import Frame from "/Frame.png";
import profile from "/profileSction1.png";
import { FaSearch, FaBars } from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";

const Headers = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden font-serif text-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src={videoo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Left-side dark overlay */}
      <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-[#0e0c0b]/80 z-10" />

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-8 py-5 max-w-7xl mx-auto">
        <div>
          <img src={Frame} alt="logo" className="h-10 md:h-12" />
        </div>

        <ul className="hidden md:flex space-x-10 text-sm tracking-wide">
          <li className="hover:text-yellow-300 cursor-pointer">Home</li>
          <li className="hover:text-yellow-300 cursor-pointer">Menu</li>
          <li className="hover:text-yellow-300 cursor-pointer">About</li>
          <li className="hover:text-yellow-300 cursor-pointer">Reservation</li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="border border-white text-xs px-4 py-1 rounded-full hover:bg-white hover:text-black transition">
            Contact Us
          </button>
          <FaSearch className="text-white text-sm cursor-pointer" />
          <FaBars className="text-white text-sm cursor-pointer md:hidden" />
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-20 md:pt-28 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div className="space-y-6">
          <p className="text-sm text-yellow-100 tracking-wider">
            Savor the Extraordinary
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-yellow-200">
            A Symphony <span className="text-white">of</span>
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Taste & <span className="italic underline">Elegance</span>
          </h1>
          <p className="text-gray-300 text-base max-w-md">
            Discover the perfect harmony between indulgent flavors and
            unparalleled elegance. Each dish at our restaurant is a symphony
            crafted to captivate all your senses.
          </p>
          <div className="flex gap-6 items-center pt-2">
            <div className="flex items-center gap-1 text-white text-sm">
              <span>1</span>/<span>5</span>
            </div>
            <button className="underline text-sm hover:text-yellow-300 transition">
              Make a Reservation
            </button>
          </div>
        </div>

        {/* Right Logo */}
        <div className="flex justify-center md:justify-end">
          <img
            src={logoo}
            alt="Restaurant decor"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>
      </div>

      {/* Bottom Section */}
{/* Bottom Section */}
<div className="relative z-20 w-full flex flex-col md:flex-row justify-between items-stretch mt-16 px-6 md:px-0 gap-4 md:gap-0">
  {/* Left Strip */}
  <div className="flex items-center gap-4 bg-[#0f0d0e] px-6 py-6 w-full md:max-w-[50%]">
    <img
      src={profile}
      alt="profile"
      className="w-11 h-11 rounded-full object-cover"
    />
    <div className="flex-1">
      <p className="text-white text-sm font-semibold">
        Enjoy our iconic dishes anytime, anywhere.
      </p>
      <p className="text-gray-400 text-xs">
        Bringing the flavors of our grill home to you.
      </p>
    </div>
    <MdDoubleArrow className="text-[#aa9b83] text-3xl ml-2" />
  </div>

  {/* Right Button - moved to left side */}
  <div className="flex items-center justify-start bg-transparent w-full md:max-w-[40%] px-48 py-6">
    <button className="border border-white text-xs px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
      Join our VIP Club
    </button>
  </div>
</div>



    </section>
  );
};

export default Headers;
