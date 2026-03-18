import { useTheme } from "../../hooks/useTheme";

const avatarColors = [
  { dark: "bg-blue-500/30", light: "bg-blue-200" },
  { dark: "bg-emerald-500/30", light: "bg-emerald-200" },
  { dark: "bg-amber-500/30", light: "bg-amber-200" },
];

export function CommunityVisual() {
  const { dark } = useTheme();

  return (
    <div className="relative w-full max-w-[240px] h-[100px]">
      {/* Left bubble */}
      <div
        className={`absolute top-0 left-0 w-[65%] rounded-2xl rounded-bl-sm px-3.5 py-2.5 ${
          dark
            ? "bg-blue-500/15 border border-blue-500/20"
            : "bg-blue-50 border border-blue-100"
        }`}
      >
        <div className={`h-1.5 rounded-full w-[80%] mb-1.5 ${dark ? "bg-blue-400/30" : "bg-blue-200"}`} />
        <div className={`h-1.5 rounded-full w-[55%] ${dark ? "bg-blue-400/20" : "bg-blue-100"}`} />
      </div>

      {/* Right bubble */}
      <div
        className={`absolute top-[38px] right-0 w-[55%] rounded-2xl rounded-br-sm px-3.5 py-2.5 ${
          dark
            ? "bg-white/[0.06] border border-white/[0.08]"
            : "bg-gray-50 border border-gray-200"
        }`}
      >
        <div className={`h-1.5 rounded-full w-[70%] mb-1.5 ${dark ? "bg-gray-500/30" : "bg-gray-200"}`} />
        <div className={`h-1.5 rounded-full w-[40%] ${dark ? "bg-gray-500/20" : "bg-gray-100"}`} />
      </div>

      {/* Avatars */}
      <div className="absolute bottom-0 left-2 flex -space-x-2">
        {avatarColors.map((bg, i) => (
          <div
            key={i}
            className={`w-6 h-6 rounded-full border-2 ${dark ? bg.dark : bg.light} ${
              dark ? "border-gray-900" : "border-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
