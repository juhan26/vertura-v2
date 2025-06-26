import React from 'react';

const Navbar = () => {
    return (
        <div className="fixed z-[999] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between items-center shadow-md">
            <div className="logo flex items-center">
                <img className="w-32 h-12 object-cover" src="/src/assets/vertura.png" alt="Vertura Logo" />
            </div>

            <div className="links flex gap-10">
                {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
                    <a
                        key={index}
                        className={`text-lg capitalize font-light hover:underline ${
                            index === 4 && 'ml-32'
                        }`}
                    >
                        {item}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Navbar;