import React from 'react';
import { motion } from 'framer-motion';
import tso from '../../public/tsog.png';
import goa from '../../public/goal.png';
import rasd from '../../public/rasde.png';
import ca from '../../public/car.png';
import fot from '../../public/fote.png';
import bayh from '../../public/bayho.jpg';

const projectData = [
  {
    id: 1,
    title: "AI Data Analytics",
    description: "Integrated system for big data analysis and automated report generation using GPT-4.",
    image: tso,
    github: "https://github.com/mosab28ko-alt/Shopping-project",
    demoLink: "https://project1-demo.com",
    category: "AI Solution"
  },
  {
    id: 2,
    title: "Logistics Pro",
    description: "Advanced shipment tracking and fleet management app with real-time interactive maps.",
    image: goa,
    github: "https://github.com/mosab28ko-alt/Java-application",
    demoLink: "https://mosab28ko-alt.github.io/Java-application/",
    category: "Logistics"
  },
  {
    id: 3,
    title: "3D E-Commerce",
    description: "Unique shopping experience allowing users to preview products using Augmented Reality.",
    image: rasd,
    github: "https://github.com/mosab28ko-alt/my-project",
    demoLink: "https://project3-demo.com",
    category: "E-Commerce"
  },
  {
    id: 4,
    title: "3D E-Commerce",
    description: "Auto Renter is a Laravel + Livewire web application built to streamline car rental operations for shop owners while giving customers a fast",
    image: ca,
    github: "https://github.com/ahmedno1/auto-renter",
    demoLink: "https://project3-demo.com",
    category: "E-Commerce"
  },
  {
    id: 5,
    title: "3D E-Commerce",
    description: "Auto Renter is a Laravel + Livewire web application built to streamline car rental operations for shop owners while giving customers a fast",
    image: fot,
    github: "https://github.com/000SMS000/bakery-website",
    demoLink: "https://project3-demo.com",
    category: "E-Commerce"
  },
  {
    id: 6,
    title: "3D E-Commerce",
    description: "Auto Renter is a Laravel + Livewire web application built to streamline car rental operations for shop owners while giving customers a fast",
    image: bayh,
    github: "https://github.com/ahmedno1/library-management-system-django",
    demoLink: "https://project3-demo.com",
    category: "E-Commerce"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const OurWork = () => {
  return (
    <div className="bg-[#050a18] min-h-screen pb-24 px-6 md:px-20 text-left font-sans" dir="ltr">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-24 text-center"
      >
        <h1 className="text-6xl font-black mb-6 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Digital Creativity Unleashed
          </span>
        </h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light leading-relaxed">
          We build smart solutions that leave a real impact on the world of technology.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {projectData.map((project) => (
          <motion.div 
            key={project.id} 
            variants={cardVariants}
            className="group relative bg-[#0f172a]/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-purple-500/50 transition-all duration-500 shadow-2xl"
          >
            {/* Image Section - تفتح موقع المشروع (Demo) */}
            <div className="relative h-72 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125 group-hover:rotate-2"
              />
              
              {/* Overlay - Live Demo Link */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-8 py-3 rounded-full font-bold shadow-2xl hover:bg-purple-500 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>Visit Website</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </motion.a>
              </div>

              {/* Category Tag */}
              <div className="absolute top-5 left-5 bg-purple-600/20 backdrop-blur-lg border border-purple-500/30 px-4 py-1.5 rounded-full text-xs font-bold text-purple-300">
                {project.category}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-10">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 h-12 overflow-hidden">
                {project.description}
              </p>
              
              {/* الزر السفلي - يفتح GitHub */}
              <div className="mb-8">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl border border-white/20 bg-white/5 text-white font-bold hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
                >
                  View on GitHub
                  <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>

              {/* Decorative Line & Project ID */}
              <div className="flex items-center justify-between">
                <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-transparent rounded-full group-hover:w-full transition-all duration-1000"></div>
                <span className="text-xs font-mono text-slate-600 tracking-tighter">PROJECT / 0{project.id}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OurWork;