"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

interface Project {
    id: string
    name: string
    description: string
    image: string
    background: string
}

const ProjectCard = ({ project: { id, name, description, image, background }, index }: { project: Project, index: number }) => {

    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end end"],
    });
    
    const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <motion.div
            ref={cardRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 border rounded-md p-4 h-[400px] mb-20 sticky"
            style={{
                backgroundColor: background,
                top: `${index * 60 + 200}px`,
                scale,
            }}
        >
            <div className="flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-bold h-[50px]">{name}</h3>
                    <p className="text-sm text-justify">{description}</p>
                </div>
                <div>
                    <Button asChild>
                        <Link href={`/projekty/${id}`}>
                            Zjistit více
                        </Link>
                    </Button>
                </div>
            </div>
            <Image
                src={image}
                alt={name}
                width={500}
                height={500}
                className="self-center justify-self-center hidden md:block hover:scale-105 transition-all duration-300 border rounded-md"
            />
        </motion.div>
    )
}

export default ProjectCard