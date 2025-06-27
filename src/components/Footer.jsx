import React from "react";
import verturaLogo from "../../public/vertura.png"; // Adjust the path as necessary

const Footer = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="0.2"
      className="flex flex-col md:flex-row gap-4 md:gap-[2vw] w-full h-auto md:h-screen bg-zinc-900 p-4 md:p-[4vw] -mt-[10vw]"
    >
      <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col justify-between">
        <div className="heading">
          <h1 className="text-[10vw] md:text-[7vw] uppercase leading-none -mb-2 md:-mb-[1vw] font-bold">
            Eye-
          </h1>
          <h1 className="text-[9vw] md:text-[6.5vw] uppercase leading-none -mb-2 md:-mb-[1vw] font-bold">
            Opening
          </h1>
        </div>
        <img
          className="w-24 h-8 md:w-32 md:h-12 object-cover mt-4 md:mt-0"
          src={verturaLogo}
          alt="Vertura Logo"
        />
      </div>

      <div className="w-full md:w-1/2">
        <h1 className="text-[8vw] md:text-[6vw] uppercase leading-none font-bold">
          PRESENTATIONS
        </h1>
        <div className='details font-["Neue_Montreal"] mt-4 md:mt-[4vw]'>
          {["Instagram", "Linkedin", "Facebook", "Twitter"].map(
            (item, index) => (
              <a
                key={index}
                className="block text-[4vw] md:text-[1.5vw] font-light"
                href="#"
              >
                {item}
              </a>
            )
          )}
        </div>
        <h2 className="mt-12 md:mt-[18vw] text-zinc-400 text-[3vw] md:text-base">
          &copy; Vertura's 2025
        </h2>
      </div>
    </div>
  );
};

export default Footer;
