import { useTheme } from "../../hooks/useTheme";

const cards = [
  { imageDark: "bg-blue-500/10", imageLight: "bg-blue-50" },
  { imageDark: "bg-amber-500/10", imageLight: "bg-amber-50" },
];

export function ArticlesVisual() {
  const { dark } = useTheme();

  return (
    <div className="flex gap-2.5 w-full max-w-[240px]">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`flex-1 rounded-xl overflow-hidden border ${
            dark
              ? "border-white/[0.06] bg-white/[0.03]"
              : "border-gray-200 bg-gray-50"
          }`}
        >
          <div className={`h-12 ${dark ? card.imageDark : card.imageLight}`} />
          <div className="p-2 flex flex-col gap-1">
            <div className={`h-1.5 rounded-full w-[85%] ${dark ? "bg-gray-600/40" : "bg-gray-200"}`} />
            <div className={`h-1.5 rounded-full w-[60%] ${dark ? "bg-gray-700/40" : "bg-gray-100"}`} />
          </div>
        </div>
      ))}
    </div>
  );
}
