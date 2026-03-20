import { motion } from 'framer-motion';
import profilePic from "../assets/profile.jpg";

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const scrollToSection = (sectionId: string) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-20 ${
        darkMode ? '' : 'bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100'
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl ${
          darkMode ? 'bg-blue-600/20' : 'bg-blue-400/20'
        }`} />
        <div className={`absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl ${
          darkMode ? 'bg-purple-600/20' : 'bg-purple-400/15'
        }`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial rounded-full ${
          darkMode ? 'from-blue-900/10 to-transparent' : 'from-blue-200/20 to-transparent'
        }`} />
        
        {/* Grid Pattern */}
        <div className={`absolute inset-0 ${
          darkMode 
            ? 'bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)]' 
            : 'bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]'
        } bg-[size:60px_60px]`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
                darkMode 
                  ? 'bg-blue-500/10 border border-blue-500/20' 
                  : 'bg-blue-100 border border-blue-200'
              }`}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className={`text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Open to opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              <span className={darkMode ? 'text-white' : 'text-slate-900'}>Hi, I'm </span>
              <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Hemanath
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-xl sm:text-2xl font-medium mb-4 ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Frontend Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              A passionate fresher eager to build beautiful, responsive, and user-centric web experiences. Ready to bring creativity and modern tech skills to your team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2"
              >
                <span>Hire Me</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 font-semibold rounded-xl border transition-all flex items-center justify-center gap-2 ${
                  darkMode 
                    ? 'bg-slate-800/50 hover:bg-slate-700/50 text-white border-slate-700/50' 
                    : 'bg-white hover:bg-slate-50 text-slate-900 border-slate-200 shadow-sm'
                }`}
              >
                <span>View Projects</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
              {/* Decorative rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className={`absolute inset-0 rounded-full border ${
                  darkMode ? 'border-blue-500/20' : 'border-blue-400/30'
                }`}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className={`absolute inset-4 rounded-full border ${
                  darkMode ? 'border-purple-500/20' : 'border-purple-400/25'
                }`}
              />
              
              {/* Glowing background */}
              <div className={`absolute inset-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-2xl ${
                darkMode ? 'opacity-30' : 'opacity-20'
              }`} />
              
              {/* Image container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-8 rounded-full overflow-hidden border-4 shadow-2xl ${
                  darkMode ? 'border-slate-800/50' : 'border-white'
                }`}
              >
                <img
                  src={profilePic}
                  alt="Hemanath - Frontend Developer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face';
                  }}
                />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className={`absolute -top-2 -right-2 p-3 rounded-xl shadow-lg ${
                  darkMode ? 'bg-slate-800 border border-slate-700/50' : 'bg-white border border-slate-200'
                }`}
              >
                <span className="text-2xl">⚛️</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className={`absolute -bottom-2 -left-2 p-3 rounded-xl shadow-lg ${
                  darkMode ? 'bg-slate-800 border border-slate-700/50' : 'bg-white border border-slate-200'
                }`}
              >
                <span className="text-2xl">🎨</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
