"use client";
import { motion, MotionProps } from "motion/react"
import DoubleBorderBeam from "./DoubleBorderBeam"
import PointerHeart from "./PointerHeart"
import { cn } from "@/lib/utils"

interface TimelineProps {
    items: {
        title: string
        date: string
        description?: string
    }[]
    className?: string
}

const TimelineCards = ({ items, className }: TimelineProps) => {

    return (
        <div className={cn(className)}>
            {items.map(({ date, description, title }) => (
                <motion.div
                    key={title}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    initial={{ opacity: 0, y:  100 }}
                    whileInView= {{opacity: 1, y: 0 }}
                >
                    <div
                        className="
                            flex flex-col gap-2 p-4 justify-between text-center h-full
                            border rounded-lg
                            shadow-lg hover:shadow-xl
                            transition-all duration-300
                            hover:scale-105
                            group relative overflow-hidden
                        "
                    >
                        <p className="text-sm">{date}</p>
                        <h3 className="text-lg font-bold">{title}</h3>
                        <p className="text-sm text-muted-foreground">{description}</p>

                        <DoubleBorderBeam />

                    </div>
                    <PointerHeart />
                </motion.div>
            ))}
        </div>

    )
}

export default TimelineCards