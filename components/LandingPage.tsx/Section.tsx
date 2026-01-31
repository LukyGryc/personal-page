import { cn } from "@/lib/utils"

const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <section className={cn("w-full min-h-dvh", className)}>
            {children}
        </section>
    )
}

export default Section