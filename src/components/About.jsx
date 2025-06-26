import React from 'react'

const About = () => {
  return (
    <div className='w-full p-[5vw] bg-black rounded-tl-3xl rounded-tr-3xl text-white'>
        <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4vw] tracking-tight'>VERTURA is a streetwear brand that bridges the gap between urban culture and high-quality fashion, creating
        pieces that speak to the modern generation's desire for authenticity and style.</h1>

        <div className='flex gap-5 w-full border-t-[1px] pt-[3vw] border-[#99aa5d] mt-[4vw]'>
            <div className='w-1/2'>
                <h1 className='text-[5vw] text-[#205eab]'>Our Vision:</h1>
                <button className='flex gap-5 items-center px-[2vw] py-[1vw] bg-[#205eab] mt-[0.8vw] rounded-full text-white uppercase'>Explore Collection
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>

            <div className='w-1/2 rounded-3xl'>
                <img className='' src="public/mayonk.jpeg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About