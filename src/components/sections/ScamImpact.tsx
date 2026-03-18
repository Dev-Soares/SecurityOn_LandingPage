import { useTheme } from "../../hooks/useTheme";
import { ScamGrowthChart } from "../ui/ScamGrowthChart";

export function ScamImpact() {
  const { dark } = useTheme();

  return (
    <section className={`relative py-16 sm:py-24 overflow-hidden ${dark ? "" : "bg-white"}`}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className={`absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full blur-[160px] ${
            dark ? "bg-blue-600/[0.05]" : "bg-blue-200/[0.12]"
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: provocative statement */}
          <div>
            <p
              className={`text-xs font-semibold uppercase tracking-[0.2em] mb-4 ${
                dark ? "text-blue-400/70" : "text-blue-600"
              }`}
            >
              Enquanto você lê isso
            </p>
            <h2
              className={`font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight mb-5 ${
                dark ? "text-white" : "text-gray-900"
              }`}
            >
              <span
                className={`text-5xl sm:text-6xl lg:text-7xl tracking-tighter block mb-2 ${
                  dark ? "text-blue-400" : "text-blue-600"
                }`}
              >
                12
              </span>
              pessoas caíram em um golpe no Brasil
            </h2>
            <p
              className={`text-sm sm:text-base leading-relaxed max-w-md ${
                dark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              A cada minuto, novas vítimas. A diferença entre ser a próxima
              ou estar preparada é uma comunidade que alerta antes que aconteça.
            </p>
          </div>

          {/* Right: chart */}
          <div className="flex flex-col gap-10">
            <ScamGrowthChart />
          </div>
        </div>
      </div>
    </section>
  );
}
