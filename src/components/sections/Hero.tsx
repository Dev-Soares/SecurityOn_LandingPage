import {
  ArrowRight,
} from "@phosphor-icons/react";
import { PhoneMockup } from "../ui/PhoneMockup";
import { useTheme } from "../../hooks/useTheme";

export function Hero() {
  const { dark } = useTheme();

  return (
    <section className={`relative min-h-screen flex items-center overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 lg:px-10 xl:px-6 ${dark ? "" : "bg-gray-50"}`}>
      {/* ── Background effects ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className={`absolute -top-[40%] -right-[20%] w-[70vw] h-[70vw] rounded-full blur-[120px] ${dark ? "bg-blue-600/[0.07]" : "bg-blue-400/[0.08]"}`} />
        <div className={`absolute -bottom-[30%] -left-[15%] w-[50vw] h-[50vw] rounded-full blur-[100px] ${dark ? "bg-blue-500/[0.04]" : "bg-blue-300/[0.06]"}`} />
        <div
          className={`absolute inset-0 ${dark ? "opacity-[0.03]" : "opacity-[0.04]"}`}
          style={{
            backgroundImage: dark
              ? `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`
              : `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 xl:gap-20 items-center">
          {/* ── Left column: Text ── */}
          <div className="flex flex-col gap-6">

            {/* Headline */}
            <h1 className={`font-syne font-extrabold text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-5xl 2xl:text-6xl leading-[1.05] tracking-tight ${dark ? "text-white" : "text-gray-900"}`}>
              Proteja sua comunidade contra{" "}
              <span className={`bg-gradient-to-r bg-clip-text text-transparent ${dark ? "from-blue-400 via-blue-300 to-blue-500" : "from-blue-600 via-blue-500 to-blue-700"}`}>
                golpes e fraudes
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`text-base leading-relaxed max-w-lg ${dark ? "text-gray-400" : "text-gray-600"}`}>
              Denuncie ameaças, compartilhe  e acesse conteúdo educativo
              tudo em uma plataforma colaborativa feita para quem se importa
              com segurança.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#"
                className="group flex items-center gap-2.5 px-6 py-3 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-xl shadow-blue-600/25 hover:shadow-blue-700/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                Comece gratuitamente
                <ArrowRight
                  size={18}
                  weight="bold"
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                />
              </a>
            </div>
          </div>

          {/* ── Right column ── */}
          <PhoneMockup href="https://securityon.vercel.app/complaint"/>
        </div>
      </div>
    </section>
  );
}
