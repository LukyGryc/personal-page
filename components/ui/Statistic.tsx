"use client"

import {
  motion,
  MotionProps,
  useSpring,
  useInView,
} from "motion/react"
import { useEffect, useRef, useState } from "react"

interface StatisticProps {
  title: string
  value: number
  description?: string
  addPlus?: boolean
}

const Statistic = ({ title, value, description, addPlus }: StatisticProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const [count, setCount] = useState(0)
  const [showOptional, setShowOptional] = useState(false)

  const springCount = useSpring(0, { duration: 3000, bounce: 0 })

  useEffect(() => {
    if (!isInView) return

    springCount.set(value)

    const unsubscribe = springCount.on("change", (latest) => {
      setCount(Math.round(latest))
    })

    const unsubscribeComplete = springCount.on("animationComplete", () => {
      setShowOptional(true)
    })

    return () => {
      unsubscribe()
      unsubscribeComplete()
    }
  }, [isInView, value, springCount])

  const animationExtra: MotionProps = {
    initial: { opacity: 0 },
    animate: { opacity: showOptional ? 1 : 0 },
    transition: { duration: 1, delay: 0.2 },
  }

  const getAnimateCount = () => {
    if (showOptional && addPlus) {
      return {
        animate: { x: -3 },
        transition: { duration: 0.2 },
      }
    }
    return {}
  }

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="text-2xl font-bold">{title}</div>

      <div className="flex">
        <motion.div className="text-2xl font-bold" {...getAnimateCount()}>
          {count}
        </motion.div>

        {addPlus && showOptional && (
          <motion.span className="text-2xl font-bold" {...animationExtra}>
            +
          </motion.span>
        )}
      </div>

      {description && (
        <motion.div
          className="text-sm text-muted-foreground"
          {...animationExtra}
        >
          {showOptional ? description : ""}
        </motion.div>
      )}
    </div>
  )
}

export default Statistic
