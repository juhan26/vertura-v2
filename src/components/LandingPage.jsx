import { motion } from "framer-motion";
import React from "react";
import {
  FaArrowDown,
  FaLongArrowAltDown,
  FaLongArrowAltUp,
} from "react-icons/fa";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.4"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-24 px-6 md:mt-32 md:px-16">
        {["Wear Culture", "Rise-up", "With A Twist"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-center overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: window.innerWidth < 768 ? "20vw" : "10vw",
                      maxWidth: "100%",
                    }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[30vw] h-[10vw] mb-2 bg-gradient-to-r from-[#205eab] to-[#1865c4] mt-3 relative rounded-md mr-[3vw] md:w-[9vw] md:h-[5.5vw] md:mr-[1vw]"
                  ></motion.div>
                )}

                <h1 className='uppercase text-[12vw] leading-[10vw] tracking-tighter font-["Founders_Grotesk] font-medium md:text-[8.5vw] md:leading-[7vw]'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="hidden md:flex border-t-[1px] border-zinc-800 mt-[10vw] flex-col md:flex-row justify-between items-center py-5 px-6 md:px-20">
        {["For public and private companies", "From concept to culture"].map(
          (item, index) => (
            <p
              key={index}
              className="text-sm font-light tracking-tight leading-none mb-4 md:mb-0 md:text-md"
            >
              {item}
            </p>
          )
        )}
        <div className="start flex flex-col md:flex-row items-center gap-4">
          <div className="px-4 py-2 border-[2px] rounded-full border-zinc-500 font-light text-sm uppercase cursor-pointer md:px-5 md:py-2 md:text-md">
            shop now
          </div>
          <div className="w-8 h-8 rounded-full border-[2px] border-zinc-500 flex items-center justify-center md:w-10 md:h-10">
            <span className="rotate-[45deg]">
              <FaArrowDown />
            </span>
          </div>
        </div>
      </div>
      <div className="start md:hidden flex flex-col md:flex-row items-center gap-4 mt-12">
        <div
          className="px-4 py-2 border-[2px] rounded-full border-zinc-500 font-light text-sm uppercase cursor-pointer md:px-5 md:py-2 md:text-md"
          onClick={() => {
            const target = document.querySelector("#marquee");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          shop now
        </div>
        <div className="w-8 h-8 rounded-full border-[2px] border-zinc-500 flex items-center justify-center md:w-10 md:h-10">
          <span className="rotate-[45deg]">
            <FaArrowDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
