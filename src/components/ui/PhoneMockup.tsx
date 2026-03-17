import {
  Sun,
  Moon,
  FunnelSimple,
  UsersThree,
  Article,
  Flag,
  ArrowUpRight,
  Plus,
} from "@phosphor-icons/react";
import { useTheme } from "../../hooks/useTheme";

const filters = [
  { label: "Todos", active: true },
  { label: "Aviso", active: false },
  { label: "Cuidado", active: false },
  { label: "Perigo", active: false },
  { label: "Crítico", active: false },
];

const complaints = [
  {
    level: "Aviso",
    badgeDark: "bg-yellow-900/30 text-yellow-400",
    badgeLight: "bg-yellow-100 text-yellow-700",
    bar: "bg-yellow-400",
    source: "Loja Online X",
    date: "10 de jan. de 2024",
    title: "Tentativa de Golpe em Loja Online",
    desc: "Recebi e-mail suspeito oferecendo desconto de 90% em produtos conhecidos. O site é muito parecido...",
    link: "Ver site",
  },
  {
    level: "Cuidado",
    badgeDark: "bg-orange-900/30 text-orange-400",
    badgeLight: "bg-orange-100 text-orange-700",
    bar: "bg-orange-500",
    source: "Empresa Desconhecida LTDA",
    date: "09 de jan. de 2024",
    title: "Cobrança Indevida no Cartão",
    desc: "Apareceu uma cobrança que não reconheço na fatura do cartão. Empresa com nome estranho e...",
    link: null,
  },
];

const navTabs = [
  { label: "Comunidade", icon: UsersThree, active: false },
  { label: "Artigos", icon: Article, active: false },
  { label: "Denúncias", icon: Flag, active: true },
];

interface PhoneMockupProps {
  href?: string
}

