import { FaRegCirclePlay } from "react-icons/fa6";
import ReCAPTCHA from "react-google-recaptcha";

function onChange(value: any) {
  console.log("Captcha value:", value);
}


const SecureSpot = () => {
  return (

  <section
  className="relative bg-cover bg-center lg:py-[120px] py-[40px]"
  style={{
    backgroundImage: "url('../secure-spot.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>

  <div className="relative flex items-center justify-center h-full max-w-5xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 bg-black/60 p-8 text-white rounded-tl-[80px] rounded-tr-[5px] rounded-br-[80px] rounded-bl-[5px] border border-white overflow-hidden">

      <div className="space-y-6 border-r-0 lg:border-r md:border-r sm:border-[#CFC39B]  p-8  ">
        <div >
          <h2 className="text-[36px] font-medium text-[#FFFDF4] font-public">Secure Your Spot</h2>
          <p className="text-sm mt-2 text-[#9F9F9F] text-[16px] font-normal font-public">Welcome to Our Reservation Page</p>
        </div>

        <div className="space-y-3 text-sm ">
          <p className="flex items-center gap-2 text-[#9F9F9F] text-[16px] font-normal font-public">
            <FaRegCirclePlay className="text-[#69634E] text-md" />
            Delighted to Serve
          </p>
          <p className="flex items-center gap-2 text-[#9F9F9F] text-[16px] font-normal font-public">
            <FaRegCirclePlay className="text-[#69634E] text-md" />
            Exceptional Dining Experience
          </p>
        </div>

        <div>
          <h3 className="text-[36px] font-medium mt-4 text-[#FFFDF4] font-public ">Make a Reservation</h3>
          <p className="mt-2 text-[#9F9F9F] text-[16px] font-normal font-public">Personalize Your Experience</p>
          <div className="space-y-2 text-sm mt-3">
            <p className="flex items-center gap-2 text-[#9F9F9F] text-[16px] font-normal font-public">
              <FaRegCirclePlay className="text-[#69634E] text-md" />
              Select Your Date
            </p>
            <p className="flex items-center gap-2 text-[#9F9F9F] text-[16px] font-normal font-public">
              <FaRegCirclePlay className="text-[#69634E] text-md" />
              Choose Your Time
            </p>
          </div>
          <p className=" mt-4 leading-relaxed text-[#9F9F9F] text-[16px] font-normal font-public">
            Experience the convenience of securing your dining experience with our easy-to-use reservation system.
          </p>
        </div>
      </div>

     
      <div className="p-8 space-y-5">
        <h2 className="text-[36px] font-medium text-center text-[#FFFDF4] font-public">Book Your Table</h2>
        <p className="text-[#9F9F9F] text-[16px] font-medium text-center font-public">
          Secure your place at our restaurant and prepare for an unforgettable dining experience.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border-b border-gray-300 focus:outline-none text-white placeholder:text-[#9F9F9F] font-public"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border-b border-gray-300 focus:outline-none text-white placeholder:text-[#9F9F9F] font-public"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-2  border-b border-gray-300 focus:outline-none text-white placeholder:text-[#9F9F9F] font-public"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              placeholder="Date"
              className="w-full p-2  border-b border-gray-300 focus:outline-none text-[#9F9F9F] placeholder:text-[#9F9F9F] custom-date-time font-public"
            />
            <input
              type="time"
              placeholder="Time"

              className="w-full p-2  border-b border-gray-300 focus:outline-none text-[#9F9F9F] placeholder:text-[#9F9F9F] custom-date-time font-public"
            />
          </div>

            <div className="w-full  max-w-xs md:max-w-sm scale-[0.75] origin-left sm:scale-100 sm:origin-center">
                <ReCAPTCHA
                  sitekey="6LfLl0QrAAAAANNXga01CDHqHfeKNwV8ki56msKI"
                  onChange={onChange}
                  theme="dark"
                />
              </div>

          <div className="text-center"> 
          <button
            type="submit"
            className="mt-4 px-6 py-2 border border-[#CFC39B] rounded-full text-sm  hover:bg-white hover:text-black transition font-public"
          >
            Confirm Your Reservation
          </button>
          </div>

        </form>
      </div>
    </div>
  </div>

</section>



  );
};

export default SecureSpot;

