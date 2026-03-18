import { useTheme } from "../../hooks/useTheme";
import { ScamTimeContrast } from "../ui/ScamTimeContrast";
import { PlatformBreakdown } from "../ui/PlatformBreakdown";

export function ScamData() {
  const { dark } = useTheme();

  return (
    <section id="scam-data" className={`relative py-16 sm:py-24 overflow-hidden ${dark ? "" : "bg-white"}`}>
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className={`absolute top-[10%] right-[5%] w-[40vw] h-[40vw] rounded-full blur-[140px] ${dark ? "bg-red-600/4" : "bg-red-200/15"}`} />
        <div className={`absolute bottom-[10%] left-[5%] w-[35vw] h-[35vw] rounded-full blur-[120px] ${dark ? "bg-blue-600/3" : "bg-blue-200/12"}`} />
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
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`font-syne font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight mb-4 ${dark ? "text-white" : "text-gray-900"}`}>
            O cenário de fraudes no Brasil
          </h2>
          <p className={`text-base max-w-2xl mx-auto leading-relaxed ${dark ? "text-gray-400" : "text-gray-600"}`}>
            Milhões de brasileiros são vítimas de golpes todos os anos. Conhecer os números é o primeiro passo para se proteger.
          </p>
        </div>

        {/* Contrast block */}
        <div className="mb-14 sm:mb-20">
          <ScamTimeContrast />
        </div>

        {/* Inline stats */}
        <div className={`flex flex-wrap items-baseline justify-center gap-x-10 gap-y-4 mb-14 sm:mb-20 text-center ${dark ? "text-gray-500" : "text-gray-400"}`}>
          {[
            { value: "2.8M", label: "tentativas/mês" },
            { value: "R$ 2.5 bi", label: "prejuízo anual" },
            { value: "208%", label: "crescimento desde 2019" },
          ].map((s, i) => (
            <span key={s.label} className="flex items-baseline gap-2">
              {i > 0 && <span className={`hidden sm:inline ${dark ? "text-gray-700" : "text-gray-300"}`}>/</span>}
              <span className={`font-syne font-extrabold text-2xl sm:text-3xl tracking-tight ${dark ? "text-blue-400" : "text-blue-600"}`}>{s.value}</span>
              <span className={`text-sm ${dark ? "text-gray-300" : "text-gray-900"}`}>{s.label}</span>
            </span>
          ))}
        </div>

        {/* Platform breakdown */}
        <div className="mb-12 sm:mb-16">
          <PlatformBreakdown />
        </div>
      </div>
    </section>
  );
}
