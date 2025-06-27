import { motion, useAnimation } from "framer-motion";
import React from "react";
import gean3 from "../../public/gean3.jpeg"; // Adjust the path as necessary
import body from "../../public/body.jpeg"; // Adjust the path as necessary

const Features = () => {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-[4vw] mb-[4vw]">
      <div className="w-full px-[5vw] border-b-[1px] border-zinc-700 pb-[2vw]">
        <h1 className="text-[7vw] md:text-[5vw] font-['Neue_Montreal'] tracking-tight">
          Latest Drops
        </h1>
      </div>

      {/* cards */}
      <div className="px-[5vw]">
        <div className="cards w-full flex flex-col md:flex-row gap-[4vw] mt-[4vw]">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="relative cardcontainer w-full md:w-1/2 h-fit overflow-hidden group"
          >
            <div className="card w-full h-full rounded-xl overflow-hidden border-[8px] border-transparent group-hover:border-[2px] group-hover:border-[#ee3622] transition-all duration-500">
              <img
                className="w-full h-full bg-cover group-hover:scale-110 transition-transform duration-500"
                src={body}
                alt=""
              />
            </div>
            <h1 className="absolute flex overflow-hidden left-1/2 z-[9] text-[10vw] md:text-[6vw] leading-none tracking-tighter -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#ee3622]">
              {"MONTE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.05,
                  }}
                  className="inline-block font-bold"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* 2nd card */}
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="relative cardcontainer w-full md:w-1/2 h-fit overflow-hidden group"
          >
            <div className="card w-full h-full rounded-xl overflow-hidden border-[8px] border-transparent group-hover:border-[2px] group-hover:border-white transition-all duration-500">
              <img
                className="w-full h-full bg-cover group-hover:scale-110 transition-transform duration-500"
                src={gean3}
                alt=""
              />
            </div>
            <h1 className="absolute flex overflow-hidden left-1/2 z-[9] text-[10vw] md:text-[6vw] leading-none tracking-tighter -translate-x-1/2 top-1/2 -translate-y-1/2 text-white">
              {"CARLO".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.05,
                  }}
                  className="inline-block font-bold"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
