import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-300 ${
      darkMode ? 'bg-slate-950' : 'bg-slate-50'
    }`}>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed inset-0 z-[100] flex items-center justify-center ${
              darkMode ? 'bg-slate-950' : 'bg-slate-50'
            }`}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-16 mx-auto mb-6 border-4 border-blue-500/20 border-t-blue-500 rounded-full"
              />
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Hema</span>
                <span className="text-3xl font-bold text-blue-500">nath</span>
              </motion.div>
              <p className={`mt-2 text-sm ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                Loading portfolio...
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className={darkMode ? 'text-white' : 'text-slate-900'}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main>
          <Hero darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Services darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </main>

        <Footer darkMode={darkMode} />
      </div>

      {/* Cursor Glow Effect (Desktop only, dark mode only) */}
      {darkMode && (
        <div className="hidden lg:block">
          <CursorGlow />
        </div>
      )}
    </div>
  );
}

// Cursor glow effect component
function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed w-64 h-64 rounded-full pointer-events-none z-0"
      style={{
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
        left: mousePosition.x - 128,
        top: mousePosition.y - 128,
      }}
      animate={{
        left: mousePosition.x - 128,
        top: mousePosition.y - 128,
      }}
      transition={{ type: 'spring', damping: 30, stiffness: 200 }}
    />
  );
}
