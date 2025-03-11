import { KeyIcon } from "./Icons/KeyIcon"

export const Card = () => {
  return (
    <div className="bg-[#09090b] mt-2 px-4 py-2 rounded-md w-full">
      <p className="flex items-center gap-2 text-xl font-medium text-white">
        <KeyIcon size={6}/>
        Your Password
      </p>
      
    </div>
  )
}
