import { BorderBeam } from "./border-beam"
import { motion, MotionProps } from "motion/react"

interface TimelineProps {
    items: {
        title: string
        date: string
        description?: string
    }[]
}

const TimelineCards = ({ items }: TimelineProps) => {

    const getMotionProps = (index: number): MotionProps => {

        //first from left
        if (index === 0) {
            return {
                initial: { opacity: 0, x: -100 },
                whileInView: { opacity: 1, x: 0 },
            }
        }

        //last from right
        if (index === items.length - 1) {
            return {
                initial: { opacity: 0, x: 100 },
                whileInView: { opacity: 1, x: 0 },
            }
        }

        //middle ones from bottom
        return {
            initial: { opacity: 0, y: 100 },
            whileInView: { opacity: 1, y: 0 },
        }
    }

    return (
        <div className="grid grid-cols-3 gap-6">
            {items.map(({ date, description, title }, index) => (
                <motion.div
                    key={title}
                    className="group relative"
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    {...getMotionProps(index)}
                >
                    <div
                        className="
                            relative flex flex-col gap-2 p-4 justify-between text-center h-full
                            border rounded-lg
                            shadow-lg hover:shadow-xl
                            transition-all duration-300
                            hover:scale-105
                            overflow-hidden
                        "
                    >
                        <p className="text-sm">{date}</p>
                        <h3 className="text-lg font-bold">{title}</h3>
                        <p className="text-sm text-muted-foreground">{description}</p>

                        <BorderBeam
                            duration={6}
                            size={100}
                            className="
                                from-transparent via-red-500 to-transparent
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-300
                            "
                        />

                        <BorderBeam
                            duration={6}
                            delay={3}
                            size={100}
                            borderWidth={2}
                            className="
                                from-transparent via-blue-500 to-transparent
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-300
                            "
                        />
                    </div>
                </motion.div>
            ))}
        </div>

    )
}

export default TimelineCards