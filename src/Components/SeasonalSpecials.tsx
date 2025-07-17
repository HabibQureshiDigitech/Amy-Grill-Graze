import { FaArrowRight } from "react-icons/fa6";

export default function SeasonalSpecials() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col mt-24 lg:flex-row items-stretch justify-between px-4 sm:px-8 lg:px-16 py-8 gap-8">
      
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-between gap-6 h-full min-h-full">
        <div className="space-y-4 flex-1 flex flex-col justify-between">
          <div>
            <p className="text-xs sm:text-sm tracking-widest text-gray-400 font-lora">
              BLUE ENERGY MOJITO ____________
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold leading-tight font-lora mt-4">
              Seasonal <br /> Specials
            </h1>
          </div>

          <div className="space-y-4">
            <h2 className="text-xs sm:text-sm text-gray-400 font-medium font-public">
              SUMMER PASSION
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm font-public">
              Don Q Cristal Rum, blueberries, mint syrup, lime juice, and Red Bull Blue Edition; garnished with a mint sprig.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center text-[#FFFDF4] text-sm font-public">
                ⭐ 4.9
              </div>
              <div className="text-sm text-white font-semibold font-public">
                $45.12
              </div>
            </div>
            <a
              href="#"
              className="text-xs underline active:scale-110 text-[#9F9F9F] inline-flex items-center gap-1 font-public"
            >
              See More <FaArrowRight />
            </a>
          </div>
        </div>
      </div>

      {/* Center Image */}
      <div className="flex-1 flex justify-center items-center h-full min-h-full">
        <img
          src="/glassFolder/0.png"
          alt="Drinks"
          className="w-full max-w-xs md:max-w-sm h-auto object-contain rounded-xl shadow-xl"
        />
      </div>

      {/* Right Menu */}
      <div className="flex-1 flex flex-col justify-between gap-6 h-full min-h-full">
        <h3 className="text-lg md:text-xl lg:text-2xl text-gray-300 font-public">
          A Tempting Prelude to Your <br /> Culinary Journey
        </h3>

        <div className="flex-1 flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-4">
            {[
              {
                title: "Weekend Indulgence: A Collection of Brunch",
                category: "Brunch Favorites",
                image: "/glassFolder/3.png",
              },
              {
                title: "Charred to Perfection: Grilled Favorites",
                category: "Grilled Classics",
                image: "/glassFolder/2.png",
              },
              {
                title: "Plant-Based Delights with Smoky BBQ Flavor",
                category: "Vegetarian BBQ",
                image: "/glassFolder/1.png",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 w-full"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover"
                />
                <div className="space-y-1">
                  <p className="text-xs text-[#FFFDF4]">
                    {item.category} ____________
                  </p>
                  <h4 className="text-sm md:text-base text-[#FFFDF4] font-medium">
                    {item.title}
                  </h4>
                  <a
                    href="#"
                    className="flex gap-1 text-xs underline text-[#9F9F9F] active:scale-110 font-public"
                  >
                    See More <FaArrowRight />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button className="px-4 mt-6 py-2 active:scale-110 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 self-start">
            Book a Table
          </button>
        </div>
      </div>
    </div>
  );
}
