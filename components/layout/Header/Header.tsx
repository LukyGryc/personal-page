import Link from "next/link"
import { AnimatedThemeToggler } from "../../ui/animated-theme-toggler"
import HeaderLinks from "./HeaderLinks"
import LinksDrawer from "./LinksDrawer"

const links = [
    { name: "O mně", href: "/" },
    { name: "Projekty", href: "/projekty" },
    { name: "Kontakt", href: "/contact" },
]

//AnimatedThemeToggler - fav feature
const Header = () => {
    return (
        <header className="w-full px-4 h-16 z-10 backdrop-blur-sm fixed top-0 border-b ">
            <div className="h-full max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-2xl font-bold">
                    <Link href="/">Lukáš Gryč</Link>
                </div>
                <div className="flex items-center gap-4 h-6 hidden md:inline-flex">
                    <AnimatedThemeToggler className="cursor-pointer" />
                    <HeaderLinks links={links} />
                </div>
                <LinksDrawer links={links} />
            </div>
        </header>
    )
}

export default Header