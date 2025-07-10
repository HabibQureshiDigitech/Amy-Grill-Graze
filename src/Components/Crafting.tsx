import { FaArrowRightLong } from "react-icons/fa6";

const Crafting = () => {
  return (
    <section className="bg-black text-white px-4 sm:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        
        <div className="relative bg-cover bg-center rounded-2xl overflow-hidden lg:h-[582px] lg:w-[525px]" style={{ backgroundImage: "url('/Rectangle.png')" }}>
          
          <div className="absolute bottom-4 left-4 right-4 bg-black/40 p-4 rounded-xl flex items-center justify-between">

            <div className="flex items-center space-x-2">
              <img src="/Ellipse 6.png" alt="Ellipse6" className="w-10 h-10 rounded-full border" />
              <img src="/Ellipse 7.png" alt="Ellipse7" className="w-10 h-10 rounded-full border" />
              <img src="/Ellipse 8.png" alt="Ellipse8" className="w-10 h-10 rounded-full border" />
              <img src="/Ellipse 9.png" alt="Ellipse9" className="w-10 h-10 rounded-full border"  />
              <span className="text-sm font-medium">500K+ Customers</span>
              
            </div>
            
            <div>
              <p className="text-sm font-semibold">Delighted Guests Always Welcome</p>
              <button className="text-xs text-white underline mt-1">See Review</button>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">Crafting a Legacy of Fine Dining</h1>
          <p className="text-gray-300 mt-4 text-sm sm:text-base">
            Our restaurant embodies a rich tradition of culinary excellence, where every meal tells a story of passion, creativity, and dedication...
          </p>
          <button className="mt-4 inline-flex items-center gap-2 text-white ">
            See More <span ><FaArrowRightLong className="my-auto"/> </span>  
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="bg-[#111] p-6 rounded-2xl">
              <p className="text-3xl font-bold">95%</p>
              <p className="text-sm mt-2">Delighted Guests Always Welcome</p>
            </div>
            <div className="bg-[#111] p-6 rounded-2xl flex items-center gap-4">
              <div>
                <p className="text-base font-semibold">Tasty Beginnings to Savor</p>
                <p className="text-sm text-gray-400 mt-1">Start your culinary adventure with our thoughtfully crafted appetizers...</p>
                <button className="text-xs underline mt-2">DETAILS</button>
              </div>
              <img src="/flat.png" alt="flat" className="w-24 h-24 rounded-xl object-cover" />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Crafting;
