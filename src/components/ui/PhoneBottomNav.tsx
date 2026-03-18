import { UsersThree, Article, Flag } from "@phosphor-icons/react";
import { useTheme } from "../../hooks/useTheme";

const navTabs = [
  { label: "Comunidade", icon: UsersThree, active: false },
  { label: "Artigos", icon: Article, active: false },
  { label: "Denúncias", icon: Flag, active: true },
];

export function PhoneBottomNav() {
  const { dark } = useTheme();

  return (
    <div
      className={`flex items-center justify-around px-2 py-3 mt-2 border-t ${
        dark ? "border-white/[0.06]" : "border-gray-100"
      }`}
    >
      {navTabs.map((tab) => (
        <div
          key={tab.label}
          className={`relative flex-1 flex flex-col items-center gap-1 ${
            tab.active
              ? dark
                ? "text-white"
                : "text-gray-900"
              : dark
                ? "text-gray-600"
                : "text-gray-400"
          }`}
        >
          {tab.active && (
            <div
              className={`absolute -top-3 left-0 right-0 h-[3px] rounded-full ${
                dark ? "bg-white" : "bg-gray-900"
              }`}
            />
          )}
          <tab.icon size={20} weight={tab.active ? "fill" : "regular"} />
          <span className="text-[8px] font-medium">{tab.label}</span>
        </div>
      ))}
    </div>
  );
}
