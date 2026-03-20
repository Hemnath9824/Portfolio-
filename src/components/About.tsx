import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section 
      id="about" 
      className={`relative py-24 lg:py-32 overflow-hidden ${
        darkMode ? '' : 'bg-white'
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl ${
          darkMode ? 'bg-blue-600/5' : 'bg-blue-200/30'
        }`} />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title - Centered */}
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
            About Me
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Background decoration */}
              <div className={`absolute -inset-4 bg-gradient-to-r rounded-2xl blur-2xl ${
                darkMode ? 'from-blue-600/20 to-purple-600/20' : 'from-blue-400/20 to-purple-400/20'
              }`} />
              
              {/* Main image container */}
              <div className={`relative rounded-2xl p-8 border ${
                darkMode 
                  ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700/50' 
                  : 'bg-gradient-to-br from-slate-50 to-white border-slate-200'
              }`}>
                {/* Code snippet decoration */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className={`ml-4 text-sm font-mono ${
                      darkMode ? 'text-slate-500' : 'text-slate-400'
                    }`}>about.tsx</span>
                  </div>
                  
                  <pre className="text-sm font-mono overflow-x-auto">
                    <code>
                      <span className="text-purple-500">const</span>
                      <span className={darkMode ? 'text-white' : 'text-slate-800'}> developer </span>
                      <span className="text-blue-500">=</span>
                      <span className={darkMode ? 'text-white' : 'text-slate-800'}> {'{'}</span>
                      {'\n'}
                      <span className="text-slate-500">  </span>
                      <span className="text-blue-400">name</span>
                      <span className={darkMode ? 'text-white' : 'text-slate-800'}>: </span>
                      <span className="text-green-500">"Hemanath"</span>
                      <span className={darkMode ? 'text-white' : 'text-slate-800'}>,</span>
                      {'\n'}
                      <span className="text-slate-500">  </span>
                      <span className="text-blue-400">role</span>
                      <span className={darkMode ? 'text-white' : 'text-slate-800'}>: </span>
                      <span className="text-green-500">"Frontend Dev"</span>
                      <span className={darkMode ? 'text-white' : 'text-slate-800'}>,</span>
                      {'\n'}
                      <span className="text-slate-500">  </span>
                      <span className="text-blue-400">status</span>
                      <span className={darkMode ? 'text-white' : 'text-slate-800'}>: </span>
                      <span className="text-green-500">"Seeking Opportunities"</span>
                      <span className={darkMode ? 'text-white' : 'text-slate-800'}>,</span>
                      {'\n'}
                      <span className="text-slate-500">  </span>
                      <span className="text-blue-400">passion</span>
                      <span className={darkMode ? 'text-white' : 'text-slate-800'}>: </span>
                      <span className="text-orange-500">true</span>
                      <span className={darkMode ? 'text-white' : 'text-slate-800'}>,</span>
                      {'\n'}
                      <span className={darkMode ? 'text-white' : 'text-slate-800'}>{'}'}</span>
                    </code>
                  </pre>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 p-4 bg-blue-600 rounded-xl shadow-xl shadow-blue-600/25"
              >
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278z"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Tagline - Now appears before the description */}
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-8 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Eager to Build & Learn with{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Passion & Dedication
              </span>
            </h2>

            <div className={`space-y-4 text-lg leading-relaxed mb-8 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <p>
                I'm a fresher frontend developer with a genuine love for creating beautiful, functional, and user-centered digital experiences. Currently seeking opportunities to kickstart my career and contribute to meaningful projects.
              </p>
              <p>
                My journey in web development has been driven by curiosity and hands-on learning. I've built projects using React.js, Tailwind CSS, and modern web technologies, always focusing on clean code and intuitive design.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: '🎯', title: 'Focus', desc: 'Clean Code & Great UX' },
                { icon: '📚', title: 'Learning', desc: 'Always Growing' },
                { icon: '💡', title: 'Philosophy', desc: 'Simplicity Wins' },
                { icon: '🤝', title: 'Approach', desc: 'Team Player' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`p-4 rounded-xl border transition-all ${
                    darkMode 
                      ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-500/30' 
                      : 'bg-slate-50 border-slate-200 hover:border-blue-300'
                  }`}
                >
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  <h3 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={() => {
                setTimeout(() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/25"
            >
              Let's Connect
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
