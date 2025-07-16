import { FaArrowRightLong } from "react-icons/fa6";
import { BsArrowUpRight } from "react-icons/bs";

const Crafting = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col md:flex-row items-stretch justify-between px-6 md:px-16 lg:px-24 py-12 gap-6 md:gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        <div
          className="relative w-full rounded-2xl overflow-hidden bg-cover bg-center h-[300px] sm:h-[350px] md:h-[400px] lg:h-[582px] lg:w-[525px] min-w-[250px]"
          style={{ backgroundImage: "url('/Rectangle.png')" }}
        >
          <div className="absolute bottom-14 left-14 right-14 bg-black/40 p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
            <div className="flex items-center">
              <img
                src="/Ellipse 6.png"
                alt="Ellipse6"
                className="w-[50px] h-[50px] rounded-full border"
              />
              <img
                src="/Ellipse 7.png"
                alt="Ellipse7"
                className="w-[50px] h-[50px] rounded-full border -ml-3"
              />
              <img
                src="/Ellipse 8.png"
                alt="Ellipse8"
                className="w-[50px] h-[50px] rounded-full border -ml-3"
              />
              <div
                className="w-[50px] h-[50px] rounded-full border-4 bg-white bg-cover bg-center flex flex-col items-center justify-center text-center -ml-3"
                style={{ backgroundImage: "url('/500.png')" }}
              >
                <div>
                  <p className="text-[10px] font-semibold text-[#9F9F9F]">
                    500K+
                  </p>
                  <p className="text-[10px] text-[#9F9F9F] -mt-1">Customer</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[14px] sm:text-[16px] font-normal text-[#FFFDF4] leading-snug font-public">
                Delighted Guests Always <br className="hidden sm:block" />{" "}
                Welcome
              </p>
              <button className="text-[9px] text-white mt-2 border border-[#9F9F9F] rounded-full px-[11px] py-[6px] font-public">
                See Review
              </button>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight font-lora">
            Crafting a Legacy of Fine Dining
          </h1>
          <p className="text-[#9F9F9F] mt-4 text-[16px] sm:text-base font-public">
            Our restaurant embodies a rich tradition of culinary excellence,
            where every meal tells a story of passion, creativity, and
            dedication. For years, we have committed ourselves to the art of
            fine dining, sourcing the finest ingredients and perfecting each
            recipe to create a unique gastronomic experience.
          </p>
          <button className="mt-[14px] inline-flex items-center gap-2 text-[#9F9F9F] underline font-public">
            See More
            <span>
              <FaArrowRightLong className="my-auto" />{" "}
            </span>
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 text-white">
            <div className="bg-[#111111] p-6 rounded-2xl flex flex-col justify-between sm:col-span-1 relative">
              <div className="text-center">
                <p className="text-6xl  font-semibold leading-tight font-public">95%</p>
                <p className="text-[16px] mt-2 text-[#9F9F9F] font-public">
                  Delighted Guests
                  <br />
                  Always Welcome
                </p>
              </div>
              <div className="absolute top-4 right-4 text-[#9F9F9F]">
                <BsArrowUpRight className="text-lg" />
              </div>
            </div>

            <div className="bg-[#111111]  rounded-2xl sm:col-span-2 flex justify-between items-center gap-0">
              <div className="max-w-[60%] p-6">
                <p className="lg:text-[24px] md:text-sm sm:text-sm font-medium font-public">
                  Tasty Beginnings
                  <br />
                  to Savor
                </p>
                <p className="text-[14px] text-[#9F9F9F] mt-2 font-public">
                  Start your culinary adventure
                  <br />
                  with our thoughtfully crafted
                  <br />
                  appetizers that tantalize
                </p>
                <button className="text-[12px] underline mt-3 text-[#9F9F9F] font-public">
                  DETAILS
                </button>
              </div>
              <img
                src="/flat.png"
                alt="appetizer"
                className="w-40 h-full object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crafting;
