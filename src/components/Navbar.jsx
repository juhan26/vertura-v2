import React, { useState } from 'react';
import logo from '/vertura.png'; // from public folder

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 z-[999] w-full px-6 md:px-20 py-4 bg-black/70 backdrop-blur-lg text-white font-['Neue Montreal'] flex justify-between items-center shadow-md">
            {/* Logo */}
            <div className="flex items-center">
                <img
                    className="w-24 h-10 md:w-32 md:h-12 object-cover"
                    src={logo}
                    alt="Vertura Logo"
                />
            </div>

            {/* Burger Menu */}
            <div className="md:hidden">
                <button
                    className="text-3xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Navigation Links */}
            <div
                className={`absolute md:static top-full left-0 w-full md:w-auto flex flex-col md:flex-row gap-6 md:gap-10 items-center py-6 md:py-0 transition-all duration-300 ${
                    isMenuOpen ? 'translate-y-0 opacity-100 bg-black/70 backdrop-blur-lg' : '-translate-y-10 opacity-0 pointer-events-none'
                } md:translate-y-0 md:opacity-100 md:pointer-events-auto`}
            >
                {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
                    <a
                        key={index}
                        href="#"
                        className={`text-lg capitalize font-light hover:underline ${
                            index === 4 ? 'md:ml-32' : ''
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
