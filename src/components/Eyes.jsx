import React, { useEffect, useState } from 'react';
import banner from '../../public/banner.png'; // Adjust the path as necessary

const Eyes = () => {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="hidden md:block eyes w-full h-screen overflow-hidden">
            <div
                data-scroll
                data-scroll-speed="-0.7"
                className="relative w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${banner})` }}
            >
                <div className="absolute flex gap-[5vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex-wrap md:flex-nowrap">
                    {/* eye 1 */}
                    <div className="flex items-center justify-center w-[25vw] h-[25vw] md:w-[15vw] md:h-[15vw] rounded-full bg-zinc-100">
                        <div className="relative w-[15vw] h-[15vw] md:w-[10vw] md:h-[10vw] rounded-full bg-zinc-900">
                            <div
                                style={{
                                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                                }}
                                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                            >
                                <div className="w-[4vw] h-[4vw] md:w-[2vw] md:h-[2vw] rounded-full bg-zinc-100"></div>
                            </div>
                        </div>
                    </div>

                    {/* eye 2 */}
                    <div className="flex items-center justify-center w-[25vw] h-[25vw] md:w-[15vw] md:h-[15vw] rounded-full bg-zinc-100">
                        <div className="relative w-[15vw] h-[15vw] md:w-[10vw] md:h-[10vw] rounded-full bg-zinc-900">
                            <div
                                style={{
                                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                                }}
                                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                            >
                                <div className="w-[4vw] h-[4vw] md:w-[2vw] md:h-[2vw] rounded-full bg-zinc-100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Eyes;