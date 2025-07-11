import { useState } from "react";
import { FaStar, FaArrowRight, FaPlus } from "react-icons/fa";

const dishes = [
  {
    title: "Foie Gras Torchon",
    price: "$50.42",
    rating: 5,
    image: "/menu/4.png",
    desc: "Balanced & flavor-rich selections for plant-based and mindful eaters.",
  },
  {
    title: "Herb-Infused Bliss",
    price: "$30.12",
    rating: 4,
    image: "/menu/3.png",
    desc: "Balanced & flavor-rich selections for plant-based and mindful eaters.",
  },
  {
    title: "Smoky Essie",
    price: "$50.42",
    rating: 5,
    desc: "Balanced & flavor-rich selections for plant-based and mindful eaters.",
    image: "/menu/2.png",
  },
  {
    title: "Seasonal Delights",
    price: null,
    rating: null,
    image: null,
    desc: "Celebrated seasonal picks from our chef curated to balance flavor and freshness.",
  },
  {
    title: "Margherita",
    price: "$19–27",
    rating: 5,
    image: "/menu/1.png",
    desc: "Balanced & flavor-rich selections for plant-based and mindful eaters.",
  },
  {
    title: "Vegan & Vegetarian",
    price: null,
    rating: null,
    image: null,
    desc: "Balanced & flavor-rich selections for plant-based and mindful eaters.",
  },
];

const MenuShowcase = () => {
  const tabs = ["All", "Small Plates", "Appetizers", "Special Sides", "Desserts"];
  const [activeTab, setActiveTab] = useState("All");

  return (
    <section className="bg-black text-white py-24 px-6 md:px-32 font-serif">
      {/* Heading */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-center md:text-left mb-6 md:mb-0">
          It's not just a meal, <br className="hidden md:block" />
          it's an experience
        </h2>
        <button className="border border-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
          View Menu
        </button>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-16 justify-center w-full mb-10">
        <button className="px-6 py-3 rounded-2xl bg-white text-black text-lg font-medium">
          Elite Dining Experience
          <p className="text-xs">For Connoisseurs</p>
        </button>
        <button className="px-6 py-3 rounded-2xl border border-gray-500 text-lg">
          Essence of Flavor
          <p className="text-xs">Signature Selections</p>
        </button>
        <button className="px-6 py-3 rounded-2xl border border-gray-500 text-lg">
          Culinary Masterpieces Unveiled
          <p className="text-xs">Artisan Creations</p>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-4 justify-center mb-10 text-sm bg-[#161616] p-2 rounded-full">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1 rounded-full transition ${
              activeTab === tab
                ? "bg-white text-black"
                : "border border-gray-500 text-white hover:bg-white hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dishes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.map((dish, i) => (
          <div
            key={i}
            className="bg-[#0f0f0f] rounded-2xl relative group overflow-hidden"
          >
            {/* Top Arrow */}
            <FaArrowRight className="absolute top-4 right-4 text-white bg-black/40 rounded-full p-1 text-2xl opacity-0 group-hover:opacity-100 transition" />

            {/* Image or Placeholder */}
            <div className="flex justify-center items-center py-6 h-[220px]">
  {dish.image ? (
    <img
      src={dish.image}
      alt={dish.title}
      className="w-[270px] h-[220px] z-20 object-contain rounded-xl shadow-md"
    />
  ) : (
    <div className="flex flex-col justify-center lg:mt-38 md:mt-38 sm:mt-38 mt-0  items-center text-center h-full text-gray-400">
      <h3 className="text-white text-lg font-bold">{dish.title}</h3>
      <h3 className="text-white text-sm px-4 mt-2 font-semibold">{dish.desc}</h3>
      <div className="mt-6">
        <FaPlus className="text-black bg-white rounded-full p-3 text-4xl active:scale-110" />
      </div>
    </div>
  )}
</div>


            {/* Info Section */}
            {dish.image && (
              <div className="bg-transparent px-5 py-4 rounded-b-2xl flex flex-col gap-2">
                <h3 className="text-white text-base font-semibold">{dish.title}</h3>
                {dish.desc && (
                  <p className="text-gray-400 text-sm leading-snug">
                    {dish.desc}
                  </p>
                )}
                <div className="flex items-center justify-between mt-2">
                  {/* Rating */}
                  {dish.rating ? (
                    <div className="flex gap-1 text-yellow-400 text-sm">
                      {Array(dish.rating)
                        .fill(0)
                        .map((_, idx) => (
                          <FaStar key={idx} />
                        ))}
                    </div>
                  ) : (
                    <span />
                  )}

                  {/* Price */}
                  {dish.price && (
                    <p className="text-white text-2xl font-semibold">
                      {dish.price}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuShowcase;
