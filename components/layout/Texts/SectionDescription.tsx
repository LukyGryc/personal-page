"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"

const SectionDescription = ({ text, className }: { text: string, className?: string }) => {
    return (
        <motion.h2
            className={cn("text-xl font-semibold", className)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            {text}
        </motion.h2>
    )
}

export default SectionDescription