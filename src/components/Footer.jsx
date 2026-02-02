import { NAV_LINKS, COMPANY_NAME } from "../constants";

/**
 * Footer Component
 * Displays company branding, navigation links, and copyright
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-slate-400">
      {/* Company Name */}
      <div className="font-semibold text-slate-100">{COMPANY_NAME}</div>

      {/* Footer Navigation Links */}
      <div className="flex flex-wrap items-center gap-3">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-lg px-2 py-1 transition hover:bg-white/5 hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p>© {currentYear} {COMPANY_NAME}. All rights reserved.</p>
    </footer>
  );
}
