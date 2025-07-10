import React from "react";

export default function SeasonalSpecials() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-32 py-16 md:py-24 gap-12 md:gap-24">
      {/* Left Content */}
      <div className="flex-1 max-w-2xl space-y-8">
        <p className="text-lg tracking-widest text-gray-400">BLUE ENERGY MOJITO</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Seasonal <br /> Specials
        </h1>
        <div>
          <h2 className="text-lg md:text-xl text-gray-400 font-medium">SUMMER PASSION</h2>
          <p className="text-base md:text-lg text-gray-400 mt-2 leading-relaxed">
            Don Q Cristal Rum, blueberries, mint syrup, lime juice, and Red Bull Blue Edition, garnished with a mint sprig.
          </p>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center text-yellow-400 text-lg">
            <span className="mr-1">⭐</span> 4.9
          </div>
          <div className="text-lg text-white font-semibold">$45.12</div>
        </div>
        <a href="#" className="text-lg text-white underline hover:text-gray-300 inline-flex items-center gap-1">
          See More <span>→</span>
        </a>
      </div>

      {/* Center Image */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src="/glassFolder/0.png"
          alt="Drinks"
          className="w-full max-w-xs md:max-w-md lg:max-w-full h-full object-contain rounded-xl shadow-2xl"
        />
      </div>

      {/* Right Menu */}
      <div className="flex-1 max-w-sm space-y-8 md:space-y-10">
        <h3 className="text-lg md:text-xl text-gray-300 font-light">
          A Tempting Prelude to Your Culinary Journey
        </h3>
        <div className="space-y-6 md:space-y-8">
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
            <div key={idx} className="flex items-center space-x-4 md:space-x-5">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover shadow-lg"
              />
              <div>
                <p className="text-xs md:text-sm text-gray-500">{item.category}</p>
                <h4 className="text-sm md:text-base text-white font-semibold leading-snug">
                  {item.title}
                </h4>
                <a href="#" className="text-xs md:text-sm text-white underline hover:text-gray-300">
                  See More →
                </a>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-6 md:mt-8 px-6 py-3 bg-white text-black rounded-full text-base font-semibold hover:bg-gray-200 transition-all duration-300">
          Book a Table
        </button>
      </div>
    </div>
  );
}
