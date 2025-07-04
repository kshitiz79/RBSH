import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "How Denim Brand Triarchy Is Blazing a Path for Sustainable Luxury",
    image: "/img1.jpg",
  },
  {
    title: "How Tarform Is Creating a New Breed of Electric Motorcycles: Stylish, Sustainable and Built to Last",
    image: "/img2.jpg",
  },
  {
    title: "On Transforms Air Pollution into High-Performance Running Gear",
    image: "/img3.jpg",
  },
  {
    title: "Golden Globe Winner Billie Eilish Talks Thrifting and Climate Change in Her Signature Grunge Style",
    image: "/img4.jpg",
    highlight: true,
  },
];

const ExpandingCards = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="absolute bottom-10 right-10 w-[370px] max-w-full z-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-[450px]">
        {articles.map((article, i) => {
          const indexFromBottom = articles.length - 1 - i;
          return (
            <motion.div
              key={i}
              initial={false}
              animate={{
                bottom: hovered ? indexFromBottom * 130 : 0,
                scale: hovered ? 1 : 1 - indexFromBottom * 0.015,
                zIndex: hovered ? i + 1 : 10 + i,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute left-0 w-full"
            >
              <div className="flex bg-white p-5 rounded-xl shadow-lg overflow-hidden p_multiplier-4 items-center gap-4 border border-gray-200">
                <div className="w-[80px] h-[80px] rounded-md overflow-hidden shrink-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-sm font-semibold leading-snug ${
                      article.highlight ? "text-orange-600" : "text-black"
                    }`}
                  >
                    {article.title}
                  </h3>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-xs tracking-wide text-black">ARTICLE</p>
                    <ArrowRight
                      className={`w-4 h-4 ${
                        article.highlight ? "text-black" : "text-gray-900"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpandingCards;