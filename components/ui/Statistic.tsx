"use client";
import { motion, MotionProps, useSpring } from "motion/react"
import { useEffect, useState } from "react";

interface StatisticProps {
    title: string
    value: number
    description?: string
    addPlus?: boolean
}

const Statistic = ({ title, value, description, addPlus }: StatisticProps) => {

    const [count, setCount] = useState(0);
    const [showOptional, setShowOptional] = useState(false);
    const springCount = useSpring(0, { duration: 3000, bounce: 0 });

    springCount.on("change", (latest) => {
        setCount(Math.round(latest));
    });

    springCount.on("animationComplete", () => {
        setShowOptional(true);
    });

    useEffect(() => {
        springCount.set(value);
    }, [])

    const animationExtra: MotionProps = {
        initial: { opacity: 0 },
        animate: { opacity: showOptional ? 1 : 0 },
        transition: { duration: 1, delay: 0.2 }
    }

    const getAnimateCount = () => {
        if (showOptional && addPlus) {
            return {
                animate: { translateX: -3 },
                transition: { duration: 0.2 }
            }
        };
        return {};
    }

    return (
        <div className="flex flex-col items-center">
            <div className="text-2xl font-bold">{title}</div>
            <div className="flex">
                <motion.div
                    className="text-2xl font-bold"
                    {...getAnimateCount()}
                >
                    {count}
                </motion.div>
                {addPlus && showOptional && (
                    <motion.span className="text-2xl font-bold" {...animationExtra} >
                        +
                    </motion.span>
                )}
            </div>
            {
                description && (
                    <motion.div className="text-sm text-muted-foreground" {...animationExtra}>
                        {showOptional ? description : ""}
                    </motion.div>
                )
            }
        </div>
    );
};
export default Statistic;