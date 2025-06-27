import React from "react";
import mayonk from "../../public/mayonk.jpeg";

const About = () => {
  return (
    <div className="w-full p-[5vw] bg-black rounded-tl-3xl rounded-tr-3xl text-white">
      <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4vw] tracking-tight sm:text-[3vw] sm:leading-[5vw]'>
        VERTURA is a streetwear brand that bridges the gap between urban culture
        and high-quality fashion, creating pieces that speak to the modern
        generation's desire for authenticity and style.
      </h1>

      <div className="flex flex-col sm:flex-row gap-5 w-full border-t-[1px] pt-[3vw] border-[#99aa5d] mt-[4vw]">
        <div className="w-full sm:w-1/2">
          <h1 className="text-[5vw] text-[#205eab] sm:text-[7vw]">New Article:</h1>
          <a
            href="https://wa.me/6285190327577?text=Halo%20kak%2C%20saya%20tertarik%20untuk%20beli%20Article%20Terbaru%20dari%20Vertura.%20Boleh%20info%20lebih%20lanjut%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex gap-5 items-center px-[2vw] py-[1vw] bg-[#205eab] mt-[0.8vw] rounded-full text-white uppercase sm:px-[4vw] sm:py-[2vw]">
              Buy Now
              <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>
          </a>
        </div>

        <div className="w-full sm:w-1/2 rounded-3xl">
          <img className="w-full h-auto rounded-3xl" src={mayonk} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
