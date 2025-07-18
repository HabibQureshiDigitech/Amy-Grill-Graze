import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { BsArrowUpRight } from "react-icons/bs";
import { VscStarHalf } from "react-icons/vsc";

const dishes = [
  {
    title: "Foie Gras Torchon",
    price: "$50.42",
    rating: 4,
    image: "/menu/4.png",
    desc: "Flavor Harmony.",
  },
  {
    title: "Herb-Infused Bliss",
    price: "$30.12",
    rating: 4,
    image: "/menu/3.png",
    desc: "Aromatic Herbs.",
  },
  {
    title: "Smoky Essie",
    price: "$50.42",
    rating: 4,
    desc: "Grilled Delights.",
    image: "/menu/2.png",
  },
  {
    title: "Seasonal Delights",
    price: null,
    rating: null,
    image: null,
    desc: "Discover the chef’s personal favorites.",
  },
  {
    title: "Margherita",
    price: "$19–27",
    rating: 4,
    image: "/menu/1.png",
    desc: "A timeless favorite.",
  },
  {
    title: "Vegan & Vegetarian",
    price: null,
    rating: null,
    image: null,
    desc: "Vegan and vegetarian options.",
  },
];

const MenuShowcase = () => {
  const tabs = [
    "All",
    "Small Plates",
    "Appetizers",
    "Special Sides",
    "Desserts",
  ];
  const [activeTab, setActiveTab] = useState("All");

  return (
    <section className="bg-[#080808] text-white py-24 px-6 md:px-32 font-serif">
      {/* Heading */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <h2 className="text-3xl lg:text-[70px] md:text-5xl font-bold leading-tight text-center md:text-left mb-6 md:mb-0 font-lora">
          It's not just a meal, <br className="hidden md:block" />
          it's an experience
        </h2>
        <button className="border border-white px-[30px] py-[12px] rounded-full text-sm bg-white text-black transition font-public">
          View All Menu
        </button>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap lg:gap-36 gap-8 justify-center w-full mb-10">
        <button className="px-9 py-3 rounded-2xl bg-[#111111] text-lg font-medium font-public">
          Elite Dining Experience
          <p className="text-xs text-[#9F9F9F] font-public">For Connoisseurs</p>
        </button>
        <button className="px-17 py-3 rounded-2xl border border-gray-500 text-lg font-public">
          Essence of Flavor
          <p className="text-xs text-[#9F9F9F] font-public">
            Signature Selections
          </p>
        </button>
        <button className="px-6 py-3 rounded-2xl border border-gray-500 text-lg font-public">
          Culinary Masterpieces
          <p className="text-xs text-[#9F9F9F] font-public">
            Artisan Creations
          </p>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-6 justify-center mb-10 text-sm p-2 rounded-full ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1 rounded-full transition ${
              activeTab === tab
                ? "bg-white text-[#242424]"
                : "border border-gray-500 text-[#69634E] hover:bg-white hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dishes or No Data */}
      {activeTab === "All" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish, i) => (
            <div
              key={i}
              className="bg-[#0f0f0f] rounded-2xl relative group overflow-visible z-0 "
            >
              {/* Top Arrow */}
              <BsArrowUpRight className="absolute top-4 right-4 text-white rounded-full p-1 text-3xl opacity-100 transition z-20" />

              {/* Image or Placeholder */}
              <div className="flex justify-center items-center relative min-h-[220px]">
                {dish.image ? (
                  <img
                    src={dish.image}
                    alt={dish.title}
                    className="w-[70%] h-auto object-contain rounded-xl shadow-md -top-6 z-10 transition-transform duration-300 group-hover:scale-125"
                  />
                ) : (
                  <div className="flex flex-col justify-center items-center text-center h-full text-gray-400">
                    <h3 className="text-white lg:mt-42 text-[30px] font-bold font-public">
                      {dish.title}
                    </h3>
                    <h3 className="text-[#9F9F9F] text-[16px] px-4 mt-2 font-semibold font-public">
                      {dish.desc}
                    </h3>
                    <div className="mt-6">
                      <FaPlus className="text-black bg-white rounded-full p-3 text-4xl active:scale-110" />
                    </div>
                  </div>
                )}
              </div>

              {/* Info Section */}
              {dish.image && (
                <div className="px-5 py-4 rounded-b-2xl flex flex-col bg-[#0e0c0b]/80 overflow-auto gap-2">
                  <h3 className="text-white text-base font-semibold font-public text-[30px]">
                    {dish.title}
                  </h3>
                  {dish.desc && (
                    <p className="text-gray-400 text-sm leading-snug font-public">
                      {dish.desc}
                    </p>
                  )}
                  <div className="flex items-center justify-between mt-2">
                    {/* Rating */}
                    {dish.rating ? (
                      <div className="flex gap-1 text-[#B88E00] text-lg">
                        {Array.from({ length: 5 }, (_, idx) => {
                          const fullStars = Math.floor(dish.rating);
                          const isHalf = dish.rating - fullStars >= 0.5;
                          if (idx < fullStars) {
                            return <IoMdStar key={idx} />;
                          } else if (idx === fullStars && isHalf) {
                            return <VscStarHalf key={idx} />;
                          } else {
                            return <VscStarHalf key={idx} />;
                          }
                        })}
                      </div>
                    ) : (
                      <span />
                    )}

                    {/* Price */}
                    {dish.price && (
                      <p className="text-white text-[28px] font-semibold font-public">
                        {dish.price}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400 text-xl mt-20">
          No data available
        </div>
      )}
    </section>
  );
};

export default MenuShowcase;
