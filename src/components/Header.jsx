import { useState } from "react";
import { NAV_LINKS, COMPANY_NAME } from "../constants";
import sloga from "../../public/slogan.jpg";

/**
 * NavItem Component
 * مكون فرعي للروابط مع تأثير خط سفلي وتغيير لون احترافي
 */
const NavItem = ({ href, label, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="relative rounded-xl px-4 py-2 text-sm font-bold tracking-wide text-slate-300 transition-all duration-300 hover:bg-purple-500/10 hover:text-purple-400 group"
  >
    {label}
    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-full" />
  </a>
);

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className="sticky top-4 z-50 rounded-2xl border border-white/10 bg-black/60 px-6 py-4 backdrop-blur-xl">
      <div className=" flex items-center justify-between gap-4">
        
        {/* قسم اللوجو الاحترافي - مدمج مع الصورة */}
        <div className="flex items-center gap-3 group cursor-pointer w-[500px]">
          <div className="relative h-10 w-[180px] overflow-hidden rounded-xl  from-purple-600 to-cyan-400 p-[1px]  transition-all duration-500 group-">
            <div className=" relative flex h-[51px] w-full items-center justify-center rounded-[11px] bg-slate-950 overflow-hidden">
              <img 
                src={sloga} 
                alt="Code Nexus AI Logo" 
                className=" h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
          </div>
          
          {/* <div className="flex flex-col">
            <span className="text-xl font-black italic tracking-tighter text-white uppercase leading-none">
              CODE NEXUS<span className="text-purple-500 ml-0.5">AI</span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-cyan-400 uppercase opacity-80">
              Professional Tech Solutions
            </span>
          </div> */}
        </div>

        {/* القائمة الرئيسية (Desktop) */}
        <nav
          className={`${
            open ? "flex" : "hidden"
          } absolute left-0 right-0 top-20 flex-col gap-3 rounded-2xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl md:static md:flex md:flex-row md:items-center md:gap-4 md:border-none md:bg-transparent md:p-0 md:shadow-none`}
        >
          {NAV_LINKS.map((link) => (
            <NavItem 
              key={link.href} 
              href={link.href} 
              label={link.label} 
              onClick={handleLinkClick} 
            />
          ))}
          
          {/* زر طلب عرض (CTA Button) بتصميم متوهج */}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-2.5 text-xs font-black tracking-widest text-white shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] uppercase"
          >
            Request A Demo
          </a>
        </nav>

        {/* زر القائمة للجوال (Hamburger Menu) */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white md:hidden hover:bg-white/5 transition-colors"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>
    </header>
  );
}