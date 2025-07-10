import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";


const Footer = () => {
  return (
    <section className="bg-[#111111] text-white pt-12 px-6 md:px-16 ">
      <div className="flex flex-col md:flex-row justify-between gap-10 pb-10 ">
        <div className="flex flex-col items-start gap-6">
          <div>
            <img src="../Maskgroup.png" alt="" />
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[20px] text-[#9F9F9F]">
            <a href="#">Home</a>
            <span>/</span>
            <a href="#">Special Offers</a>
            <span>/</span>
            <a href="#">Blog</a>
            
            <span>/</span>
              <span className="w-full" /> 
            
            <a href="#">About Us</a>
            <span>/</span>
            <a href="#">Payment & Delivery</a>
            <span>/</span>
              <span className="w-full" /> 
            <a href="#">Contacts</a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-10 text-sm text-gray-300">
          {/* 
          <div className="space-y-4"> */}
          <div>
            <p className="font-semibold">Contact Us</p>
            <p className="text-[28px] text-white">(+1 891 989-11-9)</p>
          </div>

          <div className="flex items-center gap-4 pt-2 text-md">
            <div className="border border-white p-2 rounded-full text-white hover:text-gray-400 cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="border border-white p-2 rounded-full text-white hover:text-gray-400 cursor-pointer">
              <FaXTwitter />
            </div>
            <div className="border border-white p-2 rounded-full text-white hover:text-gray-400 cursor-pointer">
              <FaYoutube />
            </div>
            <div className="border border-white p-2 rounded-full text-white hover:text-gray-400 cursor-pointer">
              <FaInstagram />
            </div>
          </div>

          {/* </div> */}
          {/* 
          <div className="space-y-4"> */}
          <div >
            <p className="mb-2 text-[12px]  font-normal">Location</p>
            <p className="text-[#9F9F9F] text-[14px] font-normal">1700 New Jersey Ave NW</p>
            <p className="text-[#9F9F9F] text-[14px] font-normal">Ste C</p>
            <p className="text-[#9F9F9F] text-[14px] font-normal">Washington, DC 20001</p>
          </div>

          <div>
            <p className=" mb-2 text-[12px] font-normal">Email</p>
            <p className="text-[#9F9F9F] text-[14px] font-normal">email@gmail.com</p>
          </div>

          {/*           
          </div> */}
          <div>
            <p className="font-semibold">Mo—Fr</p>
            <p className="text-[#9F9F9F] text-[28px] font-normal">
              7:00 AM - 2:00 AM{" "}
              <span className="text-gray-400">(Next day)</span>
            </p>
          </div>
        </div>

      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 pb-12 text-sm text-white ">
        <button
          className="border border-white p-2 rounded-full hover:bg-gray-800 transition"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FaArrowUp />
        </button>

        <p>© 2025 — Copyright</p>
      </div>

      <div className="bg-[#080808] p-4 md:p-6">
        <div className="rounded-lg w-full py-8 px-6 grid grid-cols-2 items-center">
          <div className="text-left">
            <p className="text-[#9F9F9F] text-[20px] font-medium">Explore</p>
            <p className="text-[#9F9F9F] text-[20px] font-medium">our success</p>
          </div>

          <div className="flex justify-end">
            <MdOutlineArrowOutward className="text-white text-lg hover:text-gray-300 cursor-pointer" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Footer;