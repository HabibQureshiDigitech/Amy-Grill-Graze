import { useState } from "react";
import NavbarLinks from "../Components/NavbarLinks";

function MenuPage() {

  const allMenuData = {
    
    "Amy’s Signature Items": [
      "Amy’s Dynamic Tandoori (2 pcs) – 11",
      "Grazers Special Skewers – (Seasoned Mix) (2 pcs) – 10",
      "Choco & Buzzer Bites (4 pcs) – 12",
    ],
    "Starters & Small Plates": [
      "Spring Rolls (4 pcs) – 8",
      "Crunch Bites – 10",
      "Spring Rolls (Veg) – 8",
      "Mini Korean Skewers (2 pcs) – 9",
      "Seasoned Golden Mix Bites – 10",
      "Mini Chinese Skewers (2 pcs) – 9",
    ],
    "Comfort Soups": [
      "Hot & Sour Soup – 7",
      "Corn Soup – 6",
      "Thai Soup – 8",
      "Mini Soup Platter – 9",
    ],
    "Amy Artisan Pizza": [
      "Classic Margherita – 11",
      "Spicy Chicken – 12",
      "Veggie Delight – 10",
      "Double Cheese Burst – 13",
    ],
    "Pasta Favorites": [
      "Creamy Alfredo – 12",
      "Spicy Arrabiata – 11",
      "Garlic Pesto – 10",
      "Pink Sauce Pasta – 13",
    ],
  };

  const categories = Object.keys(allMenuData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="bg-black text-white">
      <NavbarLinks />
      <div className="relative z-20 flex items-center justify-center text-center h-[calc(100vh-60px)] px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-200">
          {" "}
          Main
          <br />
          <p className="text-white text-sm mt-2">
            Perfect to share or start your flavor journey.
          </p>
        </h1>
      </div>

      <section className="bg-white text-black py-12 px-4 md:px-16">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full border font-medium transition ${
                activeCategory === category
                  ? "bg-black text-white"
                  : "bg-gray-100 text-black hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">{activeCategory}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allMenuData[activeCategory].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-4 rounded-md shadow-sm hover:bg-gray-200 transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MenuPage;
