const HistorySection = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      {/* History Block */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-16">
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
          <img
            src="/about/1.png"
            alt="Restaurant Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl lg:text-[70px] font-semibold mb-4 text-[#CFC39B] font-lora">
            History
          </h2>
          <p className="text-[#9F9F9F] text-[16px] leading-relaxed font-public text-justify">
            Lorem ipsum dolor sit amet consectetur. Arcu odio purus morbi risus
            nunc malesuada. Vestibulum at dignissim luctus in. Tristique eu nibh
            morbi odio. Ut condimentum ac dui nunc sapien consequat. Dignissim
            sed in id tellus luctus in et. Nulla semper integer quam
            condimentum. Ullamcorper egestas sed congue eleifend tincidunt.
            Integer ipsum amet massa pulvinar. Malesuada eu lorem enim
            parturient pulvinar faucibus commodo. Eu sollicitudin at eget
            imperdiet. Pharetra id elementum imperdiet vestibulum diam tincidunt
            nisi metus. Fames amet neque vel felis enim suspendisse purus
            sapien. Amet morbi sit odio diam quis elementum in. Mi orci risus
            aliquam adipiscing justo cras. Ante.
          </p>
        </div>
      </div>

      {/* Amy Grill Block */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
          <img
            src="/about/2.jpg"
            alt="Steak Dish"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl  mb-4 text-[#CFC39B] font-lora lg:text-[70px] font-semibold">
            The Amy Grill <br /> &amp; Graze Story
          </h2>
          <p className="text-[#9F9F9F] text-[16px] leading-relaxed font-public text-justify">
            Lorem ipsum dolor sit amet consectetur. Arcu odio purus morbi risus
            nunc malesuada. Vestibulum at dignissim luctus in. Tristique eu nibh
            morbi odio. Ut condimentum ac dui nunc sapien consequat. Dignissim
            sed in id tellus luctus in et. Nulla semper integer quam
            condimentum. Ullamcorper egestas sed congue eleifend tincidunt.
            Integer ipsum amet massa pulvinar. Malesuada eu lorem enim
            parturient pulvinar faucibus commodo. Eu sollicitudin at eget
            imperdiet. Pharetra id elementum imperdiet vestibulum diam tincidunt
            nisi metus. Fames amet neque vel felis enim suspendisse purus
            sapien. Amet morbi sit odio diam quis elementum in. Mi orci risus
            aliquam adipiscing justo cras. Ante.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
