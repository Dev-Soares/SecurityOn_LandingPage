import { useTheme } from "../../hooks/useTheme";

export function ScamGrowthChart() {
  const { dark } = useTheme();

  const victimPct = 71;
  const safePct = 29;

  const gradient = dark
    ? `conic-gradient(from 180deg, #3b82f6 0%, #60a5fa ${victimPct}%, #1f2937 ${victimPct}%, #1f2937 100%)`
    : `conic-gradient(from 180deg, #3b82f6 0%, #60a5fa ${victimPct}%, #e5e7eb ${victimPct}%, #e5e7eb 100%)`;

  return (
    <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-10 w-full max-w-md">
      {/* Donut */}
      <div className="relative shrink-0">
        <div
          className="w-36 h-36 sm:w-44 sm:h-44 rounded-full"
          style={{ background: gradient }}
        />
        <div
          className={`absolute inset-0 m-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full flex flex-col items-center justify-center ${
            dark ? "bg-[#030712]" : "bg-white"
          }`}
        >
          <span
            className={`font-syne font-extrabold text-2xl sm:text-3xl tracking-tight leading-none ${
              dark ? "text-blue-400" : "text-blue-600"
            }`}
          >
            {victimPct}%
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${dark ? "bg-blue-400" : "bg-blue-500"}`} />
          <div>
            <span className={`text-sm font-bold block ${dark ? "text-white" : "text-gray-900"}`}>
              {victimPct}%
            </span>
            <span className={`text-xs ${dark ? "text-gray-400" : "text-gray-500"}`}>
              Já caíram em um golpe online
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${dark ? "bg-gray-700" : "bg-gray-300"}`} />
          <div>
            <span className={`text-sm font-bold block ${dark ? "text-white" : "text-gray-900"}`}>
              {safePct}%
            </span>
            <span className={`text-xs ${dark ? "text-gray-400" : "text-gray-500"}`}>
              Nunca caíram
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
