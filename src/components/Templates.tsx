import { LightBulbIcon } from "./Icons/LightBulbIcon"
import { TemplateIcon } from "./Icons/TemplateIcon"
import { TemplateCard } from "./TemplateCard"

interface TemplatesProps {
  onUseTemplate: (templateName: string) => void;
}

export const Templates = ({ onUseTemplate }: TemplatesProps) => {
  return (
    <div className="bg-[#09090b] mt-2 p-4 rounded-md w-full">
      <h2 className="text-white text-xl font-semibold flex items-center gap-2">
        <TemplateIcon size={20} />
        Password Templates
      </h2>
      <p className="text-gray-400 text-sm mt-2">Use these templates as a starting point for creating memorable, secure passwords.</p>
      <TemplateCard name="Memorable Phrase" example="Correct-Horse-Battery-Staple" onUse={() => onUseTemplate("Memorable Phrase")} />
      <TemplateCard name="PIN Style" example="1289-3567-3210" onUse={() => onUseTemplate("PIN Style")} />
      <TemplateCard name="First Letter Sentence" example="NFTDWASH!" onUse={() => onUseTemplate("First Letter Sentence")} />
      <TemplateCard name="Custom Pattern" example="Pwd_2023_Secure!" onUse={() => onUseTemplate("Custom Pattern")} />
      <div>
        <p className="text-white text-md font-semibold mt-8 sm:mt-4 flex items-center gap-2">
          <LightBulbIcon size={18} />
          Creating Memorable Passwords:
        </p>
        <ul className="list-disc list-inside text-white text-sm mt-2 ml-3 flex flex-col gap-2">
          <li>Use a phrase or sentence and take the first letter of each word</li>
          <li>Replace letters with similar-looking numbers (e → 3, a → 4)</li>
          <li>Add special characters between words</li>
          <li>Include a year or date meaningful to you, but not your birth year</li>
        </ul>
      </div>
    </div>
  )
}
