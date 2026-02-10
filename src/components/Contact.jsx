import { CONTACT_INFO } from "../constants";
import { motion } from "framer-motion";
import { HiPhone, HiEnvelope, HiMapPin, HiChatBubbleLeftRight } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import { tr } from "framer-motion/client";

export default function Contact() {
  const CONTACT_DETAILS = [
    {
      id: "phone",
      label: "Call Us",
      value: CONTACT_INFO.phone,
      icon: <HiPhone size={24} />,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/20",
      // رابط الاتصال المباشر
      link: `tel:${CONTACT_INFO.phone}`, 
      fullWidth: true,
    },
    {
      id: "email",
      label: "Email Us",
      value: CONTACT_INFO.email,
      icon: <HiEnvelope size={24} />,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      // رابط الإيميل المباشر
      link: `mailto:${CONTACT_INFO.email}`,
      fullWidth: tr,
    },
    {
      id: "address",
      label: "Address",
      value: "UAE, Abu Dhabi - Business Bay Tower",
      icon: <HiMapPin size={24} />,
      color: "text-slate-300",
      bgColor: "bg-slate-700/50",
      // رابط خرائط جوجل
      link: "https://maps.google.com/?q=Business+Bay+Tower+Abu+Dhabi",
      fullWidth: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden bg-[#020617]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto rounded-[3.5rem] border border-white/5 bg-slate-900/20 p-8 md:p-16 backdrop-blur-3xl shadow-2xl relative"
      >
        <div className="grid items-start grid-cols-1 gap-16 lg:grid-cols-2">
          
          <div className="space-y-12">
            <div className="space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                Team Status: Ready for Work
              </div>
              <h2 className="text-6xl md:text-7xl font-[1000] text-white leading-[0.95] tracking-tighter">
               Let's talk about <br />
                <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text">your project.</span>
              </h2>
              <p className="max-w-md text-xl font-medium leading-relaxed text-slate-400">
                We engineer systems that scale and marketing that dominates.
              </p>
            </div>

            {/* تم تحويل البطاقات إلى روابط شغالّة */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-4 text-left md:grid-cols-2"
            >
              {CONTACT_DETAILS.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.link}
                  target={item.id === "address" ? "_blank" : "_self"} // يفتح الخريطة في صفحة جديدة
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`${
                    item.fullWidth ? "md:col-span-2" : ""
                  } p-6 rounded-[2rem] bg-white/5 border border-white/10 flex items-center gap-4 hover:bg-white/10 transition-all group cursor-pointer`}
                >
                  <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{item.label}</p>
                    <p className="text-sm font-bold text-white">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* الجانب الأيمن - الأزرار الكبيرة مفعلة بالكامل */}
          <div className="flex flex-col gap-6 bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-md relative overflow-hidden">
            <div className="absolute -top-10 -right-10 opacity-10 rotate-12">
              <HiChatBubbleLeftRight size={200} className="text-white" />
            </div>

            <div className="relative space-y-6 text-left">
              <div className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em]">Quick Contact</div>
              <h3 className="text-4xl font-black tracking-tighter text-white">Reach us directly</h3>
              
              <div className="flex flex-col gap-4">
                {/* زر الواتساب */}
                <motion.a
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/${CONTACT_INFO.phone.replace(/\+/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 shadow-lg rounded-3xl bg-emerald-500 shadow-emerald-500/20"
                >
                  <div className="flex items-center gap-4 text-slate-950">
                    <FaWhatsapp size={28} />
                    <span className="text-lg font-bold">WhatsApp Support</span>
                  </div>
                  <span className="text-xl">→</span>
                </motion.a>

                {/* زر الإيميل */}
                <motion.a
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center justify-between p-6 transition-colors border rounded-3xl bg-slate-800 border-white/10 hover:bg-slate-700"
                >
                  <div className="flex items-center gap-4 text-white">
                    <HiEnvelope size={28} className="text-cyan-400" />
                    <span className="text-lg font-bold">Send Email</span>
                  </div>
                  <span className="text-xl text-slate-500">→</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}