import { useEffect, useState } from "react";
import { generateTemplatePassword } from "@/lib/templateGenerators";

export const TemplatePasswordView = ({ templateName }: { templateName: string }) => {
  const [password, setPassword] = useState("");

  useEffect(() => {
    const generated = generateTemplatePassword(templateName);
    setPassword(generated);
  }, [templateName]);

  return (
    <div className="bg-[#09090b] p-6 rounded-md text-white w-full max-w-xl mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">{templateName}</h2>
      <div className="border border-gray-700 rounded p-3 text-lg bg-black/40 font-mono">
        {password}
      </div>
      <button
        onClick={() => setPassword(generateTemplatePassword(templateName))}
        className="mt-4 bg-white text-black px-4 py-2 rounded hover:bg-gray-200 hover:cursor-pointer transition-all duration-300"
      >
        Generate Again
      </button>
    </div>
  );
};