import { useTheme } from "../../hooks/useTheme";
import { FeatureCard } from "../ui/FeatureCard";
import { ReportFlowVisual } from "../ui/ReportFlowVisual";
import { CommunityVisual } from "../ui/CommunityVisual";
import { ArticlesVisual } from "../ui/ArticlesVisual";

export function Features() {
  const { dark } = useTheme();

  return (
    <section
      id="features"
      className={`relative py-16 sm:py-24 overflow-hidden ${dark ? "" : "bg-gray-50"}`}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className={`absolute top-[20%] left-[10%] w-[45vw] h-[45vw] rounded-full blur-[160px] ${
            dark ? "bg-blue-600/[0.04]" : "bg-blue-200/[0.12]"
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-12 sm:mb-16">
          <p
            className={`text-base font-semibold tracking-wide mb-4 ${
              dark ? "text-blue-400/70" : "text-blue-600"
            }`}
          >
            Como o SecurityOn te ensina a se proteger
          </p>
          <h2
            className={`font-syne font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight max-w-2xl ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            Ferramentas feitas para quem{" "}
            <span className={dark ? "text-blue-400" : "text-blue-600"}>
              não aceita ser vítima
            </span>
          </h2>
        </div>

        {/* Asymmetric bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          {/* Card 01: Denúncias — large */}
          <div className="lg:col-span-7">
            <FeatureCard
              num="01"
              title="Reporte golpes de forma simples"
              description="Classifique por nível de perigo, anexe evidências e alerte sua comunidade em tempo real. Cada denúncia fortalece a rede de proteção."

              className="h-full"
            >
              <ReportFlowVisual />
            </FeatureCard>
          </div>

          {/* Right column: 2 stacked cards */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
            {/* Card 02: Comunidade */}
            <FeatureCard
              num="02"
              title="Aprenda com quem protege"
              description="Experiências viram prevenção. Compartilhe alertas e aprenda com quem já enfrentou situações similares."
              className="flex-1"
            >
              <CommunityVisual />
            </FeatureCard>

            {/* Card 03: Artigos */}
            <FeatureCard
              num="03"
              title="Conhecimento que blinda"
              description="De segurança digital a vigilância comunitária, conteúdo prático e direto para o dia a dia."
              className="flex-1"
            >
              <ArticlesVisual />
            </FeatureCard>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="flex items-center gap-6 mt-12 sm:mt-16">
          <div className={`flex-1 h-px ${dark ? "bg-white/[0.06]" : "bg-gray-200"}`} />
          <p className={`text-sm font-medium shrink-0 ${dark ? "text-gray-600" : "text-gray-400"}`}>
            Tudo isso de forma gratuita e segura
          </p>
          <div className={`flex-1 h-px ${dark ? "bg-white/[0.06]" : "bg-gray-200"}`} />
        </div>
      </div>
    </section>
  );
}
