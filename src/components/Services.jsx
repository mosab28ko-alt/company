import { motion } from "framer-motion";
import { BsGearFill } from "react-icons/bs";
import { RiRobot2Line } from "react-icons/ri";
import { HiOutlinePaintBrush } from "react-icons/hi2";


const SERVICES = [
  {
    title: "Full-Stack Development",
    desc: "End-to-end web solutions built with high-performance logic and scalable architectures.",
    icon: <BsGearFill /> ,
    color: "from-purple-600 to-blue-600"
  },
  {
    title: "AI & Smart Logic",
    desc: "Integrating intelligent algorithms to automate your business and enhance user experience.",
    icon: <RiRobot2Line />,
    color: "from-cyan-400 to-indigo-500"
  },
  {
    title: "Multimedia & Design",
    desc: "Captivating visual content and UI/UX designs that speak your brand's language.",
    icon: <HiOutlinePaintBrush />,
    color: "from-pink-500 to-purple-600"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* خلفية جمالية خافتة */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent -z-10" />

      <div className="text-center mb-20">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-cyan-400 font-bold tracking-[0.3em] uppercase text-xs"
        >
          Expertise
        </motion.span>
        <h2 className="text-4xl font-black text-white mt-2 uppercase italic tracking-tight">
          Our Tech <span className="text-purple-500">Superpowers</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }} // تأثير الـ 3D البسيط
            className="group relative cursor-pointer"
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-3xl opacity-20 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200`} />
            
            <div className="relative flex flex-col h-full bg-slate-950 p-10 rounded-[22px] border border-white/5 leading-none shadow-2xl">
              <span className="text-5xl mb-6 block">{service.icon}</span>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}