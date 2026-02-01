"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"

const SectionDescription = ({
    text,
    className,
    animateOnMount,
}: {
    text: string
    className?: string
        //Had issue when switching pages, so unfortunately the Page Headers will animate only once on mount
    animateOnMount?: boolean
}) => {
    const visible = { opacity: 1, y: 0 }
    return (
        <motion.h2
            className={cn("text-xl font-semibold", className)}
            initial={{ opacity: 0, y: 40 }}
            {...(animateOnMount && { animate: visible })}
            {...(!animateOnMount && { whileInView: visible })}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            {text}
        </motion.h2>
    )
}

export default SectionDescription