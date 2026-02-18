import { NAV_LINKS, COMPANY_NAME, CONTACT_INFO } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // مصفوفة التواصل الاجتماعي - تظهر قوتك في التنظيم
  const SOCIAL_LINKS = [
    { id: "linkedin", icon: <FaLinkedin size={20} />, href: "#" },
    { id: "github", icon: <FaGithub size={20} />, href: "#" },
    { id: "twitter", icon: <FaTwitter size={20} />, href: "#" },
  ];

  // وظيفة العودة للأعلى بسلاسة
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#020617] pt-24 pb-12 px-6 overflow-hidden">
      {/* 1. تأثير خلفية متقدم (Glow Effect) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-t from-cyan-500/10 to-transparent blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* القسم الأول: البراند والوصف */}
          <div className="md:col-span-2 space-y-6">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl font-black tracking-tighter text-white"
            >
              {COMPANY_NAME}<span className="text-cyan-400">.</span>
            </motion.div>
            <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
              Driving digital transformation through advanced web development and intelligent engineering solutions. We provide 24/7 expertise, building scalable, secure, and future-ready platforms that power modern businesses.
            </p>
            
            {/* أيقونات السوشيال ميديا مع أنيميشن احترافي */}
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* القسم الثاني: روابط سريعة (Map) */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-slate-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-cyan-400 mr-0 group-hover:mr-2 transition-all opacity-0 group-hover:opacity-100"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* القسم الثالث: التواصل المباشر */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Reach us directly</h4>
            <div className="space-y-4 text-slate-400">
              <p className="hover:text-cyan-400 transition-colors cursor-pointer">{CONTACT_INFO.email}</p>
              <p className="hover:text-cyan-400 transition-colors cursor-pointer">{CONTACT_INFO.phone}</p>
              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToTop}
                  className="flex items-center gap-2 text-xs font-black uppercase tracking-tighter bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white hover:bg-white/10"
                >
                  Back to top <FaArrowUp className="text-cyan-400" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* خط الفصل السفلي */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* حقوق النشر واللمسات النهائية */}
        <div className="flex flex-col md:row items-center justify-between gap-6 text-[12px] font-medium text-slate-500 uppercase tracking-widest">
          <p>© {currentYear} {COMPANY_NAME}. Built with passion & precision.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}