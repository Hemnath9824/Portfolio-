import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ProjectsProps {
  darkMode: boolean;
}

export default function Projects({ darkMode }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section 
      id="projects" 
      className={`relative py-24 lg:py-32 overflow-hidden ${
        darkMode ? '' : 'bg-gradient-to-b from-white via-slate-50 to-white'
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl ${
          darkMode ? 'bg-blue-600/5' : 'bg-blue-200/30'
        }`} />
        <div className={`absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl ${
          darkMode ? 'bg-purple-600/5' : 'bg-purple-200/30'
        }`} />
      </div>

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${
            darkMode 
              ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400' 
              : 'bg-blue-100 border border-blue-200 text-blue-600'
          }`}>
            My Work
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            A showcase of my skills and passion for building great web experiences.
          </p>
        </motion.div>

        {/* Featured Project - Wandersphere */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 ${
            darkMode 
              ? 'bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 hover:border-blue-500/30' 
              : 'bg-white border-slate-200 hover:border-blue-300 shadow-lg hover:shadow-xl'
          }`}>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-72 lg:h-96 overflow-hidden">
                <div className={`absolute inset-0 z-10 ${
                  darkMode 
                    ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 group-hover:opacity-50' 
                    : 'bg-gradient-to-r from-blue-400/10 to-purple-400/10 group-hover:opacity-30'
                } transition-opacity`} />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=500&fit=crop"
                  alt="Wandersphere - Travel Website"
                  className="w-full h-full object-cover"
                />
                {/* Featured Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Featured Project
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🌍</span>
                  <h3 className={`text-2xl lg:text-3xl font-bold transition-colors ${
                    darkMode 
                      ? 'text-white group-hover:text-blue-400' 
                      : 'text-slate-900 group-hover:text-blue-600'
                  }`}>
                    Wandersphere
                  </h3>
                </div>
                
                <p className={`text-lg mb-6 leading-relaxed ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  A comprehensive travel website for exploring destinations, booking trips, hotels, and trekking adventures. Features beautiful UI, intuitive booking system, and seamless user experience.
                </p>

                {/* Key Features */}
                <div className="mb-8">
                  <h4 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${
                    darkMode ? 'text-slate-500' : 'text-slate-500'
                  }`}>
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {['Destination Explorer', 'Trip Booking', 'Hotel Reservations', 'Trekking Adventures'].map((feature, index) => (
                      <div 
                        key={index}
                        className={`flex items-center gap-2 text-sm ${
                          darkMode ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {['React.js', 'Tailwind CSS', 'Travel', 'Booking'].map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1.5 text-sm rounded-full ${
                        darkMode 
                          ? 'bg-slate-700/50 text-slate-300 border border-slate-600/50' 
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.a
                  href="https://wandersphere-travel.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/25 w-fit"
                >
                  <span>Live Experience</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </div>
            </div>

            {/* Hover Glow Effect */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
              darkMode 
                ? 'bg-gradient-to-r from-blue-600/5 to-purple-600/5' 
                : 'bg-gradient-to-r from-blue-100/50 to-purple-100/50'
            }`} />
          </div>
        </motion.div>

        {/* Coffee Area Project */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12"
        >
          <div className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 ${
            darkMode 
              ? 'bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 hover:border-amber-500/30' 
              : 'bg-white border-slate-200 hover:border-amber-300 shadow-lg hover:shadow-xl'
          }`}>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-72 lg:h-96 overflow-hidden lg:order-2">
                <div className={`absolute inset-0 z-10 ${
                  darkMode 
                    ? 'bg-gradient-to-r from-amber-600/20 to-orange-600/20 group-hover:opacity-50' 
                    : 'bg-gradient-to-r from-amber-400/10 to-orange-400/10 group-hover:opacity-30'
                } transition-opacity`} />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=500&fit=crop"
                  alt="Coffee Area - Cafe Website"
                  className="w-full h-full object-cover"
                />
                {/* Project Badge */}
                <div className="absolute top-6 right-6 z-20">
                  <span className="px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-sm font-semibold rounded-full shadow-lg flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Cafe Project
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">☕</span>
                  <h3 className={`text-2xl lg:text-3xl font-bold transition-colors ${
                    darkMode 
                      ? 'text-white group-hover:text-amber-400' 
                      : 'text-slate-900 group-hover:text-amber-600'
                  }`}>
                    Coffee Area
                  </h3>
                </div>
                
                <p className={`text-lg mb-6 leading-relaxed ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  A modern and responsive cafe website designed to showcase menu items, ambiance, and provide a smooth user experience. Features a clean UI, attractive layout, and basic interactivity suitable for a coffee shop.
                </p>

                {/* Key Features */}
                <div className="mb-8">
                  <h4 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${
                    darkMode ? 'text-slate-500' : 'text-slate-500'
                  }`}>
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {['Menu Showcase', 'Clean UI Design', 'Responsive Layout', 'Smooth Animations'].map((feature, index) => (
                      <div 
                        key={index}
                        className={`flex items-center gap-2 text-sm ${
                          darkMode ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {['HTML', 'CSS', 'JS', 'Responsive'].map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1.5 text-sm rounded-full ${
                        darkMode 
                          ? 'bg-slate-700/50 text-slate-300 border border-slate-600/50' 
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.a
                  href="https://hemnath9824.github.io/Coffee-Area/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(245, 158, 11, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-amber-600/25 w-fit"
                >
                  <span>Live Experience</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </div>
            </div>

            {/* Hover Glow Effect */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
              darkMode 
                ? 'bg-gradient-to-r from-amber-600/5 to-orange-600/5' 
                : 'bg-gradient-to-r from-amber-100/50 to-orange-100/50'
            }`} />
          </div>
        </motion.div>

        {/* More Projects Coming */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full ${
            darkMode 
              ? 'bg-slate-800/50 border border-slate-700/50' 
              : 'bg-slate-50 border border-slate-200'
          }`}>
            <span className="text-2xl">🔨</span>
            <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              More exciting projects coming soon!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
                    }
                  
