import { KeyIcon } from "./Icons/KeyIcon";
import { TemplateIcon } from "./Icons/TemplateIcon";

type Tab = "generator" | "templates";

interface TabSelectorProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export const TabSelector = ({ activeTab, onTabChange }: TabSelectorProps) => {
  return (
    <div className="flex gap-4 p-1 mt-8 bg-[#28272a] rounded-md w-full justify-between">
      <button
        onClick={() => onTabChange("generator")}
        className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md w-full hover:cursor-pointer transition-all duration-300 ease-in-out
    ${
      activeTab === "generator"
        ? "bg-[#09090b] text-white"
        : "bg-transparent text-gray-400"
    }
  `}
      >
        <KeyIcon size={20} />
        Generator
      </button>
      <button
        onClick={() => onTabChange("templates")}
        className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md w-full hover:cursor-pointer transition-all duration-300 ease-in-out
    ${
      activeTab === "templates"
        ? "bg-[#09090b] text-white"
        : "bg-transparent text-gray-400"
    }
  `}
      >
        <TemplateIcon size={20} />
        Templates
      </button>
    </div>
  );
};
