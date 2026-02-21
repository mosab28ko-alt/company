import React from 'react';
import { motion } from 'framer-motion';
import bakery from '../../public/bakery.png';
import library from '../../public/library.png';
import shop from '../../public/shop.png';
import car from '../../public/car.png';
import special from '../../public/special.png';
import sneat from '../../public/sneat.png';
import weather from '../../public/weather.png';
import expense from '../../public/expense.png';

const projectData = [
  {
    id: 1,
    title: "AI Data Analytics",
    description: "Integrated system for big data analysis and automated report generation using GPT-4.",
    image: shop,
    github: "https://github.com/mosab28ko-alt/Shopping-project",
    demoLink: "https://project1-demo.com",
    category: "AI Solution"
  },
  {
    id: 2,
    title: "Logistics Pro",
    description: "Advanced shipment tracking and fleet management app with real-time interactive maps.",
    image: special,
    github: "https://github.com/mosab28ko-alt/Java-application",
    demoLink: "https://mosab28ko-alt.github.io/Java-application/",
    category: "Logistics"
  },
  {
    id: 3,
    title: "3D E-Commerce",
    description: "Unique shopping experience allowing users to preview products using Augmented Reality.",
    image: sneat,
    github: "https://github.com/mosab28ko-alt/my-project",
    demoLink: "https://project3-demo.com",
    category: "E-Commerce"
  },
  {
    id: 4,
    title: "Auto Renter",
    description: "Auto Renter is a Laravel + Livewire web application built to streamline car rental operations for shop owners while giving customers a fast",
    image: car,
    github: "https://github.com/ahmedno1/auto-renter",
    demoLink: "https://project3-demo.com",
    category: "E-Commerce"
  },
  {
    id: 5,
    title: "3D E-Commerce",
    description: "Auto Renter is a Laravel + Livewire web application built to streamline car rental operations for shop owners while giving customers a fast",
    image: bakery,
    github: "https://github.com/000SMS000/bakery-website",
    demoLink: "https://project3-demo.com",
    category: "E-Commerce"
  },
  {
    id: 6,
    title: "3D E-Commerce",
    description: "Auto Renter is a Laravel + Livewire web application built to streamline car rental operations for shop owners while giving customers a fast",
    image: library,
    github: "https://github.com/ahmedno1/library-management-system-django",
    demoLink: "https://project3-demo.com",
    category: "E-Commerce"
  },
  {
    id: 7,
    title: "3D E-Commerce",
    description: "Auto Renter is a Laravel + Livewire web application built to streamline car rental operations for shop owners while giving customers a fast",
    image: weather,
    github: "https://github.com/000SMS000/weather-project.git",
    demoLink: "https://project3-demo.com",
    category: "E-Commerce"
  },
  {
    id: 8,
    title: "3D E-Commerce",
    description: "Auto Renter is a Laravel + Livewire web application built to streamline car rental operations for shop owners while giving customers a fast",
    image: expense,
    github: "https://github.com/ahmedno1/expense-management",
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
        <h1 className="mb-6 text-6xl font-black tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Digital Creativity Unleashed
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl font-light leading-relaxed text-slate-400">
          We build smart solutions that leave a real impact on the world of technology.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {projectData.map((project) => (
          <motion.div 
            key={project.id} 
            variants={cardVariants}
            className="group relative bg-[#0f172a]/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-purple-500/50 transition-all duration-500 shadow-2xl"
          >
            {/* Image Section - تفتح موقع المشروع (Demo) */}
            <div className="relative overflow-hidden h-85">
              <img 
                src={project.image} 
                alt={project.title} 
                className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-125 group-hover:rotate-2"
              />
              
              {/* Overlay - Live Demo Link */}
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 opacity-0 bg-black/40 backdrop-blur-md group-hover:opacity-100">
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-3 font-bold text-black transition-colors bg-white rounded-full shadow-2xl hover:bg-purple-500 hover:text-white"
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
              <h3 className="mb-4 text-2xl font-bold text-white transition-colors group-hover:text-purple-400">
                {project.title}
              </h3>
              <p className="h-12 mb-8 overflow-hidden text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>
              
              {/* الزر السفلي - يفتح GitHub */}
              <div className="mb-8">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 font-bold text-white transition-all duration-300 border shadow-lg rounded-xl border-white/20 bg-white/5 hover:bg-white hover:text-black"
                >
                  View on GitHub
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>

              {/* Decorative Line & Project ID */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-1 transition-all duration-1000 rounded-full bg-gradient-to-r from-purple-500 to-transparent group-hover:w-full"></div>
                <span className="font-mono text-xs tracking-tighter text-slate-600">PROJECT / 0{project.id}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OurWork;