
const Savor = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col md:flex-row items-stretch justify-between px-6 md:px-16 lg:px-24 py-12 gap-6 md:gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 max-w-7xl mx-auto py-8">
        
        <div className="text-center md:text-left  space-y-6">
          <h1 className="text-[45px] font-semibold leading-tight text-[#FFFDF4]">
            Savor-Worthy <br /> Gourmet Burger
          </h1>

          <div>
            <h2 className="text-[24px] font-normal mb-2">What do you need?</h2>
            <ul className="list-disc list-inside space-y-1 text-[#9F9F9F] text-[16px] font-normal">
              <li>Flavorful House Sauces</li>
              <li>Perfect Side Pairings</li>
              <li>Unique Gourmet Toppings</li>
            </ul>
          </div>

          <p className="text-[#9F9F9F] text-[16px] font-normal">
            We prioritize quality by using only the finest, fresh <br /> ingredients in our burgers. Each component.
          </p>

          <button className="text-[#FFFDF4]  border border-[border: 1px solid #9F9F9F] font-medium px-5 py-2 rounded-full transition">
            Book A Table
          </button>
        </div>

      <div className="flex flex-wrap  md:flex-nowrap justify-center">

          <div className="   bg-[#111111] sm:px-6 py-6 rounded-tl-[40px] rounded-bl-[40px]  space-y-2  w-[190px] h-[392px]">
            <h3 className="text-[26px] text-center font-bold text-[#CFC39B] ">Amy Grill & Graze</h3>
            <p className="text-[40px] font-medium text-center">25% </p>
            <p className="text-center p-0 m-0 text-[24px] font-medium pb-6">OFF</p> 
            
            <div className=" border-[#242424] border-t-[1px] mx-6"></div>

            <p className="text-[24px] font-normal text-[#FFFDF4] text-center mt-4">07 - 12 <br /> Des</p>
          </div>
 
          <img
            src='/menu/2.png'
            alt="menu2 "
            className="lg:w-[635px] lg:h-[392px] h-auto rounded-sm object-cover "
          />
          
        </div>
      </div>
    </div>
  );
};

export default Savor;

