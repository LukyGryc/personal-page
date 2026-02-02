"use client"

import { Highlighter } from "@/components/ui/highlighter"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { useState } from "react"

const SectionHeader = ({
    text,
    className,
    animateOnMount,
}: {
    text: string
    className?: string
    animateOnMount?: boolean
}) => {
    const visible = { opacity: 1, y: 0 }
    const [animationDone, setAnimationDone] = useState(false)

    //Regex to determine what parts should be highlighted
    const parts = text.split(/(\([^()]+\))/g)

    return (
        <motion.h1
            className={cn(
                "text-4xl font-bold whitespace-pre-wrap",
                className
            )}
            initial={{ opacity: 0, y: -40 }}
            {...(!animateOnMount && { whileInView: visible })}
            {...(animateOnMount && { animate: visible })}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onAnimationComplete={() => setAnimationDone(true)}
        >
            {parts.map((part, index) => {
                const isHighlight = /^\([^()]+\)$/.test(part)

                if (!isHighlight) {
                    return <span key={index}>{part}</span>
                }

                return (
                    <span key={index} className="inline-block text-[hsl(158,100%,68%)]">
                        {animationDone ? (
                            <Highlighter action="highlight" strokeWidth={20} color="hsl(210,4%,10%)" isView>
                                {part}
                            </Highlighter>
                        ) : (
                            part
                        )}
                    </span>
                )
            })}
        </motion.h1>
    )
}

export default SectionHeader
