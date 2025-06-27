import { motion } from 'framer-motion'
import React from 'react'
import preview from '../../public/preview.png' // Pastikan gambar sudah dihapus background-nya

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="1"
      className="w-full py-6 rounded-tl-3xl rounded-tr-3xl bg-[#205eab]"
      id='marquee'
    >
      <div className="text flex whitespace-nowrap overflow-hidden">
        {[...Array(12)].map((_, index) => (
          <motion.img
            key={index}
            src={preview}
            alt="Preview"
            initial={{ x: "100%" }}
            animate={{ x: "-100vw" }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              duration: 20, // Durasi lebih panjang untuk animasi yang lebih smooth
            }}
            className="h-[36vw] pr-20 md:h-[16vw]"
          />
        ))}
      </div>
    </div>
  )
}

export default Marquee