export function PhoneMockup({ href }: PhoneMockupProps) {
  const { dark } = useTheme();

  return (
    <div
      className="relative flex items-center justify-center lg:justify-end"
      style={{ perspective: "1000px" }}
    >
      {/* Glow behind */}
      <div className="absolute w-[70%] h-[80%] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />

      {/* Phone with 3D tilt */}
      <div
        className="relative w-[295px] sm:w-[320px] transition-transform duration-500 hover:!transform-none"
        style={{
          transform: "rotateY(-8deg) rotateX(3deg) rotateZ(1deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Phone body */}
        <div
          className={`relative rounded-[2.8rem] p-[5px] ${dark
              ? "bg-gradient-to-b from-[#1a1a2e] via-[#16162a] to-[#111827] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.08)] ring-1 ring-white/[0.05]"
              : "bg-gradient-to-b from-[#1a1a2e] via-[#16162a] to-[#111827] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5),0_0_0_1px_rgba(0,0,0,0.15)]"
            }`}
        >
          {/* Side buttons */}
          <div className={`absolute -left-[2px] top-[100px] w-[2px] h-8 rounded-l ${dark ? "bg-gray-700" : "bg-gray-400"}`} />
          <div className={`absolute -left-[2px] top-[140px] w-[2px] h-8 rounded-l ${dark ? "bg-gray-700" : "bg-gray-400"}`} />
          <div className={`absolute -right-[2px] top-[120px] w-[2px] h-12 rounded-r ${dark ? "bg-gray-700" : "bg-gray-400"}`} />

          {/* Screen */}
          <a href={href} target="_blank" rel="noopener noreferrer">
            <div className={`relative rounded-[2.4rem] overflow-hidden ${dark ? "bg-[#030712]" : "bg-white"}`}>
              {/* Dynamic Island */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-full z-20 flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#0a0a0a] ring-1 ring-gray-800/50" />
                <div className="w-[5px] h-[5px] rounded-full bg-[#1a1a2e] ring-1 ring-gray-800/30" />
              </div>

              {/* ── App UI ── */}
              <div className="pt-12 pb-0">
                {/* Top bar — matches app Header */}
                <div className={`flex items-center justify-between px-5 mb-5 py-1 border-b pb-3 ${dark ? "border-white/[0.06]" : "border-gray-100"}`}>
                  <div className="flex items-center gap-1">
                    <img src={dark ? "/OnSecurityLight.png" : "/OnSecurityDark.png"} alt="SecurityOn logo" className="w-10 h-10" />
                    <span className={`text-[15px] font-bold tracking-tight ${dark ? "text-white" : "text-blue-600"}`}>SecurityOn</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="p-2 rounded-xl">
                      {dark ? (
                        <Moon size={18} weight="bold" className="text-gray-400" />
                      ) : (
                        <Sun size={18} weight="bold" className="text-amber-400" />
                      )}
                    </div>
                    <img src="/avatar.png" alt="User avatar" className={`w-7 h-7 rounded-full object-cover border ${dark ? "border-gray-700" : "border-gray-200"}`} />
                  </div>
                </div>

                {/* Page title */}
                <div className="px-5 mb-4">
                  <h3 className={`text-[16px] font-bold leading-tight mb-1 ${dark ? "text-white" : "text-gray-900"}`}>
                    Denúncias da Comunidade
                  </h3>
                  <p className={`text-[10px] leading-relaxed ${dark ? "text-gray-500" : "text-gray-500"}`}>
                    Ajude a proteger outros usuários reportando golpes e fraudes
                  </p>
                </div>

                {/* Filters */}
                <div className="flex items-center gap-1.5 px-5 mb-1.5 flex-wrap">
                  {filters.map((f) => (
                    <span
                      key={f.label}
                      className={`px-3 py-1.5 rounded-full text-[10px] font-semibold border transition-colors ${f.active
                          ? "bg-blue-600 text-white border-blue-600"
                          : dark
                            ? "bg-transparent text-gray-400 border-gray-700"
                            : "bg-white text-gray-700 border-gray-300"
                        }`}
                    >
                      {f.label}
                    </span>
                  ))}
                </div>

                {/* Count */}
                <div className="px-5 mb-3 flex items-center gap-1.5">
                  <FunnelSimple size={10} className={dark ? "text-gray-600" : "text-gray-400"} />
                  <span className={`text-[9px] ${dark ? "text-gray-600" : "text-gray-400"}`}>4 denúncias</span>
                </div>

                {/* Complaint cards */}
                <div className="px-4 flex flex-col gap-2.5">
                  {complaints.map((c) => (
                    <article
                      key={c.title}
                      className={`flex flex-row rounded-2xl border overflow-hidden ${dark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
                        }`}
                    >
                      {/* Left accent bar */}
                      <div className={`w-1 shrink-0 self-stretch ${c.bar}`} />

                      <div className="p-3.5 flex flex-col gap-1.5 flex-1 min-w-0">
                        {/* Header row */}
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-[8px] font-semibold px-2 py-0.5 rounded-full ${dark ? c.badgeDark : c.badgeLight}`}>
                            {c.level}
                          </span>
                          {c.source && (
                            <span className={`text-[9px] ${dark ? "text-gray-400" : "text-gray-500"}`}>{c.source}</span>
                          )}
                          <span className={`text-[8px] ml-auto ${dark ? "text-gray-500" : "text-gray-400"}`}>{c.date}</span>
                        </div>

                        {/* Title */}
                        <h4 className={`text-[11px] font-bold leading-snug ${dark ? "text-white" : "text-gray-900"}`}>
                          {c.title}
                        </h4>

                        {/* Description */}
                        <p className={`text-[10px] leading-relaxed line-clamp-2 ${dark ? "text-gray-300" : "text-gray-600"}`}>
                          {c.desc}
                        </p>

                        {/* Link */}
                        {c.link && (
                          <div className="flex items-center gap-1 mt-0.5">
                            <ArrowUpRight size={10} weight="bold" className="text-blue-400" />
                            <span className="text-[9px] text-blue-400 font-medium">Ver site</span>
                          </div>
                        )}
                      </div>
                    </article>
                  ))}
                </div>

                {/* FAB */}
                <div className="flex justify-end px-4 mt-2">
                  <div className="flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 rounded-full shadow-lg shadow-blue-600/30">
                    <Plus size={14} weight="bold" className="text-white" />
                    <span className="text-white text-[11px] font-semibold">Denunciar</span>
                  </div>
                </div>

                {/* Bottom nav */}
                <div className={`flex items-center justify-around px-2 py-3 mt-2 border-t ${dark ? "border-white/[0.06]" : "border-gray-100"}`}>
                  {navTabs.map((tab) => (
                    <div
                      key={tab.label}
                      className={`relative flex-1 flex flex-col items-center gap-1 ${tab.active
                          ? dark ? "text-white" : "text-gray-900"
                          : dark ? "text-gray-600" : "text-gray-400"
                        }`}
                    >
                      {tab.active && (
                        <div className={`absolute -top-3 left-0 right-0 h-[3px] rounded-full ${dark ? "bg-white" : "bg-gray-900"}`} />
                      )}
                      <tab.icon size={20} weight={tab.active ? "fill" : "regular"} />
                      <span className="text-[8px] font-medium">{tab.label}</span>
                    </div>
                  ))}
                </div>

                {/* Home indicator */}
                <div className="flex justify-center pb-2 pt-0.5">
                  <div className={`w-[100px] h-[4px] rounded-full ${dark ? "bg-gray-700" : "bg-gray-300"}`} />
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Phone shadow */}
        <div className="absolute -bottom-6 left-[5%] right-[15%] h-6 bg-black/30 blur-xl rounded-full" />
      </div>
    </div>
  );
}
