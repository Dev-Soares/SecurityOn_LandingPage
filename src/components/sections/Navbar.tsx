import { useState } from "react";
import { List, X, Sun, Moon } from "@phosphor-icons/react";
import { useTheme } from "../../hooks/useTheme";

const navLinks = [
  { label: "Funcionalidades", href: "#features" },
  { label: "Golpes Online", href: "#scam-data" },
  { label: "Como funciona", href: "#how-it-works" },
  { label: "Comunidade", href: "#stats" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { dark, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Glassmorphism bar */}
      <div
        className={`backdrop-blur-xl border-b transition-colors duration-300 ${
          dark
            ? "bg-[#030712]/70 border-white/[0.06]"
            : "bg-white/70 border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1 group">
            <img src={dark ? "/OnSecurityLight.png" : "/OnSecurityDark.png"} alt="SecurityOn logo" className="w-9 h-9" />
            <span className={`text-lg font-bold tracking-tight ${dark ? "text-white" : "text-blue-600"}`}>SecurityOn</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm transition-all duration-200 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-0 after:bg-blue-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-2/3 ${
                  dark
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Alternar tema"
              className={`p-2 rounded-lg transition-all duration-300 cursor-pointer hover:rotate-[25deg] hover:scale-110 ${
                dark
                  ? "text-gray-400 hover:text-amber-300 hover:bg-amber-400/[0.08]"
                  : "text-gray-500 hover:text-blue-500 hover:bg-blue-500/[0.08]"
              }`}
            >
              {dark ? <Moon size={20} weight="bold" /> : <Sun size={20} weight="bold" />}
            </button>
            <a
              href="https://securityon.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className={`relative px-4 py-2 text-sm transition-all duration-200 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-0 after:bg-blue-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-2/3 ${
                dark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Login
            </a>
            <a
              href="https://securityon.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg shadow-blue-600/25 hover:shadow-blue-700/40 transition-all duration-200 hover:-translate-y-0.5"
            >
              Comece agora
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 transition-colors ${
              dark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"
            }`}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full backdrop-blur-xl border-b transition-all duration-300 ${
          dark
            ? "bg-[#030712]/90 border-white/[0.06]"
            : "bg-white/90 border-gray-200"
        } ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-lg transition-all duration-200 ${
                dark
                  ? "text-gray-300 hover:text-white hover:bg-white/[0.05]"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className={`mt-3 pt-3 border-t flex flex-col gap-2 ${dark ? "border-white/[0.06]" : "border-gray-200"}`}>
            <button
              onClick={toggleTheme}
              className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors cursor-pointer ${
                dark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {dark ? <Moon size={20} weight="bold" /> : <Sun size={20} weight="bold" />}
              <span>{dark ? "Modo escuro" : "Modo claro"}</span>
            </button>
            <a
              href="https://securityon.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-3 text-center rounded-lg transition-colors ${
                dark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Login
            </a>
            <a
              href="https://securityon.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-center font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-all duration-200"
            >
              Comece agora
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
