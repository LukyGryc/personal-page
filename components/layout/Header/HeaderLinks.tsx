"use client"

import Link from "next/link"
import { motion } from "motion/react"

const navigation = [
    { name: "About", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
]

//ChatGPT helped with the animation
const HeaderLinks = () => {
    return (
        <nav className="flex gap-4 h-full">
            {navigation.map((item, index) => (
                <motion.span
                    key={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                    <Link href={item.href} className="block">
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
                                {item.name}
                            </motion.span>

                            <motion.span
                                className="absolute left-0 top-0 block"
                                variants={{
                                    rest: { y: "100%" },
                                    hover: { y: "0%" },
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                {item.name}
                            </motion.span>
                        </motion.span>
                    </Link>
                </motion.span>
            ))}
        </nav>
    )
}

export default HeaderLinks
