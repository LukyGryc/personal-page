"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"

const SectionHeader = ({
    text,
    className,
}: {
    text: string
    className?: string
}) => {

    const words = text.split(" ")
    return (
        <motion.h1
            className={cn("text-4xl font-bold flex justify-center", className)}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            {words.map((word, index) => (
                //Key=index should be fine because it's a static list, while the words could repeat
                <span key={index} className={`${word.includes("(") || word.includes(")") ? "hover:animate-spin" : ""}`}>
                    {word}&nbsp;
                </span>
            ))}
        </motion.h1>
    )
}

export default SectionHeader
