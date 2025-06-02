import { useState, useEffect } from "react";
import { CopyIcon } from "./Icons/CopyIcon";
import { CheckIcon } from "./Icons/CheckIcon";
import { KeyIcon } from "./Icons/KeyIcon";
import { ShowPasswordIcon } from "./Icons/ShowPasswordIcon";
import { HidePasswordIcon } from "./Icons/HidePasswordIcon";
import { SettingsIcon } from "./Icons/SettingsIcon";
import { ShieldIcon } from "./Icons/ShieldIcon";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { LightningIcon } from "./Icons/LightningIcon";
import { Checkbox } from "@/components/ui/checkbox";
import { generatePassword } from "@/lib/passwordGenerator";
import { evaluatePassword } from "@/lib/evaluatePassword";
import { ArrowSpinIcon } from "./Icons/ArrowSpinIcon";
import { MediumIcon } from "./Icons/MediumIcon";
import { WeakIcon } from "./Icons/WeakIcon";
import { MagicWandIcon } from "./Icons/MagicWandIcon";
import { UpperCaseIcon } from "./Icons/UpperCaseIcon";
import { NumbersIcon } from "./Icons/NumbersIcon";
import { SpecialCharactersIcon } from "./Icons/SpecialCharactersIcon";

export const Card = () => {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2 segundos
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  const handleGenerate = () => {
    // Activar animación de giro
    setIsSpinning(true);

    const newPassword = generatePassword({
      length,
      includeUppercase,
      includeNumbers,
      includeSpecialCharacters: includeSymbols,
    });
    setPassword(newPassword);
    // Detener la animación tras 500ms
    setTimeout(() => setIsSpinning(false), 500);
  };

  useEffect(() => {
    handleGenerate();
  }, [length]);

  const [strengthScore, setStrengthScore] = useState(0);
  const [strengthLabel, setStrengthLabel] = useState<
    "Weak" | "Medium" | "Strong"
  >("Weak");

  useEffect(() => {
    const { score, label } = evaluatePassword(password);
    setStrengthScore(score);
    setStrengthLabel(label);
  }, [password]);

  let bgStrengthColor = "";
  let strengthColor = "";
  let strengthIcon = null;

  if (strengthLabel === "Weak") {
    bgStrengthColor = "bg-red-500";
    strengthColor = "text-red-500";
    strengthIcon = <WeakIcon size={20} />;
  } else if (strengthLabel === "Medium") {
    bgStrengthColor = "bg-yellow-400";
    strengthColor = "text-yellow-400";
    strengthIcon = <MediumIcon size={20} />;
  } else if (strengthLabel === "Strong") {
    bgStrengthColor = "bg-green-500";
    strengthColor = "text-green-500";
    strengthIcon = <LightningIcon size={20} />;
  }

  return (
    <div className="bg-[#09090b] mt-2 px-4 py-2 rounded-md w-full">
      <p className="flex items-center gap-2 text-md font-medium text-white mt-2">
        <KeyIcon size={26} />
        Your Password
      </p>

      <div className="relative w-full">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          readOnly
          className="w-full bg-transparent text-white border-2 border-[#1c1c1e] rounded-md p-3 my-4 pr-10"
        />
        <button
          onClick={() => setShowPassword((prev) => !prev)}
          className="hover:cursor-pointer relative"
        >
          <span
            className={`absolute bottom-12 flex items-center justify-center transition-all duration-300 ease-in-out
      ${showPassword ? "opacity-0 scale-90" : "opacity-100 scale-100"}`}
          >
            <ShowPasswordIcon size={20} />
          </span>

          <span
            className={`absolute bottom-12 flex items-center justify-center transition-all duration-300 ease-in-out
      ${showPassword ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
          >
            <HidePasswordIcon size={20} />
          </span>
        </button>
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
      </div>

      <div className="flex flex-col gap-4 my-4">
        <div className="flex justify-between items-center">
          <p className="flex items-center gap-2 text-md font-medium text-white mt-2">
            <ShieldIcon size={26} />
            Password Strength
          </p>
          <p
            className={`flex gap-2 text-md font-medium mt-2 items-center ${strengthColor}`}
          >
            {strengthIcon}
            {strengthLabel}
          </p>
        </div>

        <Progress value={strengthScore} indicatorColor={bgStrengthColor} />
      </div>

      <div className="flex flex-col gap-4 my-4">
        <p className="flex items-center gap-2 text-md font-medium text-white mt-2">
          <SettingsIcon size={26} />
          Length: {length}
        </p>
        <Slider
          value={[length]}
          onValueChange={(value) => setLength(value[0])}
          min={4}
          max={32}
          step={1}
        />
      </div>

      <div className="flex flex-col gap-4 my-4">
        <p className="flex items-center gap-2 text-md font-medium text-white mt-2">
          <MagicWandIcon size={26} />
          Character Types
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Uppercase */}
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={includeUppercase}
              onCheckedChange={(checked) => {
                setIncludeUppercase(!!checked);
                handleGenerate();
              }}
              id="uppercase"
            />
            <label
              htmlFor="uppercase"
              className="text-white flex items-center gap-2 text-sm"
            >
              <UpperCaseIcon size={20} />
              Include Uppercase
            </label>
          </div>

          {/* Numbers */}
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={includeNumbers}
              onCheckedChange={(checked) => {
                setIncludeNumbers(!!checked);
                handleGenerate();
              }}
              id="numbers"
            />
            <label
              htmlFor="numbers"
              className="text-white flex items-center gap-2 text-sm"
            >
              <NumbersIcon size={20} />
              Include Numbers
            </label>
          </div>

          {/* Symbols */}
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={includeSymbols}
              onCheckedChange={(checked) => {
                setIncludeSymbols(!!checked);
                handleGenerate();
              }}
              id="symbols"
            />
            <label
              htmlFor="symbols"
              className="text-white flex items-center gap-2 text-sm"
            >
              <SpecialCharactersIcon size={20} />
              Include Symbols
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 my-4">
        <button
          onClick={handleGenerate}
          className="flex gap-4 items-center justify-center bg-white hover:bg-gray-200 text-black font-medium py-2 px-4 rounded-md hover:cursor-pointer transition-all duration-300"
        >
          <ArrowSpinIcon
            size={20}
            className={
              isSpinning
                ? "rotate-[360deg] transition-transform duration-500"
                : ""
            }
          />
          Generate New Password
        </button>
      </div>
    </div>
  );
};
