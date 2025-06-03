import { useEffect, useState } from "react";
import { generateTemplatePassword } from "@/lib/templateGenerators";
import { CopyIcon } from "./Icons/CopyIcon";
import { CheckIcon } from "./Icons/CheckIcon";

export const TemplatePasswordView = ({
  templateName,
}: {
  templateName: string;
}) => {
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2 segundos
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  useEffect(() => {
    const generated = generateTemplatePassword(templateName);
    setPassword(generated);
  }, [templateName]);

  return (
    <div className="bg-[#09090b] p-6 rounded-md text-white w-full max-w-xl mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">{templateName}</h2>
      <input
        type="text"
        value={password}
        readOnly
        className="w-full bg-transparent text-white border-2 border-[#1c1c1e] rounded-md p-3 my-4 pr-10"
      />
      <button
        onClick={handleCopy}
        className="hover:cursor-pointer relative transition-all duration-300 transform"
      >
        <span
          className={`absolute bottom-12 transition-all duration-300 ease-in-out ${
            copied ? "opacity-0 scale-75 absolute" : "opacity-100 scale-100"
          }`}
        >
          <CopyIcon size={20} />
        </span>

        <span
          className={`absolute bottom-12 transition-all duration-300 ease-in-out ${
            copied ? "opacity-100 scale-100" : "opacity-0 scale-75 absolute"
          } text-green-500`}
        >
          <CheckIcon size={20} />
        </span>
      </button>
      <button
        onClick={() => setPassword(generateTemplatePassword(templateName))}
        className="mt-4 bg-white text-black px-4 py-2 rounded hover:bg-gray-200 hover:cursor-pointer transition-all duration-300"
      >
        Generate Again
      </button>
    </div>
  );
};
