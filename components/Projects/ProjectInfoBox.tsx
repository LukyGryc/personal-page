import { cn } from "@/lib/utils";

interface ProjectInfoBoxProps {
    title: string,
    items: string[],
    background: string,
    className?: string
}

const ProjectInfoBox = ({ title, items, background, className }: ProjectInfoBoxProps) => {

    if (items.length === 0) {
        return <></>;
    }

    return (
        <div
            className={cn(
                "relative w-full md:w-1/2 overflow-hidden",
                "rounded-xl border border-white/20 shadow-lg shadow-black/15",
                "hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5 transition-all duration-300 ease-out",
                className
            )}
            style={{ backgroundColor: background }}
        >
            <div
                className="absolute left-0 top-0 bottom-0 w-1 opacity-90"
                style={{ backgroundColor: "color-mix(in srgb, white 30%, transparent)" }}
            />
            <div className="relative pl-5 pr-5 py-5">
                <h2 className="text-xl font-semibold tracking-tight text-white/95 drop-shadow-sm mb-3">
                    {title}
                </h2>
                <ul className="space-y-2">
                    {items.map((item) => (
                        <li
                            key={item}
                            className="flex items-start gap-2 text-white/90 text-sm"
                        >
                            <span
                                className="mt-1.5 size-1.5 shrink-0 rounded-full bg-white/70"
                                aria-hidden
                            />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProjectInfoBox;