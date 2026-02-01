import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { GitHubIcon } from '@/icons/devIcons'
import { CircleX, MenuIcon } from 'lucide-react'
import Link from 'next/link'

//Unify them with the HeaderLinks component
const navigation = [
    { name: "O mně", href: "/" },
    { name: "Projekty", href: "/projects" },
    { name: "Kontakt", href: "/contact" },
]

const LinksDrawer = () => {
    return (
        <Drawer direction="right">
            <DrawerTrigger asChild className="flex items-center gap-4 h-6 block md:hidden">
                <MenuIcon className="cursor-pointer" />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <div className="flex items-center justify-between text-2xl">
                        <DrawerTitle>Menu</DrawerTitle>
                        <DrawerTrigger asChild>
                            <Button variant="ghost" className="cursor-pointer">
                                <CircleX className="size-5" />
                            </Button>
                        </DrawerTrigger>
                    </div>
                </DrawerHeader>
                <div className="flex flex-col gap-2 px-4 mt-4">
                    {navigation.map(({ name, href }) => (
                        <DrawerTrigger key={href} asChild>
                            <Link href={href} className="block text-xl font-bold">
                                {name}
                            </Link>
                        </DrawerTrigger>
                    ))}
                </div>
                <DrawerFooter>
                    <div className="flex items-center justify-between">
                        <AnimatedThemeToggler />
                        <DrawerTrigger asChild>
                            <a
                                href="https://github.com/LukyGryc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-xl font-bold"
                            >
                                <GitHubIcon width={24}/>
                            </a>
                        </DrawerTrigger>
                    </div>
                </DrawerFooter>
            </DrawerContent>
        </Drawer >
    )

}

export default LinksDrawer