import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ServicesProps {
  darkMode: boolean;
}

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Web Design',
    description: 'Creating visually stunning and intuitive designs that capture your brand essence and engage your audience effectively.',
    features: ['UI/UX Design', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Frontend Development',
    description: 'Building fast, scalable, and maintainable web applications using modern frameworks and best practices.',
    features: ['React.js', 'Next.js', 'TypeScript', 'State Management'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Responsive Websites',
    description: 'Developing websites that look and perform flawlessly across all devices, from mobile to desktop.',
    features: ['Mobile-First', 'Cross-Browser', 'Performance', 'Accessibility'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Landing Pages',
    description: 'Crafting high-converting landing pages that drive results and turn visitors into customers.',
    features: ['Conversion Focused', 'A/B Testing', 'SEO Optimized', 'Fast Loading'],
  },
];

export default function Services({ darkMode }: ServicesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="services" 
      className={`relative py-24 lg:py-32 overflow-hidden ${
        darkMode ? '' : 'bg-gradient-to-b from-white via-slate-50 to-white'
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className={`absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl ${
          darkMode ? 'bg-purple-600/5' : 'bg-purple-200/30'
        }`} />
        <div className={`absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl ${
          darkMode ? 'bg-blue-600/5' : 'bg-blue-200/30'
        }`} />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            What I Offer
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Services I{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Provide
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            I offer comprehensive frontend development services to help bring your digital vision to life with precision and creativity.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative p-8 rounded-2xl border transition-all duration-300 overflow-hidden ${
                darkMode 
                  ? 'bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 hover:border-blue-500/30' 
                  : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-lg'
              }`}
            >
              {/* Hover gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                darkMode ? 'bg-gradient-to-br from-blue-600/5 to-purple-600/5' : 'bg-gradient-to-br from-blue-50 to-purple-50'
              }`} />
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-14 h-14 flex items-center justify-center rounded-xl transition-all duration-300 ${
                  darkMode 
                    ? 'bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white' 
                    : 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                }`}>
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className={`text-xl font-bold mb-3 transition-colors ${
                  darkMode 
                    ? 'text-white group-hover:text-blue-400' 
                    : 'text-slate-900 group-hover:text-blue-600'
                }`}>
                  {service.title}
                </h3>
                <p className={`mb-6 leading-relaxed ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, fIndex) => (
                    <span
                      key={fIndex}
                      className={`px-3 py-1 text-sm rounded-full ${
                        darkMode 
                          ? 'bg-slate-700/50 text-slate-300' 
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                darkMode ? 'bg-gradient-to-br from-blue-600/10 to-transparent' : 'bg-gradient-to-br from-blue-100 to-transparent'
              }`} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className={`mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Have a project in mind? Let's discuss how I can help.
          </p>
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/25"
          >
            Start a Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
