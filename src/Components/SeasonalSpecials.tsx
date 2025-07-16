import React from "react";

export default function SeasonalSpecials() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col md:flex-row items-stretch justify-between px-6 md:px-16 lg:px-24 py-12 gap-6 md:gap-8">
  {/* Left Content */}
  <div className="flex-1 flex flex-col justify-center space-y-6">
    <p className="text-sm tracking-widest text-gray-400 font-lora">BLUE ENERGY MOJITO  ____________</p>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-lora">
      Seasonal <br /> Specials
    </h1>

    <div>
      <h2 className="text-sm md:text-base text-gray-400 font-medium font-public">SUMMER PASSION</h2>
      <p className="text-sm md:text-base text-gray-400 mt-2 leading-relaxed max-w-sm font-public">
        Don Q Cristal Rum, blueberries, mint syrup, lime juice, and Red Bull Blue Edition; garnished with a mint sprig.
      </p>
    </div>

    <div className="flex items-center space-x-4">
      <div className="flex items-center text-[#FFFDF4] text-base font-public">
        ⭐ 4.9
      </div>
      <div className="text-base text-white font-semibold font-public">$45.12</div>
    </div>

    <a href="#" className="text-sm underline active:scale-110 text-[#9F9F9F] inline-flex items-center gap-1 font-public">
      See More →
    </a>
  </div>

  {/* Center Image */}
  <div className="flex-1 flex justify-center items-center">
    <img
      src="/glassFolder/0.png"
      alt="Drinks"
      className="w-full h-[400px] md:h-[500px] object-contain rounded-xl shadow-xl"
    />
  </div>

  {/* Right Menu */}
  <div className="flex-1 flex flex-col justify-between space-y-6">
    <h3 className=" lg:text-[24px] md:text-base text-gray-300 font-public">
      A Tempting Prelude to Your <br /> Culinary Journey
    </h3>

    <div className="flex-1 flex flex-col justify-center space-y-4 font-public">
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
        <div key={idx} className="flex items-center gap-3">
          <img
            src={item.image}
            alt={item.title}
            className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover"
          />
          <div>
            <p className="text-[12px] text-[#FFFDF4]">{item.category}   ____________</p>
            <h4 className="text-[16px] md:text-base text-[#FFFDF4] font-medium">{item.title}</h4>
            <a href="#" className="text-xs underline text-[#9F9F9F] active:scale-110 font-public">
              See More → 
             
            </a>
          </div>
        </div>
      ))}
    </div>

    <button className="px-5 py-2 active:scale-110 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition">
      Book a Table
    </button>
  </div>
</div>

  );
}
