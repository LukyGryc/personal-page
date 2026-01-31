import Link from "next/link"
import { AnimatedThemeToggler } from "../../ui/animated-theme-toggler"
import HeaderLinks from "./HeaderLinks"

const Header = () => {
    return (
        <header className="w-full h-16 z-10 backdrop-blur-sm sticky top-0 border-b ">
            <div className="w-full h-full max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-2xl font-bold">
                    <Link href="/">Lukáš Gryč</Link>
                </div>
                <div className="flex items-center gap-4 h-6">
                    <AnimatedThemeToggler />
                    <HeaderLinks />
                </div>
            </div>
        </header>
    )
}

export default Header