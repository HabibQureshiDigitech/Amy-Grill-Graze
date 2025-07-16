
import { BsArrowUpRight } from "react-icons/bs";
import NavbarLinks from "../Components/NavbarLinks";
import Footer from "../Components/Footer";
import { useState } from "react";
const tabs = [
  { name: "Food" },
  { name: "Beverages" },
  { name: "Happenings"},
  { name: "Group & Events" },
];

const foodItems = [
  {
    title: "Breakfast",
    image: "/food/breakfast.png",
  },
  {
    title: "Main",
    image: "/food/main.png",
  },
  {
    title: "Amy Kids",
    image: "/food/amykids.png",
  },
  {
    title: "Lifestyle",
    image: "/food/lifestyle.png",
  },
  {
    title: "Happy Hour",
    image: "/food/happyhour.png",
  },
  {
    title: "Seasonal Specials",
    image: "/food/seasonal.png",
  },
];

const Food = () => {
    const [activeTab,setActiveTab]=useState("Food")
  return (
    <>     
   
    <section>
        <NavbarLinks/>
    </section>

        <section>
        <nav className="border-b-4 border-[#FFFFFF] w-fit mx-auto ">
          <div className="flex justify-center gap-6 ">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`inline-block pb-2 lg:text-[37px]  sm:text-base font-semibold transition duration-200 font-lora ${
                  activeTab === tab.name
                    ? "border-b-2 border-[#FFFFFF] text-[#CFC39B]"
                    : "text-[#9F9F9F] hover:text-white"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </nav>
      </section>

     
      
     
   
    <section className="bg-black text-white px-4 sm:px-8 py-12 text-center">
      <h2 className="text-center lg:text-[120px] text-5xl  font-semibold text-[#CFC39B] mb-10 font-lora">
        Food
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto ">
        {foodItems.map((item, idx) => (
          <div
            key={idx}
            className="relative rounded-xl overflow-hidden group  cursor-pointer text-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-[410px] h-[398px]  object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0  flex flex-col justify-end ">
              <div className="flex items-center bg-[#111111E0]  justify-between p-6">
                <span className="text-[#F3F3F3] font-normal text-[28px] font-lora">{item.title}</span>
                <BsArrowUpRight className="text-xl text-[#FFFDF4]" style={{ strokeWidth: 1 }}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section>
        <Footer/>
    </section>
    </>

  );
};

export default Food;
