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

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-4">
          
          {/* القسم الأول: البراند والوصف */}
          <div className="space-y-6 md:col-span-2">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl font-black tracking-tighter text-white"
            >
              {COMPANY_NAME}
            </motion.div>
            <p className="max-w-sm text-lg leading-relaxed text-slate-400">
              Driving digital transformation through advanced web development and intelligent engineering solutions. We provide 24/7 expertise, building scalable, secure, and future-ready platforms that power modern businesses.
            </p>
            
            {/* أيقونات السوشيال ميديا مع أنيميشن احترافي */}
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="flex items-center justify-center w-10 h-10 transition-colors border rounded-full bg-white/5 border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* القسم الثاني: روابط سريعة (Map) */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-widest text-white uppercase">Navigation</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="flex items-center transition-colors text-slate-400 hover:text-white group"
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
            <h4 className="text-xs font-bold tracking-widest text-white uppercase">Reach us directly</h4>
            <div className="space-y-4 text-slate-400">
              <p className="transition-colors cursor-pointer hover:text-cyan-400">{CONTACT_INFO.email}</p>
              <p className="transition-colors cursor-pointer hover:text-cyan-400">{CONTACT_INFO.phone}</p>
              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToTop}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-black tracking-tighter text-white uppercase border rounded-full bg-white/5 border-white/10 hover:bg-white/10"
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
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}