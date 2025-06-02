import { SparkleIcon } from "./Icons/SparkleIcon";

interface TemplateCardProps {
  name: string;
  example: string;
}

export const TemplateCard = ({ name, example }: TemplateCardProps) => {
  return (
    <div className="flex items-center justify-between bg-[#1a1a1d] p-4 rounded-md mt-4 shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="">
        <h3 className="text-white text-lg font-semibold">{name}</h3>
        <p className="text-gray-400 mt-2 flex flex-col sm:flex-row">Example: <span className="text-white sm:px-2">{example}</span></p>
      </div>
      <div className="mt-2">
        <button className="flex items-center gap-2 bg-[#3a3a3d] text-white px-4 py-2 rounded-md hover:bg-[#4a4a4d] hover:cursor-pointer transition-colors duration-200">
          <SparkleIcon size={20} />
          Use
        </button>
      </div>
    </div>
  )
}
