import { CopyIcon } from "./Icons/CopyIcon";
import { KeyIcon } from "./Icons/KeyIcon";
import { ShowPasswordIcon } from "./Icons/ShowPasswordIcon";
import { SettingsIcon } from "./Icons/SettingsIcon";
import { ShieldIcon } from "./Icons/ShieldIcon";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { LightningIcon } from "./Icons/LightningIcon";

export const Card = () => {
  return (
    <div className="bg-[#09090b] mt-2 px-4 py-2 rounded-md w-full">
      <p className="flex items-center gap-2 text-xl font-medium text-white mt-2">
        <KeyIcon size={26} />
        Your Password
      </p>

      <div className="relative w-full">
        <input
          type="password"
          className="w-full bg-transparent text-white border-2 border-[#1c1c1e] rounded-md p-3 my-4 pr-10"
          disabled
        />
        <a href="">
          <ShowPasswordIcon size={20} />
        </a>
        <a href="">
          <CopyIcon size={20} />
        </a>
      </div>

      <div className="flex flex-col gap-4 my-4">
        <div className="flex justify-between">
          <p className="flex items-center gap-2 text-xl font-medium text-white mt-2">
            <ShieldIcon size={26} />
            Password Strength
          </p>
          <p className="flex items-center gap-2 text-md font-medium text-green-500 mt-2">
            <LightningIcon size={20}/>
            Strong
          </p>
        </div>
        <Progress value={33} />
      </div>

      <div className="flex flex-col gap-4 my-4">
        <p className="flex items-center gap-2 text-xl font-medium text-white mt-2">
          <SettingsIcon size={26} />
          Length: 16
        </p>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>


    </div>
  );
};
