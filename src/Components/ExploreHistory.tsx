import { FaArrowRightLong } from "react-icons/fa6";
import { BsArrowUpRight } from "react-icons/bs";

export default function ExploreHistory() {
  return (
    <section className="bg-black text-white px-4 sm:px-6 md:px-12 py-10 md:py-16">
      <div className="flex flex-col gap-6 md:flex-row max-w-6xl mx-auto">
        {/* LEFT BIG CARD */}
        <div
          className="relative flex-1 rounded-3xl p-6 sm:p-8 md:p-10 overflow-hidden flex flex-col text-white"
          style={{
            backgroundImage: "url('/history/Subtract.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Top Link */}
          <a
            href="#"
            className="text-[20px] text-[#9F9F9F] underline inline-flex items-center gap-1 font-public "
          >
            Explore Our History <FaArrowRightLong/>
          </a>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-sm mt-4 font-lora text-[#FFFDF4]">
            Our Journey of <br /> Culinary Mastery
          </h1>

          <div className="flex-grow" /> {/* Spacer */}

          {/* Circle Plus */}
          <button className="absolute bottom-6 left-6 active:scale-110 border-3 border-dashed border-[#9F9F9F] rounded-full w-12 h-12 flex items-center justify-center text-xl font-public">
            +
          </button>

          {/* Read Testimonials Button */}
          <button className="absolute bottom-2 right-4 px-4 py-2 active:scale-110 bg-[#FFFDF4] text-[#242424] text-xs sm:text-sm rounded-full font-public">
            Read Testimonials
          </button>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="flex flex-col gap-6 w-full md:w-1/3">
          {/* Top Right Card */}
          <div className="relative  p-6 sm:p-7 md:p-8 flex flex-col gap-2" style={{ backgroundImage: 'url("/history/background.png")' }} >
            <button className="absolute border h-8 w-8 rounded-full active:scale-110 border-white  top-4 right-4 text-lg p-1">< BsArrowUpRight /></button>
            <h3 className="text-[14px] text-[#FFFDF4] font-public ">Meet the Chef</h3>
            <h2 className="text-[20px] sm:text-xl font-normal font-public text-[#FFFDF4] ">
              Culinary Excellence
            </h2>
            <p className="text-[16px] sm:text-sm text-[#9F9F9F] font-public">
              Discover the people, traditions, and values that have shaped our
              restaurant into who we are.
            </p>
          </div>

          

          {/* Bottom Right Card */}
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="/history/2.jpg"
              alt="tradition and innovation"
              className="w-full h-48 sm:h-56 md:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/50 p-4 flex flex-col justify-end rounded-3xl">
              <h2 className="text-[20px] sm:text-base md:text-lg font-normal font-public text-[#FFFDF4]">
                Where Tradition and Innovation
              </h2>
              <p className="text-[16px] sm:text-sm text-[#9F9F9F] font-public">
                At the crossroads of timeless culinary traditions and modern
                creativity.
              </p>
              <button className="self-end text-lg mt-2"><FaArrowRightLong/></button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
