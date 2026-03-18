import { useTheme } from "../../hooks/useTheme";

export function ScamTimeContrast() {
  const { dark } = useTheme();

  return (
    <div className="grid md:grid-cols-2 gap-0">
      {/* Left — the attack */}
      <div className={`p-6 sm:p-8 lg:p-10 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none ${dark ? "bg-blue-500/8" : "bg-blue-50"}`}>
        <p className={`text-xs font-semibold uppercase tracking-widest mb-6 ${dark ? "text-blue-400/70" : "text-blue-500"}`}>
          Tempo para cair num golpe
        </p>
        <div className={`font-syne font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tighter leading-none mb-4 ${dark ? "text-blue-400" : "text-blue-600"}`}>
          3 min
        </div>
        <p className={`text-sm max-w-xs leading-relaxed ${dark ? "text-gray-400" : "text-gray-600"}`}>
          Um clique num link falso. Uma transferência por impulso. É tudo que o golpista precisa.
        </p>
      </div>

      {/* Right — the recovery */}
      <div className={`p-6 sm:p-8 lg:p-10 rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none ${dark ? "bg-white/3" : "bg-gray-50"}`}>
        <p className={`text-xs font-semibold uppercase tracking-widest mb-6 ${dark ? "text-gray-500" : "text-gray-400"}`}>
          Tempo para recuperar o dinheiro
        </p>
        <div className={`font-syne font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tighter leading-none mb-4 ${dark ? "text-white" : "text-gray-900"}`}>
          6 meses
        </div>
        <p className={`text-sm max-w-xs leading-relaxed ${dark ? "text-gray-400" : "text-gray-600"}`}>
          Boletim de ocorrência, banco, processo judicial. E mesmo assim, apenas 5% das vítimas recuperam o valor total.
        </p>
      </div>
    </div>
  );
}
