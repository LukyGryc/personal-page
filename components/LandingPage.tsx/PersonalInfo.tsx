"use client";
import HoverableCard from "../layout/Pages/HoverableCard";
import Section from "../layout/Pages/Section";
import SectionHeader from "../layout/Texts/SectionHeader";
import DoubleBorderBeam from "../ui/DoubleBorderBeam";
import { motion } from "motion/react";

const items = [
    { emoji: "🏃‍♂️", label: "Sport", value: "Fotbal" },
    { emoji: "🎬", label: "Seriály", value: "Brooklyn Nine-Nine" },
    { emoji: "🍕", label: "Jídlo", value: "Pizza" },
    { emoji: "🍺", label: "Pivo", value: "Plznička" },
];

const PersonalInfo = () => {
    return (
        <Section className="flex flex-col gap-10 text-start justify-center py-16">
            <SectionHeader text="Mimo práci" className="justify-start" />
            <motion.div
                className=""
                transition={{ duration: 0.5, ease: "easeInOut" }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                <HoverableCard>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 m-0">
                        {items.map(({ emoji, label, value }) => (
                            <li key={label} className="flex gap-3 items-start">
                                <div className="flex h-[1lh] items-center gap-2">
                                    <span className="text-xl shrink-0" aria-hidden>
                                        {emoji}
                                    </span>
                                </div>
                                <div className="min-w-0">
                                    <div className="text-sm text-muted-foreground">{label}</div>
                                    <div className="text-foreground font-medium">{value}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <DoubleBorderBeam />
                </HoverableCard>
            </motion.div>
        </Section>
    );
};

export default PersonalInfo;
