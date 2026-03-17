import {
  ChartLineUp,
  DeviceMobile,
  Envelope,
  ShoppingCart,
  Bank,
  WifiHigh,
} from "@phosphor-icons/react";
import { useTheme } from "../../hooks/useTheme";

const platformStats = [
  { name: "WhatsApp", icon: DeviceMobile, percentage: 31 },
  { name: "E-mail", icon: Envelope, percentage: 27 },
  { name: "E-commerce", icon: ShoppingCart, percentage: 19 },
  { name: "Redes Sociais", icon: WifiHigh, percentage: 14 },
  { name: "PIX / Bancos", icon: Bank, percentage: 9 },
];

export function ScamData() {
  const { dark } = useTheme();

  return (
    <section id="scam-data" className={`relative py-24 sm:py-32 overflow-hidden ${dark ? "" : "bg-white"}`}>
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className={`absolute top-[10%] right-[5%] w-[40vw] h-[40vw] rounded-full blur-[140px] ${dark ? "bg-red-600/4" : "bg-red-200/15"}`} />
        <div className={`absolute bottom-[10%] left-[5%] w-[35vw] h-[35vw] rounded-full blur-[120px] ${dark ? "bg-amber-600/3" : "bg-amber-200/12"}`} />
        <div
          className={`absolute inset-0 ${dark ? "opacity-[0.02]" : "opacity-[0.03]"}`}
          style={{
            backgroundImage: dark
              ? `radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)`
              : `radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Section header ── */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className={`font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight mb-5 ${dark ? "text-white" : "text-gray-900"}`}>
            O cenário de fraudes no Brasil
          </h2>
          <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${dark ? "text-gray-400" : "text-gray-600"}`}>
            Milhões de brasileiros são vítimas de golpes todos os anos. Conhecer os números é o primeiro passo para se proteger.
          </p>
        </div>

        {/* ── Contrast block: speed of scam vs recovery ── */}
        <div className="grid md:grid-cols-2 gap-0 mb-20 sm:mb-28">
          {/* Left — the attack */}
          <div className={`p-8 sm:p-12 lg:p-16 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none ${dark ? "bg-blue-500/8" : "bg-blue-50"}`}>
            <p className={`text-xs font-semibold uppercase tracking-widest mb-6 ${dark ? "text-blue-400/70" : "text-blue-500"}`}>
              Tempo para cair num golpe
            </p>
            <div className={`font-syne font-extrabold text-7xl sm:text-8xl lg:text-9xl tracking-tighter leading-none mb-4 ${dark ? "text-blue-400" : "text-blue-600"}`}>
              3 min
            </div>
            <p className={`text-sm max-w-xs leading-relaxed ${dark ? "text-gray-400" : "text-gray-600"}`}>
              Um clique num link falso. Uma transferência por impulso. É tudo que o golpista precisa.
            </p>
          </div>

          {/* Right — the recovery */}
          <div className={`p-8 sm:p-12 lg:p-16 rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none ${dark ? "bg-white/3" : "bg-gray-50"}`}>
            <p className={`text-xs font-semibold uppercase tracking-widest mb-6 ${dark ? "text-gray-500" : "text-gray-400"}`}>
              Tempo para recuperar o dinheiro
            </p>
            <div className={`font-syne font-extrabold text-7xl sm:text-8xl lg:text-9xl tracking-tighter leading-none mb-4 ${dark ? "text-white" : "text-gray-900"}`}>
              6 meses
            </div>
            <p className={`text-sm max-w-xs leading-relaxed ${dark ? "text-gray-400" : "text-gray-600"}`}>
              Boletim de ocorrência, banco, processo judicial. E mesmo assim, apenas 5% das vítimas recuperam o valor total.
            </p>
          </div>
        </div>

        {/* ── Inline stats ── */}
        <div className={`flex flex-wrap items-baseline justify-center gap-x-10 gap-y-4 mb-20 sm:mb-28 text-center ${dark ? "text-gray-500" : "text-gray-400"}`}>
          {[
            { value: "2.8M", label: "tentativas/mês" },
            { value: "R$ 2.5 bi", label: "prejuízo anual" },
            { value: "208%", label: "crescimento desde 2019" },
          ].map((s, i) => (
            <span key={s.label} className="flex items-baseline gap-2">
              {i > 0 && <span className={`hidden sm:inline ${dark ? "text-gray-700" : "text-gray-300"}`}>/</span>}
              <span className={`font-syne font-extrabold text-3xl sm:text-4xl tracking-tight ${dark ? "text-blue-400" : "text-blue-600"}`}>{s.value}</span>
              <span className={`text-sm ${dark ? "text-gray-300" : "text-gray-900"}`}>{s.label}</span>
            </span>
          ))}
        </div>

        {/* ── Platform breakdown bar ── */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <ChartLineUp size={20} weight="bold" className={dark ? "text-gray-400" : "text-gray-600"} />
            <h3 className={`text-lg font-bold ${dark ? "text-white" : "text-gray-900"}`}>
              Onde os golpes acontecem
            </h3>
          </div>

          <div className="flex flex-col gap-4">
            {platformStats.map((p) => (
              <div key={p.name} className="flex items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-2.5 w-28 sm:w-36 shrink-0">
                  <p.icon size={18} weight="duotone" className={dark ? "text-gray-400" : "text-gray-500"} />
                  <span className={`text-xs sm:text-sm font-medium ${dark ? "text-gray-300" : "text-gray-700"}`}>{p.name}</span>
                </div>
                <div className={`flex-1 h-8 rounded-full overflow-hidden relative ${dark ? "bg-gray-800" : "bg-gray-100"}`}>
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${dark ? "bg-linear-to-r from-blue-600 to-blue-400" : "bg-linear-to-r from-blue-500 to-blue-400"}`}
                    style={{ width: `${p.percentage}%`, minWidth: "2rem" }}
                  />
                </div>
                <span className={`text-xs font-bold shrink-0 w-8 text-right ${dark ? "text-gray-300" : "text-gray-700"}`}>{p.percentage}%</span>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
