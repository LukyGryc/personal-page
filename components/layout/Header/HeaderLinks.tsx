"use client"

import Link from "next/link"
import { motion } from "motion/react"

//ChatGPT helped with the animation
const HeaderLinks = ({ links }: { links: { name: string, href: string }[] }) => {
    return (
        <nav className="flex gap-4 h-full">
            {links.map(({ name, href }) => (
                <Link href={href} className="block" key={href}>
                    <motion.span
                        className="relative inline-block overflow-hidden"
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                    >
                        <motion.span
                            className="block"
                            variants={{
                                rest: { y: "0%" },
                                hover: { y: "-100%" },
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            {name}
                        </motion.span>

                        <motion.span
                            className="absolute left-0 top-0 block"
                            variants={{
                                rest: { y: "100%" },
                                hover: { y: "0%" },
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            {name}
                        </motion.span>
                    </motion.span>
                </Link>
            ))}
        </nav>
    )
}

export default HeaderLinks
