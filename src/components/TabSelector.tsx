import { KeyIcon } from "./Icons/KeyIcon"
import { TemplateIcon } from "./Icons/TemplateIcon"

export const TabSelector = () => {
  return (
    <div className="flex gap-4 p-1 mt-8 bg-[#28272a] rounded-md w-full justify-between">
      <button className="flex items-center justify-center gap-2 bg-[#09090b] text-white px-4 py-2 rounded-md w-full">
        <KeyIcon size={6}/>
        Generator
      </button>
      <button className="flex items-center justify-center gap-2 text-white px-4 py-2 rounded-md w-full">
        <TemplateIcon size={6}/>
        Templates
      </button>
    </div>
  )
}
