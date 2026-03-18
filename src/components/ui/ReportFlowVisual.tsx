import { MagnifyingGlass, FunnelSimple, Megaphone } from "@phosphor-icons/react";
import { useTheme } from "../../hooks/useTheme";

const steps = [
  {
    icon: MagnifyingGlass,
    label: "Identifique",
    desc: "Encontrou algo suspeito? Inicie uma denúncia em segundos.",
    accent: "bg-yellow-400/10 text-yellow-400",
    accentLight: "bg-yellow-50 text-yellow-600",
    dot: "bg-yellow-400",
  },
  {
    icon: FunnelSimple,
    label: "Classifique",
    desc: "Defina o nível de perigo: aviso, cuidado, perigo ou crítico.",
    accent: "bg-orange-400/10 text-orange-400",
    accentLight: "bg-orange-50 text-orange-600",
    dot: "bg-orange-500",
  },
  {
    icon: Megaphone,
    label: "Alerte",
    desc: "Sua comunidade é notificada em tempo real e fica protegida.",
    accent: "bg-red-400/10 text-red-400",
    accentLight: "bg-red-50 text-red-600",
    dot: "bg-red-500",
  },
];

export function ReportFlowVisual() {
  const { dark } = useTheme();

  return (
    <div className="flex flex-col justify-around w-full h-full mt-20">
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-start gap-4">
          {/* Step connector */}
          <div className="flex flex-col items-center shrink-0">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                dark ? step.accent : step.accentLight
              }`}
            >
              <step.icon size={20} weight="bold" />
            </div>
            {i < steps.length - 1 && (
              <div
                className={`w-px h-8 mt-1.5 ${
                  dark ? "bg-white/[0.06]" : "bg-gray-200"
                }`}
              />
            )}
          </div>

          {/* Content */}
          <div className="pt-1">
            <p
              className={`text-sm font-bold mb-0.5 ${
                dark ? "text-white" : "text-gray-900"
              }`}
            >
              {step.label}
            </p>
            <p
              className={`text-xs leading-relaxed ${
                dark ? "text-gray-500" : "text-gray-500"
              }`}
            >
              {step.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
