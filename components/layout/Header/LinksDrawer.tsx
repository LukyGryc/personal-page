import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { GitHubIcon } from '@/icons/devIcons'
import { CircleX, MenuIcon } from 'lucide-react'
import Link from 'next/link'

const LinksDrawer = ({ links }: { links: { name: string, href: string }[] }) => {
    return (
        <Drawer direction="right">
            <DrawerTrigger className="flex items-center gap-4 h-6 block md:hidden">
                <MenuIcon className="cursor-pointer" />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <div className="flex items-center justify-between text-2xl">
                        <DrawerTitle>Menu</DrawerTitle>
                        <Button asChild variant="ghost" className="cursor-pointer">
                            <DrawerTrigger>
                                <CircleX className="size-5" />
                            </DrawerTrigger>
                        </Button>
                    </div>
                </DrawerHeader>
                <div className="flex flex-col gap-2 px-4 mt-4 items-start">
                    {links.map(({ name, href }) => (
                        <DrawerTrigger key={href}>
                            <Link href={href} className="block text-xl font-bold">
                                {name}
                            </Link>
                        </DrawerTrigger>
                    ))}
                </div>
                <DrawerFooter>
                    <div className="flex items-center justify-between">
                        <AnimatedThemeToggler />
                        <DrawerTrigger>
                            <a
                                href="https://github.com/LukyGryc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-xl font-bold"
                            >
                                <GitHubIcon width={24} />
                            </a>
                        </DrawerTrigger>
                    </div>
                </DrawerFooter>
            </DrawerContent>
        </Drawer >
    )

}

export default LinksDrawer