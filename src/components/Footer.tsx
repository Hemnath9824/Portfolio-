import { motion } from 'framer-motion';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative py-12 border-t ${
      darkMode ? 'border-slate-800/50' : 'border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold tracking-tight"
          >
            <span className={darkMode ? 'text-white' : 'text-slate-900'}>Hema</span>
            <span className="text-blue-500">nath</span>
          </motion.button>

          {/* Copyright */}
          <p className={`text-sm text-center ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
            © {currentYear} Hemanath. All rights reserved. Built with{' '}
            <span className="text-red-500">❤️</span> and React.
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className={`p-3 rounded-xl border transition-all ${
              darkMode 
                ? 'bg-slate-800/50 text-slate-400 border-slate-700/50 hover:border-blue-500/30 hover:text-blue-400' 
                : 'bg-white text-slate-500 border-slate-200 hover:border-blue-300 hover:text-blue-600 shadow-sm'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
