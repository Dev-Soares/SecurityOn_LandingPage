import { useTheme } from "../../hooks/useTheme";

export function CallToAction() {
  const { dark } = useTheme();

  return (
    <section
      className={`relative py-16 sm:py-24 overflow-hidden ${
        dark ? "" : "bg-white"
      }`}
    >
      {/* Concentric circles — anchored to right edge */}
      <div
        className="absolute bottom-0 right-0 translate-y-[30%] translate-x-[40%] pointer-events-none hidden lg:block"
        aria-hidden
      >
        {[700, 540, 400, 270, 150].map((size, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${(700 - size) / 2}px`,
              left: `${(700 - size) / 2}px`,
              backgroundColor: dark
                ? `rgba(96, 165, 250, ${[0.05, 0.08, 0.13, 0.19, 0.28][i]})`
                : `rgba(59, 130, 246, ${[0.07, 0.12, 0.18, 0.26, 0.38][i]})`,
            }}
          />
        ))}
        <div style={{ width: 700, height: 700 }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2
              className={`font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight mb-3 ${
                dark ? "text-white" : "text-gray-900"
              }`}
            >
              Quer deixar de ser uma <span className={`${dark ? "text-blue-400" : "text-blue-600"}`}>vítima em potencial?</span>
            </h2>

            <p
              className={`text-lg sm:text-xl leading-relaxed mt-8 ${
                dark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Aprenda com o
            </p>
            <div className="inline-flex items-center gap-3 mb-5">
              <img
                src={dark ? "/OnSecurityLight.png" : "/OnSecurityDark.png"}
                alt=""
                className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
              />
              <span className={`font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight ${dark ? "text-blue-400" : "text-blue-600"}`}>
                SecurityOn
              </span>
            </div>

            <p
              className={`text-base sm:text-lg leading-relaxed max-w-md mb-8 ${
                dark ? "text-gray-500" : "text-gray-500"
              }`}
            >
              Conhecimento, comunidade e ferramentas para você nunca mais ser pego desprevenido.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-3">
              <a
                href="https://securityon.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg shadow-blue-600/25 transition-all duration-200 hover:-translate-y-0.5"
              >
                Comece agora
              </a>
              <a
                href="https://securityon.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-7 py-3 text-base font-medium rounded-full border transition-all duration-200 hover:-translate-y-0.5 ${
                  dark
                    ? "text-gray-300 border-white/10 hover:border-white/20 hover:text-white"
                    : "text-gray-600 border-gray-300 hover:border-gray-400 hover:text-gray-900"
                }`}
              >
                Já tenho conta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
