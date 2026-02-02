"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"

const SectionHeader = ({
    text,
    className,
    animateOnMount,
}: {
    text: string
    className?: string
    //Had issue when switching pages, so unfortunately the Page Headers will animate only once on mount
    animateOnMount?: boolean
}) => {

    const words = text.split(" ")
    const visible = { opacity: 1, y: 0 }
    return (
        <motion.h1
            className={cn("text-4xl font-bold flex flex-wrap justify-center", className)}
            initial={{ opacity: 0, y: -40 }}
            {...(!animateOnMount && { whileInView: visible })}
            {...(animateOnMount && { animate: visible })}
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
