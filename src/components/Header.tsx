import { KeyIcon } from "./Icons/KeyIcon";

export const Header = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="flex items-center gap-4 text-4xl font-bold text-center text-white">
        <KeyIcon size={36}/>
        Password Generator
      </h1>
      <p className="text-md text-center text-gray-400">
        Create secure, random passwords with Passy
      </p>
    </div>
  );
};
