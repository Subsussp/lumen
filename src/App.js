import { Route, Router, Routes, useLocation, useNavigationType } from "react-router-dom";
import About from "./Components/about";
import Home from "./Pages/Home";
import { AnimatePresence } from "framer-motion";
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Navbar from './Components/Navbar'
import { useEffect, useRef, useState } from "react";
import Contact from "./Components/Q&A";
import Aboutpage from "./Pages/Aboutpage";
import Contactpage from "./Pages/Contactpage";
import SHome from "./Pages/SHome";
import NotFound from "./Pages/NotFound";
function App() {
  const location = useLocation()
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [cursorVariant, setCursorVariant] = useState("default");
  const navigationType = useNavigationType(); // "POP", "PUSH", or "REPLACE"
  const isHardReload = navigationType === 'POP';

    const smoothX = useSpring(cursorX, {
        stiffness: 150,   // lower = more lag
        damping: 18,      // higher = snappier
        mass: 0.3         // controls inertia
    });
    const smoothY = useSpring(cursorY, {
        stiffness: 150,
        damping: 18,
        mass: 0.3
    });
  useEffect(() => {
    const mouseMove = e => {
        cursorX.set(e.clientX - 24);
        cursorY.set(e.clientY - 24);
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, [cursorX, cursorY]);

  const variants = {
    default: {
    },
    text: {
      height: 36,
      width: 36,
        backdropFilter: "blur(.9px)",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
 
  return (<>
    <motion.div
              className='cursor'
               style={{
                    x: smoothX, // this animates left
                    y: smoothY, // this animates top
                }}
              variants={variants}
              animate={cursorVariant}
            />
        <Navbar location={location.pathname} textEnter={textEnter} textLeave={textLeave}/>
    <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}>
        <Route index element={!isHardReload ? <Home /> : <SHome/>} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/details" element={<About />} />
        <Route path="/Contact" element={<Contactpage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
    <footer className="bg-gradient-to-b from-[#01031a] to-gray-900 pt-20 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      <div className="space-y-6">
                        <div className="flex items-center">
                            <span className="text-2xl font-bold text-white ">MentorFlowX / Ecom Mentor</span>
                        </div>
                        <p className="text-gray-400">
                            The #1 mentorship program for building, scaling, and automating a profitable online business.
                        </p>

                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className='text-gray-400'>© 2025 MentorFlowX – All Rights Reserved</p>
                    </div>
                </div>
            </div>
    </div>
      </div>
    </footer>
  </>
  );
}

export default App;
