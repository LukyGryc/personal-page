"use client"

import { Highlighter } from "@/components/ui/highlighter"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { useState } from "react"

const SectionHeader = ({
    text,
    className,
    animateOnMount,
    level = 2,
}: {
    text: string
    className?: string
    /** 1 = page title (one per page), 2 = section title */
    animateOnMount?: boolean
    level?: 1 | 2
}) => {
    const visible = { opacity: 1, y: 0 }
    const [animationDone, setAnimationDone] = useState(false)
    const Tag = level === 1 ? motion.h1 : motion.h2

    //Regex to determine what parts should be highlighted
    const parts = text.split(/(\([^()]+\))/g)

    return (
        <Tag
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
                    //Relative causes the highlighter not to affect neighbor characters
                    return <span key={index} className="relative">{part}</span>
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
        </Tag>
    )
}

export default SectionHeader
