import { CONTACT_INFO } from "../constants";
import { motion } from "framer-motion";
import { HiPhone, HiMapPin, HiChatBubbleLeftRight, HiEnvelope } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  // المصفوفة المعدلة: حذفنا الإيميل وجعلنا الهاتف يأخذ العرض الكامل
  const CONTACT_DETAILS = [
    // {
    //   id: "phone",
    //   label: "Call Us",
    //   value: CONTACT_INFO.phone,
    //   icon: <HiPhone size={24} />,
    //   color: "text-cyan-400",
    //   bgColor: "bg-cyan-500/20",
    //   link: `tel:${CONTACT_INFO.phone}`, 
    //   fullWidth: true, // تمدد ليأخذ المساحة كاملة
    // },
    // {
    //   id: "address",
    //   label: "Address",
    //   value: "Villa 15, 3rd Neighbourhood, 5th Settlement, Cairo, Egypt",
    //   icon: <HiMapPin size={24} />,
    //   color: "text-slate-300",
    //   bgColor: "bg-slate-700/50",
    //   link: "https://maps.google.com",
    //   fullWidth: true,
    // },
  ];

  // تحسين سرعة الـ Stagger (التتابع)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.08 } // أسرع من 0.2
    }
  };

  // تحسين حركة العناصر لتكون خاطفة وسلسة
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 25 
      } 
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden bg-[#020617]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto rounded-[3.5rem] border border-white/5 bg-slate-900/20 p-8 md:p-16 backdrop-blur-3xl shadow-2xl relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Text & Contact Cards */}
          <div className="space-y-12">
            <div className="space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em]">
                <span className="w-2 h-2 rounded-full bg-[hsl(160,84%,40%)] animate-pulse shadow-[0_0_8px_rgba(33,204,147,0.5)]"></span>
                Team Status: Ready for Work
              </div>
              <h2 className="text-6xl md:text-7xl font-[1000] text-white leading-[0.95] tracking-tighter">
                Building the digital backbone of<br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Your Brand.</span>
              </h2>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
            >
              {CONTACT_DETAILS.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.link}
                  target={item.id === "address" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.015, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                  whileTap={{ scale: 0.98 }}
                  className={`${
                    item.fullWidth ? "md:col-span-2" : ""
                  } p-6 rounded-[2rem] bg-white/5 border border-white/10 flex items-center gap-6 transition-all group cursor-pointer`}
                >
                  <div className={`w-14 h-14 shrink-0 rounded-2xl ${item.bgColor} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">{item.label}</p>
                    <p className="text-sm md:text-base font-bold text-white leading-tight">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Quick Action Buttons */}
          <div className="flex flex-col gap-6 bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-md relative overflow-hidden">
            <div className="absolute -top-10 -right-10 opacity-10 rotate-12">
              <HiChatBubbleLeftRight size={200} className="text-white" />
            </div>

            <div className="relative space-y-6 text-left">
              <div className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em]">Quick Contact</div>
              <h3 className="text-4xl font-black text-white tracking-tighter">Let’s Talk Innovation</h3>
              
              <div className="flex flex-col gap-4">
                <motion.a
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/${CONTACT_INFO.phone.replace(/\+/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-3xl bg-emerald-500 p-6 shadow-lg shadow-emerald-500/20 group"
                >
                  <div className="flex items-center gap-4 text-slate-950">
                    <FaWhatsapp size={28} />
                    <span className="font-bold text-lg">WhatsApp Support</span>
                  </div>
                  <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center justify-between rounded-3xl bg-slate-800 border border-white/10 p-6 hover:bg-slate-700 transition-colors group"
                >
                  <div className="flex items-center gap-4 text-white">
                    <HiEnvelope size={28} className="text-cyan-400" />
                    <span className="font-bold text-lg">Send Email</span>
                  </div>
                  <span className="text-xl text-slate-500 group-hover:translate-x-1 transition-transform">→</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}