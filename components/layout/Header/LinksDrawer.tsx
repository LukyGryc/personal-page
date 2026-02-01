"use client";
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { CircleX, MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
//Unify them with the HeaderLinks component
const navigation = [
    { name: "O mně", href: "/" },
    { name: "Projekty", href: "/projects" },
    { name: "Kontakt", href: "/contact" },
]

const LinksDrawer = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
            <DrawerTrigger asChild className="flex items-center gap-4 h-6 block md:hidden">
                <MenuIcon className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <div className="flex items-center justify-between text-2xl">
                        <DrawerTitle>Menu</DrawerTitle>
                        <CircleX className="cursor-pointer" onClick={() => setIsOpen(false)} />
                    </div>
                </DrawerHeader>
                <div className="flex flex-col gap-2 px-4 mt-4">
                    {navigation.map(({ name, href }) => (
                        <Link href={href} className="block text-xl font-bold" key={href} onClick={() => setIsOpen(false)}>
                            {name}
                        </Link>
                    ))}
                </div>
                <DrawerFooter>
                    <div className="flex items-center justify-between">
                        <AnimatedThemeToggler />
                        <a
                            href="https://www.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-xl font-bold"
                            onClick={() => setIsOpen(false)}
                        >
                            GitHub
                        </a>
                    </div>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )

}

export default LinksDrawer