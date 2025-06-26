import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Mraquee from "./components/Mraquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Features from "./components/Features";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/entrance';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <Router>
      <div className="w-full min-h-screen text-white bg-zinc-900">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/shop"
            element={
              <>
                <Navbar />
                <LandingPage />
                <Mraquee />
                <About />
                <Eyes />
                <Features />
                <Cards />
                <Footer />
              </>
            }
          />
          <Route path="/features" element={<Features />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
