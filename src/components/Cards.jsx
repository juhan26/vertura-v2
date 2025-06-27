import React from 'react'
import verturaLogo from '../../public/vertura.png'

const Cards = () => {
  return (
    <div data-scroll data-scroll-speed="0.4" className='w-full h-screen bg-zinc-100 flex items-center px-[5vw] gap-[3vw]'>

        <div className='cardcontainer w-1/2 h-[25vw]'>
            <div className="card relative rounded-xl w-full h-full bg-[#2b5376] flex items-center justify-center">
                <img className='w-[20vw]' src={verturaLogo} alt="" />
                <button className='absolute left-[2vw] bottom-[2vw] px-[1vw] py-[0.5vw] border-2 rounded-full text-[#f0df91] border-[#f0df91]'>&copy;2024-2025</button>
            </div>
        </div>

        {/* 2nd card */}
        <div className='cardcontainer flex gap-[3vw] w-1/2 h-[25vw]'>
            <div className="card relative rounded-xl w-1/2 h-full bg-slate-600 flex flex-col items-center justify-center">
            {/* <img className='w-[10vw] -translate-y-[50%]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" /> */}
            <h1 className='text-3xl font-bold uppercase mb-3'>Premium</h1>
            <p className='text-sm'>Quality Materials</p>
            <button className='absolute left-[1vw] bottom-[1vw] px-[0.8vw] py-[0.3vw] border-[1px] rounded-full uppercase text-[1vw]'>PREMIUM QUALITY</button>
            </div>

            <div className="card relative rounded-xl w-1/2 h-full bg-[#244562] flex flex-col items-center justify-center">
            {/* <img className='w-[10vw] -translate-y-[40%]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" /> */}
            <h1 className='text-3xl font-bold uppercase mb-3'>CULTURE</h1>
            <p className='text-sm'>Street Inspired</p>
            <button className='absolute left-[1vw] bottom-[1vw] px-[0.8vw] py-[0.3vw] border-[1px] rounded-full uppercase text-[1vw]'>street culture</button>
            </div>
        </div>

    </div>
  )
}

export default Cards