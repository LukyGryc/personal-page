"use client"

import { useState } from 'react'
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { GitHubIcon } from '@/icons/devIcons'
import { CircleX, MenuIcon } from 'lucide-react'
import Link from 'next/link'

const LinksDrawer = ({ links }: { links: { name: string, href: string }[] }) => {
    const [open, setOpen] = useState(false)

    return (
        <Drawer direction="right" open={open} onOpenChange={setOpen}>
            <DrawerTrigger
                className="flex items-center gap-4 h-6 block md:hidden"
                aria-label="Otevřít menu"
            >
                <MenuIcon className="cursor-pointer" aria-hidden />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <div className="flex items-center justify-between text-2xl">
                        <DrawerTitle>Menu</DrawerTitle>
                        <DrawerClose asChild>
                            <Button variant="ghost" className="cursor-pointer" aria-label="Zavřít menu">
                                <CircleX className="size-5" />
                            </Button>
                        </DrawerClose>
                    </div>
                </DrawerHeader>
                <div className="flex flex-col gap-2 px-4 mt-4 items-start">
                    {links.map(({ name, href }) => (
                        <Link
                            key={href}
                            href={href}
                            className="block text-xl font-bold"
                            onClick={() => setOpen(false)}
                        >
                            {name}
                        </Link>
                    ))}
                </div>
                <DrawerFooter>
                    <div className="flex items-center justify-between">
                        <AnimatedThemeToggler />
                        <a
                            href="https://github.com/LukyGryc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-xl font-bold"
                            aria-label="GitHub profil Lukáš Gryč"
                            onClick={() => setOpen(false)}
                        >
                            <GitHubIcon width={24} aria-hidden />
                        </a>
                    </div>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default LinksDrawer