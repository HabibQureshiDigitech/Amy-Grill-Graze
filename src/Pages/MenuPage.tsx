import { useRef, useState } from "react";
import NavbarLinks from "../Components/NavbarLinks";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Footer from "../Components/Footer";

function MenuPage() {
  const allMenuData = {
    "Starters & Small Plates": [],
    "Comfort Soups": [],
    "Amy Artisan Pizzas": [],
    "Pasta Favorites": [],
    "Signature Salads & Bowls": [],
    "Burger Meals": [],
    "Signature Sandwiches": [],
    "Focaccia Sandwiches": [],
    "Grilled Platters": [],
    "Signature Curries": [],
  };

  const categories = Object.keys(allMenuData);
  const [menuOpen, setMenuOpen] = useState(false);

  const categoryRef = useRef<any>(null);

  const scrollLeft = () => {
    if (categoryRef.current) {
      categoryRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (categoryRef.current) {
      categoryRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  const menuItems = [
    {
      title: "Amy’s Dynamite Tacos (2 pcs)",
      price: "11",
      description:
        "Crispy rolls stuffed with seasoned noodles and vegetables, served with sweet & sour sauce.",
    },
    {
      title: "Graze Special Momos – Steamed 10 / Fried 10",
      price: "",
      description:
        "Juicy dumplings filled with chicken, shrimp, or veggies, served with a bold soy chili dipping sauce.",
    },
    {
      title: "Glaze & Graze Wings (6/10/15/20 pcs)",
      price: "12/20/28/38",
      description:
        "Crispy wings tossed in your choice of bold flavors like : plain, Noma Sauce, Buffalo, BBQ, Garlic, Garlic Parmesan, Sweet Chili, Mango habanero, sweet Teriyaki, Mix buffalo & BBQ, Honey garlic. Mumbo Sauce. Lemon paper, lemon paper sauce, Nashville hot sauce.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen relative">
      {/* Navbar */}
      <NavbarLinks />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-[calc(100vh-60px)] px-4">

        <h1 className="text-4xl md:text-6xl lg:text-[124.75px] font-extrabold text-[#CFC39B] font-lora">
          Main
        </h1>
        <p className="text-[#FFFDF4] text-[24px] font-public mt-2">

          Perfect to share or start your flavor journey.
        </p>
      </div>



      {/* Menu Section */}
      <section className="bg-black text-white px-4 sm:px-6 md:px-12 py-10 md:py-6 relative">
        <div className="max-w-7xl mx-auto relative">


          {/* Top Menu Bar */}
          <div className="bg-white shadow px-4 py-2 flex items-center justify-between rounded relative">
            {/* Left: Menu Icon */}
            <div className="relative">
              <button
                className="p-2 hover:bg-gray-100 rounded"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <IoMenu className="text-black" size={20} />
              </button>

              {/* Dropdown */}
              {menuOpen && (
                <div className="absolute left-0 mt-2 w-64 max-h-72 overflow-y-auto bg-white text-black shadow-md rounded z-50">
                  <ul className="p-2 font-semibold text-sm space-y-2">
                    {categories.map((item, index) => (
                      <li
                        key={index}
                        className="hover:bg-gray-100 px-3 py-2 border-b cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Center: Scrollable Category Nav */}
            <div
              ref={categoryRef}
              className="flex-1 flex gap-4 text-[19px] md:text-sm text-[#080808] font-semibold whitespace-nowrap overflow-x-auto px-4 font-public"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {categories.map((category, index) => (
                <a href="#" key={index} className="hover:text-yellow-600">
                  {category}
                </a>
              ))}
            </div>

            {/* Right: Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={scrollLeft}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <IoIosArrowDropleft className="text-black" size={20} />
              </button>
              <button
                onClick={scrollRight}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <IoIosArrowDropright className="text-black" size={20} />
              </button>
            </div>
          </div>


          {/* Existing Menu Cards */}
          <div className="bg-white p-6 mt-5 flex flex-col gap-4">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-[#FBFBFB]  shadow-sm p-6">
                <div className="text-lg lg:text-[32px]  text-[#000000] font-medium flex flex-wrap font-public">
                  <span>{item.title}</span>
                  {item.price && <span> - {item.price} </span>}
                </div>
                <p className="text-[16px] font-normal text-[#9F9F9F] mt-1 font-public">

                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* New Section: Starters & Small Plates */}
          <div className="mt-10 bg-white p-6">

            <h2 className="text-2xl lg:text-[43px] font-semibold text-black mb-6 font-lora italic">

              Starters & Small Plates
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 1 */}
              <div className="bg-[#FBFBFB] p-6  shadow-sm">

                <div className="flex  text-[#000000] font-medium lg:text-[32px] font-public">
                  <span>Spring Rolls (Vegan)</span>
                  <span> - 8</span>
                </div>
                <p className="text-[16px] text-[#9F9F9F] font-normal mt-1 font-public ">

                  Crispy rolls stuffed with seasoned noodles and vegetables,
                  served with sweet & sour sauce.
                </p>
              </div>

              {/* 2 */}
              <div className="bg-[#FBFBFB] p-6  shadow-sm">

                <div className="flex text-[#000000] font-medium lg:text-[32px] font-public">
                  <span>Mini Caprese Skewers (2 pcs)</span>
                  <span>– 9</span>
                </div>
                <p className="text-[16px] text-[#9F9F9F] font-normal mt-1 font-public ">

                  Cherry tomatoes, fresh mozzarella, and basil skewers drizzled
                  with tangy balsamic glaze.
                </p>
              </div>

              {/* 3 */}
              <div className="bg-[#FBFBFB] p-6  shadow-sm">

                <div className="flex  text-[#000000] font-medium lg:text-[32px] font-public">
                  <span>Crunch Bombs</span>
                  <span>– 12</span>
                </div>
                <p className="text-[16px] text-[#9F9F9F] font-normal font-public mt-1">

                  Spiced chicken and beef meatballs served crispy with a cool
                  mint yogurt dip.
                </p>
              </div>

              {/* 4 */}
              <div className="bg-[#FBFBFB] p-6  shadow-sm">

                <div className="flex  text-[#000000] font-medium lg:text-[32px] font-public">
                  <span>Seasonal Golden Mix Bites</span>
                  <span>– 10</span>
                </div>
                <p className="text-[16px] text-[#9F9F9F] font-normal font-public mt-1">

                  Chickpea-battered mixed veggies fried to golden perfection,
                  with creamy house dressing.
                </p>
              </div>

              {/* 5 */}
              <div className="bg-[#FBFBFB] p-6  shadow-sm">

                <div className="flex  text-[#000000] font-medium lg:text-[32px] font-public">
                  <span>Spring Rolls (Vegan)</span>
                  <span>– 8</span>
                </div>
                <p className="text-[16px] text-[#9F9F9F] font-normal font-public mt-1">

                  Crispy rolls stuffed with seasoned noodles and vegetables,
                  served with sweet & sour sauce.
                </p>
              </div>

              {/* 6 */}
              <div className="bg-[#FBFBFB] p-6  shadow-sm">

                <div className="flex  text-[#000000] font-medium lg:text-[32px] font-public">
                  <span>Mini Caprese Skewers (2 pcs)</span>
                  <span>– 9</span>
                </div>
                <p className="text-[16px] text-[#9F9F9F] font-normal font-public mt-1">

                  Cherry tomatoes, fresh mozzarella, and basil skewers drizzled
                  with tangy balsamic glaze.
                </p>
              </div>
            </div>
          </div>


          {/* New Section: Starters & Small Plates */}
          <div className="mt-10 bg-white p-6">

            <h2 className="text-2xl lg:text-[43px] font-semibold text-[#000000] font-lora italic mb-6">

              Comfort Soups
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 1 */}
              <div className="bg-[#FBFBFB] p-6  shadow-sm">

                <div className="flex font-public text-[32px] font-medium text-[#000000]">
                  <span>Spring Rolls (Vegan)</span>
                  <span>– 8</span>
                </div>
                <p className="text-[16px] text-[#9F9F9F] font-normal  font-public mt-1">

                  Crispy rolls stuffed with seasoned noodles and vegetables,
                  served with sweet & sour sauce.
                </p>
              </div>

              {/* 2 */}
              <div className="bg-[#FBFBFB] p-6  shadow-sm">

                <div className="flex font-public text-[32px] font-medium text-[#000000]">
                  <span>Mini Caprese Skewers (2 pcs)</span>
                  <span>– 9</span>
                </div>
                <p className="text-[16px] text-[#9F9F9F] font-normal  font-public mt-1">

                  Cherry tomatoes, fresh mozzarella, and basil skewers drizzled
                  with tangy balsamic glaze.
                </p>
              </div>

              {/* 3 */}
              <div className="bg-[#FBFBFB] p-6  shadow-sm">

                <div className="flex font-public text-[32px] font-medium text-[#000000]">
                  <span>Crunch Bombs</span>
                  <span>– 12</span>
                </div>
                <p className="text-[16px] text-[#9F9F9F] font-normal  font-public mt-1">

                  Spiced chicken and beef meatballs served crispy with a cool
                  mint yogurt dip.
                </p>
              </div>

              {/* 4 */}
              <div className="bg-[#FBFBFB] p-6  shadow-sm">

                <div className="flex font-public text-[32px] font-medium text-[#000000]">
                  <span>Seasonal Golden Mix Bites</span>
                  <span>– 10</span>
                </div>
                <p className="text-[16px] text-[#9F9F9F] font-normal  font-public mt-1">

                  Chickpea-battered mixed veggies fried to golden perfection,
                  with creamy house dressing.
                </p>
              </div>

              {/* 5 */}
              <div className="bg-[#FBFBFB] p-6  shadow-sm">

                <div className="flex font-public text-[32px] font-medium text-[#000000]">
                  <span>Spring Rolls (Vegan)</span>
                  <span>– 8</span>
                </div>
                <p className="text-[16px] text-[#9F9F9F] font-normal  font-public mt-1">

                  Crispy rolls stuffed with seasoned noodles and vegetables,
                  served with sweet & sour sauce.
                </p>
              </div>

              {/* 6 */}
              <div className="bg-[#FBFBFB] p-6  shadow-sm">

                <div className="flex font-public text-[32px] font-medium text-[#000000]">
                  <span>Mini Caprese Skewers (2 pcs)</span>
                  <span>– 9</span>
                </div>
                <p className="text-[16px] text-[#9F9F9F] font-normal  font-public mt-1">

                  Cherry tomatoes, fresh mozzarella, and basil skewers drizzled
                  with tangy balsamic glaze.
                </p>
              </div>
            </div>
          </div>


          {/* New Section: Starters & Small Plates */}
          <div className="mt-10 bg-white p-6">

            <h2 className="text-2xl lg:text-[43px] font-semibold text-[#000000] font-lora italic mb-6">

              Amy Artisan Pizzas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 1 */}
              <div className="bg-[#FBFBFB] p-6  shadow-sm">

                <div className="flex font-public text-[32px] font-medium text-[#000000]">
                  <span>Spring Rolls (Vegan)</span>
                  <span>– 8</span>
                </div>
                <p className="text-[16px] text-[#9F9F9F] font-normal  font-public mt-1">

                  Crispy rolls stuffed with seasoned noodles and vegetables,
                  served with sweet & sour sauce.
                </p>
              </div>

              {/* 2 */}
              <div className="bg-[#FBFBFB] p-6  shadow-sm">

                <div className="flex font-public text-[32px] font-medium text-[#000000]">
                  <span>Mini Caprese Skewers (2 pcs)</span>
                  <span>– 9</span>
                </div>
                <p className="text-[16px] text-[#9F9F9F] font-normal font-public mt-1">

                  Cherry tomatoes, fresh mozzarella, and basil skewers drizzled
                  with tangy balsamic glaze.
                </p>
              </div>

              {/* 3 */}
              <div className="bg-[#FBFBFB] p-6  shadow-sm">

                <div className="flex font-public text-[32px] font-medium text-[#000000]">
                  <span>Crunch Bombs</span>
                  <span>– 12</span>
                </div>
                <p className="text-[16px] text-[#9F9F9F] font-normal font-public mt-1">

                  Spiced chicken and beef meatballs served crispy with a cool
                  mint yogurt dip.
                </p>
              </div>

              {/* 4 */}
              <div className="bg-[#FBFBFB] p-6  shadow-sm">

                <div className="flex font-public text-[32px] font-medium text-[#000000]">
                  <span>Seasonal Golden Mix Bites</span>
                  <span>– 10</span>
                </div>
                <p className="text-[16px] text-[#9F9F9F] font-normal font-public mt-1">

                  Chickpea-battered mixed veggies fried to golden perfection,
                  with creamy house dressing.
                </p>
              </div>

              {/* 5 */}
              <div className="bg-[#FBFBFB] p-6  shadow-sm">

                <div className="flex font-public text-[32px] font-medium text-[#000000]">
                  <span>Spring Rolls (Vegan)</span>
                  <span>– 8</span>
                </div>
                <p className="text-[16px] text-[#9F9F9F] font-normal font-public mt-1">

                  Crispy rolls stuffed with seasoned noodles and vegetables,
                  served with sweet & sour sauce.
                </p>
              </div>

              {/* 6 */}
              <div className="bg-[#FBFBFB] p-6  shadow-sm">

                <div className="flex font-public text-[32px] font-medium text-[#000000]">
                  <span>Mini Caprese Skewers (2 pcs)</span>
                  <span>– 9</span>
                </div>
                <p className="text-[16px] text-[#9F9F9F] font-normal font-public mt-1">
                  Cherry tomatoes, fresh mozzarella, and basil skewers drizzled
                  with tangy balsamic glaze.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}

export default MenuPage;
