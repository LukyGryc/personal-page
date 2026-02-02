"use client"
import { JSX } from "react";
import DoubleBorderBeam from "./DoubleBorderBeam";
import Pill from "./Pill";
import { IconProps } from "@/icons/devIcons";
import HoverableCard from "../layout/Pages/HoverableCard";

interface SkillsCardProps {
    title: string;
    items: {
        name: string,
        Icon: (props: IconProps) => JSX.Element,
    }[]
}

const SkillsCard = ({ title, items }: SkillsCardProps) => {
    return (
        <HoverableCard>
            <h3 className="text-lg font-bold">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                    <Pill key={item.name} name={item.name} icon={<item.Icon />} />
                ))}
            </div>
            <DoubleBorderBeam />
        </HoverableCard>
    )
}

export default SkillsCard