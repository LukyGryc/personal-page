import { cn } from "@/lib/utils";

type Variant = "challenges" | "todos";

interface ProjectInfoBoxProps {
    title: string;
    items: string[];
    variant?: Variant;
    className?: string;
}

const accentByVariant: Record<Variant, string> = {
    challenges: "border-l-destructive/70",
    todos: "border-l-chart-2",
};

const ProjectInfoBox = ({ title, items, variant = "challenges", className }: ProjectInfoBoxProps) => {
    if (items.length === 0) {
        return null;
    }

    return (
        <section
            className={cn(
                "w-full md:flex-1 min-w-0",
                "border border-border rounded-lg",
                "pl-4 pr-4 pt-4 pb-4",
                "border-l-4",
                accentByVariant[variant],
                className
            )}
        >
            <h2 className="text-lg font-semibold text-foreground tracking-tight mb-3">
                {title}
            </h2>
            <ul className="space-y-2 list-none p-0 m-0">
                {items.map((item) => (
                    <li
                        key={item}
                        className="flex gap-2 items-start text-sm leading-relaxed "
                    >
                        <div className="flex items-center h-[1lh]">
                            <span
                                className="size-1.5 shrink-0 rounded-full bg-muted-foreground/50"
                                aria-hidden
                            />
                        </div>
                        <span className="text-foreground/90">{item}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectInfoBox;
