
import { FaStar, FaArrowRight } from "react-icons/fa";

const dishes = [
  {
    title: "Foie Gras Torchon",
    price: "$50.42",
    rating: 5,
    image: "/menu/4.png",
  },
  {
    title: "Herb-Infused Bliss",
    price: "$30.12",
    rating: 4,
    image: "/menu/3.png",
  },
  {
    title: "Smoky Essie",
    price: "$50.42",
    rating: 5,
    image: "/menu/2.png",
  },
  {
    title: "Seasonal Delights",
    price: null,
    rating: null,
    image: null,
    desc: "Celebrated seasonal picks from our chef curated to balance flavor and freshness.",
  },
  {
    title: "Margherita",
    price: "$19–27",
    rating: 5,
    image: "/menu/1.png",
  },
  {
    title: "Vegan & Vegetarian",
    price: null,
    rating: null,
    image: null,
    desc: "Balanced & flavor-rich selections for plant-based and mindful eaters.",
  },
];

const MenuShowcase = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 font-serif">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.map((dish, i) => (
          <div
            key={i}
            className="bg-[#0f0f0f] rounded-2xl p-5 relative group h-[390px] flex flex-col"
          >
            {/* Top Arrow */}
            <FaArrowRight className="absolute top-4 right-4 text-white bg-black/40 rounded-full p-1 text-sm opacity-0 group-hover:opacity-100 transition" />

            {/* Image */}
            {dish.image ? (
              <div className="flex justify-center -mt-12 mb-3">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="w-[130px] h-[130px] object-cover rounded-md shadow-md"
                />
              </div>
            ) : (
              <div className="flex justify-center -mt-12 mb-3">
                <div className="w-[130px] h-[130px] bg-gray-700 rounded-md flex items-center justify-center text-gray-400 text-xs">
                  No Image
                </div>
              </div>
            )}

            {/* Text Content (Title + Desc) */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-left">{dish.title}</h3>
              {dish.desc && (
                <p className="text-sm text-gray-400 text-left mt-1">
                  {dish.desc}
                </p>
              )}
            </div>

            {/* Rating + Price Row */}
            <div className="flex items-center justify-between mt-4">
              {dish.rating ? (
                <div className="flex gap-1 text-yellow-400 text-sm">
                  {Array(dish.rating)
                    .fill(0)
                    .map((_, idx) => (
                      <FaStar key={idx} />
                    ))}
                </div>
              ) : (
                <div />
              )}

              {dish.price && (
                <p className="text-white text-sm font-semibold">{dish.price}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuShowcase;
