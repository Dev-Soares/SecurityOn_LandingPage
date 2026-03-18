import type { ReactNode } from "react";
import { useTheme } from "../../hooks/useTheme";

interface FeatureCardProps {
  num: string;
  title: string;
  description: string;
  children?: ReactNode;
  topAccent?: ReactNode;
  className?: string;
}

export function FeatureCard({
  num,
  title,
  description,
  children,
  topAccent,
  className = "",
}: FeatureCardProps) {
  const { dark } = useTheme();

  return (
    <div
      className={`group relative rounded-3xl border overflow-hidden transition-all duration-500 ${
        dark
          ? "bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.04]"
          : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200/50"
      } ${className}`}
    >
      {topAccent}

      <div className="p-4 sm:p-5 lg:p-6">
        {/* Number */}
        <span
          className={`font-syne font-extrabold text-3xl sm:text-4xl leading-none tracking-tighter block ${
            dark ? "text-white/15" : "text-gray-300"
          }`}
        >
          {num}
        </span>

        <h3
          className={`font-syne font-extrabold text-lg sm:text-xl leading-snug tracking-tight mt-4 sm:mt-3 mb-2 ${
            dark ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm sm:text-base leading-relaxed mb-3 ${
            dark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {description}
        </p>

        {children}
      </div>
    </div>
  );
}
