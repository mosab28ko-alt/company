import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; 
import { NAV_LINKS } from "../constants";
import logo from "../../public/logo.png";

const NavItem = ({ href, label, onClick }) => {
  const navigate = useNavigate();
  const location = useLocation(); // لمعرفة الصفحة الحالية
  const isWorkPageLabel = label === "Our Work";

  const handleNavClick = (e) => {
    onClick(); 
    //الافتراضي يعمل
    if (isWorkPageLabel) return;

    // إذا كنا في صفحة العمل (/work) ونريد الذهاب لسكشن في الرئيسية (مثل #staff)
    if (location.pathname !== "/") {
      e.preventDefault(); // منع السلوك الافتراضي
      navigate("/" + href); // اذهب للرئيسية مع إضافة الـ Hash
    }
  };

  if (isWorkPageLabel) {
    return (
      <Link
        to="/work"
        onClick={onClick}
        className="relative px-4 py-2 text-sm font-bold tracking-wide transition-all duration-300 rounded-xl text-slate-300 hover:bg-purple-500/10 hover:text-purple-400 group"
      >
        {label}
        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
      </Link>
    );
  }

  return (
    <a
      href={href}
      onClick={handleNavClick}
      className="relative px-4 py-2 text-sm font-bold tracking-wide transition-all duration-300 rounded-xl text-slate-300 hover:bg-purple-500/10 hover:text-purple-400 group"
    >
      {label}
      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-full" />
    </a>
  );
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const handleLinkClick = () => setOpen(false);

  return (
<header className="sticky z-50 px-6 py-4 border shadow-2xl top-4 rounded-2xl border-white/10 bg-black/60 backdrop-blur-xl">
  <div className="flex items-center justify-between gap-4">
    <Link to="/" onClick={handleLinkClick} className="flex items-center gap-3 cursor-pointer group">
      <div className="relative h-10 w-[160px] overflow-hidden rounded-xl p-[1px] transition-all duration-500 hover:border-purple-500/50">
        <div className="relative flex h-full w-full items-center justify-center rounded-[10px] bg-transparent overflow-hidden">
          <img 
            src={logo} 
            alt="Code Nexus AI Logo" 
            className="h-[150px] w-full object-contain transition-transform duration-700 group-hover:scale-110" 
          />
        </div>
      </div>
    </Link>

        <nav className={`${open ? "flex animate-in fade-in slide-in-from-top-5 duration-300" : "hidden"} absolute left-0 right-0 top-20 flex-col gap-3 rounded-2xl border border-white/10 bg-slate-950/95 p-6 shadow-2xl md:static md:flex md:flex-row md:items-center md:gap-2 md:border-none md:bg-transparent md:p-0 md:shadow-none`}>
          {NAV_LINKS.map((link) => (
            <NavItem key={link.label} href={link.href} label={link.label} onClick={handleLinkClick} />
          ))}
          
          <div className="h-8 w-[1px] bg-white/10 mx-2 hidden md:block" />

          <a href="#contact" onClick={handleLinkClick} className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-2.5 text-xs font-black tracking-widest text-white transition-all hover:scale-105 active:scale-95 uppercase shadow-[0_0_20px_rgba(147,51,234,0.3)]">
            <span className="relative z-10">CHAT WITH US</span>
            <div className="absolute inset-0 transition-transform duration-500 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full" />
          </a>
        </nav>

        <button className="flex items-center justify-center w-10 h-10 text-white transition-colors border rounded-xl border-white/10 md:hidden hover:bg-white/5" onClick={() => setOpen((prev) => !prev)}>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>
    </header>
  );
}