import React from "react";
import verturaLogo from "../../public/vertura.png";

const Cards = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="0.4"
      className="w-full h-auto bg-zinc-100 flex flex-col items-center px-4 py-8 gap-6"
    >
      {/* 1st card */}
      <div className="cardcontainer w-full h-auto">
        <div className="card relative rounded-xl w-full h-[60vw] md:h-[25vw] bg-[#2b5376] flex flex-col items-center justify-center p-4">
          <img
            className="w-[50vw] md:w-[20vw] mb-4"
            src={verturaLogo}
            alt="Vertura Logo"
          />
          <button className="absolute left-4 bottom-4 px-4 py-2 md:px-3 md:py-1 border-2 rounded-full text-[#f0df91] border-[#f0df91] text-sm md:text-base">
            &copy;2024-2025
          </button>
        </div>
      </div>

      {/* 2nd card */}
      <div className="cardcontainer flex flex-col gap-6 w-full h-auto">
        <div className="card relative rounded-xl w-full h-[60vw] md:h-[25vw] bg-slate-600 flex flex-col items-center justify-center p-4">
          <h1 className="text-lg md:text-3xl font-bold uppercase mb-2">
            Premium
          </h1>
          <p className="text-sm md:text-base mb-4">Quality Materials</p>
          <button className="absolute left-4 bottom-4 px-4 py-2 md:px-3 md:py-1 border-[1px] rounded-full uppercase text-xs md:text-base">
            Premium Quality
          </button>
        </div>
      </div>
      <div className="cardcontainer flex flex-col gap-6 w-full h-auto mb-8">
        <div className="card relative rounded-xl w-full h-[60vw] md:h-[25vw] bg-[#244562] flex flex-col items-center justify-center p-4">
          <h1 className="text-lg md:text-3xl font-bold uppercase mb-2">
            Culture
          </h1>
          <p className="text-sm md:text-base mb-4">Quality Materials</p>
          <button className="absolute left-4 bottom-4 px-4 py-2 md:px-3 md:py-1 border-[1px] rounded-full uppercase text-xs md:text-base">
            Street Culture
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
