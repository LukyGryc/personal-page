"use client";
import { cn } from "@/lib/utils"
import { ArrowDown } from "lucide-react"
import { motion } from "motion/react"

const ScrollDown = ({ className }: { className?: string }) => {
    return (
        <motion.div
            className={cn("flex flex-col items-center justify-center", className)}
            initial={{ y: -40 }}
            animate={{ y: 100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <ArrowDown className="w-10 h-10 animate-bounce" />
            <span className="text-sm">Scroll down</span>
        </motion.div>
    )
}

export default ScrollDown