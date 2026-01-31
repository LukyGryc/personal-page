import { JSX } from "react";

interface PillProps {
    name: string;
    icon: JSX.Element;
}   

const Pill = ({ name, icon }: PillProps) => {
  return (
    <div className="flex items-center gap-2 border rounded-xl p-2 w-fit hover:scale-105 transition-all duration-300">
        {icon}
        <span className="text-sm">{name}</span>
    </div>
  )
}

export default Pill