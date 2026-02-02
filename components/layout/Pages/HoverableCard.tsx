import type { ReactNode } from "react";
import PointerHeart from "@/components/ui/PointerHeart"

const HoverableCard = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <div className="w-full max-w-2xl border rounded-lg p-6 shadow-lg relative group overflow-hidden hover:scale-105 transition-all duration-300">
                {children}
            </div>
            <PointerHeart />
        </div>
    )
}

export default HoverableCard