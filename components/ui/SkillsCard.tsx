"use client"
import { JSX } from "react";
import DoubleBorderBeam from "./DoubleBorderBeam";
import Pill from "./Pill";
import { IconProps } from "@/icons/devIcons";
import PointerHeart from "./PointerHeart";

interface SkillsCardProps {
    title: string;
    items: {
        name: string,
        Icon: (props: IconProps) => JSX.Element,
    }[]
}

const SkillsCard = ({ title, items }: SkillsCardProps) => {
    return (
        <div>
            <div className="h-full flex flex-col gap-2 border rounded-md p-4 relative overflow-hidden group hover:scale-105 transition-all duration-300">
                <h3 className="text-lg font-bold">{title}</h3>
                <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                        <Pill key={item.name} name={item.name} icon={<item.Icon />} />
                    ))}
                </div>
                <DoubleBorderBeam />
            </div>
            <PointerHeart />
        </div>
    )
}

export default SkillsCard