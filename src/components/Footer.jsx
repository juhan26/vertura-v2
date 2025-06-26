import React from "react";

const Footer = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="0.2"
      className="flex gap-[2vw] w-full h-screen bg-zinc-900 p-[4vw] -mt-[10vw]"
    >
      <div className="w-1/2 h-full flex flex-col justify-between">
        <div className="heading">
          <h1 className="text-[7vw] uppercase leading-none -mb-[1vw] font-bold">
            Eye-
          </h1>
          <h1 className="text-[6.5vw] uppercase leading-none -mb-[1vw] font-bold">
            Opening
          </h1>
        </div>
        <img className="w-32 h-12 object-cover" src="/src/assets/vertura.png" alt="Vertura Logo" />
      </div>

      <div className="w-1/2">
        <h1 className="text-[6vw] uppercase leading-none font-bold">
          PRESENTATIONS
        </h1>
        <div className='details font-["Neue_Montreal"] mt-[4vw]'>
          {["Instagram", "Linkedin", "Facebook", "Twitter"].map(
            (item, index) => (
              <a
                key={index}
                className=" block text-[1.5vw] font-light"
                href="#"
              >
                {item}
              </a>
            )
          )}
        </div>
        <h2 className="mt-[18vw] text-zinc-400">&copy; Vertura's 2025</h2>
      </div>
    </div>
  );
};

export default Footer;
