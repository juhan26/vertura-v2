"use client"

import { useState, useEffect } from "react"
import PremiumIntro from "../components/Loading"
import verturaLogo from "../../public/vertura.png" // Adjust the path as necessary

const images = [
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExazBxNGY4c3d2d3U5YjN5MnhweTY1eXFvN2ZlcmZ4aXppanYzNWZ0aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YxILo6x7PPPPW4V9jj/giphy.gif",
]

export default function Home() {
  const [started, setStarted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) 

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="relative w-full h-screen overflow-hidden">
      <img
        src={images[currentIndex]}
        alt="Background animation"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {!started ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white bg-black/50">
          <img
            src={verturaLogo}
            alt="Vertura Logo"
            className="w-48 md:w-72 mb-8"
          />
          <button
            onClick={() => setStarted(true)}
            className="bg-white text-black hover:bg-gray-400 border-0 px-8 py-3 text-lg rounded-md"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="relative z-10">
          <PremiumIntro />
        </div>
      )}
    </main>
  )
}
