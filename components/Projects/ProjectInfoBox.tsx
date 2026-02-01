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
            className={cn("p-4 rounded-md shadow-lg w-full md:w-1/2 hover:scale-105 transition-all duration-300", className)}
            style={{
                backgroundColor: background,
            }}
        >
            <h2 className="text-2xl font-bold">{title}</h2>
            <ul className="list-disc list-inside">
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ProjectInfoBox