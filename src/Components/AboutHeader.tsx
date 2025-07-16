import bgImage from "/about/aboutHeader.png"; 
import NavbarLinks from "./NavbarLinks";

const AboutHeaders = () => {
  return (
    <section className="relative w-full  min-h-screen overflow-hidden font-serif text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Navbar */}
     <NavbarLinks />

      {/* Centered Text */}
      <div className="relative z-20 flex items-center justify-center text-center h-[calc(100vh-60px)] px-4">
        <h1 className="text-4xl lg:text-[124.75px] md:text-6xl font-semibold text-[#CFC39B] font-lora ">
          
          About
          <br />
          Amy Grill & Graze

        </h1>
      </div>
    </section>
  );
};

export default AboutHeaders;
