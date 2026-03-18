import { ArrowUpRight } from "@phosphor-icons/react";
import { useTheme } from "../../hooks/useTheme";

export interface Complaint {
  level: string;
  badgeDark: string;
  badgeLight: string;
  bar: string;
  source: string;
  date: string;
  title: string;
  desc: string;
  link: string | null;
}

interface ComplaintCardProps {
  complaint: Complaint;
}

export function ComplaintCard({ complaint: c }: ComplaintCardProps) {
  const { dark } = useTheme();

  return (
    <article
      className={`flex flex-row rounded-2xl border overflow-hidden ${
        dark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
      }`}
    >
      {/* Left accent bar */}
      <div className={`w-1 shrink-0 self-stretch ${c.bar}`} />

      <div className="p-3.5 flex flex-col gap-1.5 flex-1 min-w-0">
        {/* Header row */}
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`text-[8px] font-semibold px-2 py-0.5 rounded-full ${
              dark ? c.badgeDark : c.badgeLight
            }`}
          >
            {c.level}
          </span>
          {c.source && (
            <span className={`text-[9px] ${dark ? "text-gray-400" : "text-gray-500"}`}>
              {c.source}
            </span>
          )}
          <span className={`text-[8px] ml-auto ${dark ? "text-gray-500" : "text-gray-400"}`}>
            {c.date}
          </span>
        </div>

        {/* Title */}
        <h4 className={`text-[11px] font-bold leading-snug ${dark ? "text-white" : "text-gray-900"}`}>
          {c.title}
        </h4>

        {/* Description */}
        <p className={`text-[10px] leading-relaxed line-clamp-2 ${dark ? "text-gray-300" : "text-gray-600"}`}>
          {c.desc}
        </p>

        {/* Link */}
        {c.link && (
          <div className="flex items-center gap-1 mt-0.5">
            <ArrowUpRight size={10} weight="bold" className="text-blue-400" />
            <span className="text-[9px] text-blue-400 font-medium">Ver site</span>
          </div>
        )}
      </div>
    </article>
  );
}
