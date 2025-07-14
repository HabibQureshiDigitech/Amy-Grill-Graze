
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
          <h2 className="text-4xl font-bold mb-4 text-[#CFC39B]">History</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. At duis purus est nulla facilisis. Netus in sit adipiscing
            volutpat sed. Integer mi egestas mauris bibendum feugiat. Velit sagittis aliquet fermentum risus.
            Auctor vitae at in. Gravida tincidunt nunc.
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
          <h2 className="text-4xl font-bold mb-4 text-[#CFC39B]">The Amy Grill &amp; Graze Story</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. At duis purus est nulla facilisis. Netus in sit adipiscing
            volutpat sed. Integer mi egestas mauris bibendum feugiat. Velit sagittis aliquet fermentum risus.
            Auctor vitae at in. Gravida tincidunt nunc.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
