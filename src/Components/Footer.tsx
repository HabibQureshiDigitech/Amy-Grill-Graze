import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaInstagram
} from "react-icons/fa6";
import { BsArrowUpRight } from "react-icons/bs";
import { BsArrowUp } from "react-icons/bs";

const Footer = () => {
  return (

    <section className="bg-[#111111] text-white pt-12 px-4 md:px-6">
  <div className="flex flex-col gap-10 max-w-7xl mx-auto ">

    <div className="flex flex-col md:flex-row justify-between gap-10 pb-10">
      
      <div className="flex flex-col items-start gap-6">
        <div>
          <img src="../Maskgroup.png" alt="Logo" />
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[20px] text-[#9F9F9F] max-w-xl font-public">
        
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

      <div className="grid sm:grid-cols-2 gap-10 text-sm text-gray-300 ">

        <div>
          <p className="font-semibold font-public">Contact Us</p>
          <p className="text-[28px] text-white font-public">(+1 891 989-11-9)</p>
        </div>

        <div className="flex items-center gap-2 pt-2 text-lg lg:justify-end ">
          <div className="border border-white p-2 rounded-full  cursor-pointer ">
            <FaFacebookF />
          </div>
          <div className="border border-white p-2 rounded-full  cursor-pointer">
            <FaXTwitter />
          </div>
          <div className="border border-white p-2 rounded-full  cursor-pointer">
            <FaYoutube />
          </div>
          <div className="border border-white p-2 rounded-full  cursor-pointer">
            <FaInstagram />
          </div>
        </div>

        <div>
          <p className="mb-2 text-[14px] font-normal text-[#FFFDF4] font-public">Location</p>
          <p className="text-[#9F9F9F] text-[14px] font-normal font-public">1700 New Jersey Ave NW</p>
          <p className="text-[#9F9F9F] text-[14px] font-normal font-public">Ste C</p>
          <p className="text-[#9F9F9F] text-[14px] font-normal font-public">Washington, DC 20001</p>
        </div>

        <div className="lg:text-end">
          
           <p className="mb-2 text-[14px] font-normal lg:me-32   font-public">Email</p>
          <p className="text-[#9F9F9F] text-[14px] font-normal lg:me-12 font-public">email@gmail.com</p>
        </div>
        

        <div>
          <p className="font-semibold font-public">Mo — Fr</p>
          <p className="text-[#9F9F9F] text-[24px] font-normal font-public">
            7:00 AM - 2:00 AM <span className="text-gray-400">(Next day)</span>
          </p>
        </div>
      </div>
    </div>

    <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6  text-sm text-[#FFFDF4]">
      <button
        className="border border-white p-2 rounded-full transition"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <BsArrowUp className="text-lg "/>
        
      </button>
      <p className="text-[14px] text-[#9F9F9F] font-public">© 2025 — Copyright</p>
    </div>

    <div className="bg-[#080808] p-4 md:p-6 rounded-lg">
      <div className="w-full py-8 px-6 grid grid-cols-2 items-center">
        <div className="text-left">
          <p className="text-[#9F9F9F] text-[20px] font-medium font-lora">Explore</p>
          <p className="text-[#9F9F9F] text-[20px] font-medium font-lora">our success</p>
        </div>
        <div className="flex justify-end">
          <BsArrowUpRight className="text-white text-lg hover:text-gray-300 cursor-pointer" />
        </div>
      </div>
    </div>

  </div>
</section>

  );
};

export default Footer;