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

export function PlatformBreakdown() {
  const { dark } = useTheme();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-5">
        <ChartLineUp size={18} weight="bold" className={dark ? "text-gray-400" : "text-gray-600"} />
        <h3 className={`text-base font-bold ${dark ? "text-white" : "text-gray-900"}`}>
          Onde os golpes acontecem
        </h3>
      </div>

      <div className="flex flex-col gap-3.5">
        {platformStats.map((p) => (
          <div key={p.name} className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2 w-28 sm:w-34 shrink-0">
              <p.icon size={16} weight="duotone" className={dark ? "text-gray-400" : "text-gray-500"} />
              <span className={`text-xs sm:text-sm font-medium ${dark ? "text-gray-300" : "text-gray-700"}`}>{p.name}</span>
            </div>
            <div className={`flex-1 h-7 rounded-full overflow-hidden relative ${dark ? "bg-gray-800" : "bg-gray-100"}`}>
              <div
                className={`h-full rounded-full transition-all duration-700 ${dark ? "bg-linear-to-r from-blue-600 to-blue-400" : "bg-linear-to-r from-blue-500 to-blue-400"}`}
                style={{ width: `${p.percentage}%`, minWidth: "1.5rem" }}
              />
            </div>
            <span className={`text-xs font-bold shrink-0 w-8 text-right ${dark ? "text-gray-300" : "text-gray-700"}`}>{p.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
