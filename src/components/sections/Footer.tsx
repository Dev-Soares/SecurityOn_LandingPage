import { GithubLogo, BookOpen } from "@phosphor-icons/react";
import { useTheme } from "../../hooks/useTheme";
import type { ReactNode } from "react";

type FooterLink = { label: string; href: string; icon?: ReactNode };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Produto",
    links: [
      { label: "Funcionalidades", href: "#features" },
      { label: "Golpes Online", href: "#scam-data" },
      { label: "Comunidade", href: "https://securityon.vercel.app" },
    ],
  },
  {
    title: "Acesso",
    links: [
      { label: "SecurityOn", href: "https://securityon.vercel.app" },
      { label: "Documentação", href: "https://github.com", icon: <BookOpen size={14} weight="bold" /> },
    ],
  },
  {
    title: "Repositórios",
    links: [
      { label: "Frontend", href: "https://github.com/Dev-Soares/SecurityOn_Frontend", icon: <GithubLogo size={14} weight="bold" /> },
      { label: "Backend", href: "https://github.com/Dev-Soares/SecurityOn_Backend", icon: <GithubLogo size={14} weight="bold" /> },
    ],
  },
];

export function Footer() {
  const { dark } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer
      className={`relative py-12 sm:py-16 ${
        dark ? "border-t border-white/[0.06]" : "border-t border-gray-200 bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Top: logo + columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6 mb-10">
          {/* Logo column */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={dark ? "/OnSecurityLight.png" : "/OnSecurityDark.png"}
                alt="SecurityOn logo"
                className="w-9 h-9"
              />
              <span
                className={`text-lg font-bold tracking-tight ${
                  dark ? "text-white" : "text-gray-900"
                }`}
              >
                SecurityOn
              </span>
            </div>
            <p className={`text-sm leading-relaxed max-w-[200px] ${dark ? "text-gray-500" : "text-gray-500"}`}>
              Protegendo comunidades brasileiras contra golpes e fraudes.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4
                className={`text-xs font-semibold uppercase tracking-[0.15em] mb-4 ${
                  dark ? "text-gray-400" : "text-gray-900"
                }`}
              >
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`inline-flex items-center gap-1.5 text-sm transition-colors duration-200 ${
                        dark
                          ? "text-gray-500 hover:text-white"
                          : "text-gray-500 hover:text-gray-900"
                      }`}
                    >
                      {link.icon}
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className={`h-px mb-8 ${dark ? "bg-white/[0.06]" : "bg-gray-200"}`} />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className={`text-xs ${dark ? "text-gray-600" : "text-gray-400"}`}>
            {year} SecurityOn. Todos os direitos reservados.
          </p>
          <p className={`text-xs ${dark ? "text-gray-700" : "text-gray-300"}`}>
            Feito no Brasil para proteger brasileiros.
          </p>
        </div>
      </div>
    </footer>
  );
}
