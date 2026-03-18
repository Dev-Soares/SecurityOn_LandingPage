import { Sun, Moon } from "@phosphor-icons/react";
import { useTheme } from "../../hooks/useTheme";

export function PhoneAppHeader() {
  const { dark } = useTheme();

  return (
    <div
      className={`flex items-center justify-between px-5 mb-5 py-1 border-b pb-3 ${
        dark ? "border-white/[0.06]" : "border-gray-100"
      }`}
    >
      <div className="flex items-center gap-1">
        <img
          src={dark ? "/OnSecurityLight.png" : "/OnSecurityDark.png"}
          alt="SecurityOn logo"
          className="w-10 h-10"
        />
        <span
          className={`text-[15px] font-bold tracking-tight ${
            dark ? "text-white" : "text-blue-600"
          }`}
        >
          SecurityOn
        </span>
      </div>
      <div className="flex items-center gap-1">
        <div className="p-2 rounded-xl">
          {dark ? (
            <Moon size={18} weight="bold" className="text-gray-400" />
          ) : (
            <Sun size={18} weight="bold" className="text-amber-400" />
          )}
        </div>
        <img
          src="/avatar.png"
          alt="User avatar"
          className={`w-7 h-7 rounded-full object-cover border ${
            dark ? "border-gray-700" : "border-gray-200"
          }`}
        />
      </div>
    </div>
  );
}
