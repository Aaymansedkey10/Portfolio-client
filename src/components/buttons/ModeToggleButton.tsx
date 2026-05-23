"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { ReactNode } from "react";

type ChangeButtonProps = {
    icon: ReactNode;
    onClick: () => void;
};

export const ChangeButton = ({ icon, onClick }: ChangeButtonProps) => {
    return (
        <button
            onClick={onClick}
            aria-label="Toggle theme"
            className="cursor-pointer border border-primary p-2 rounded-full text-white bg-primary"
        >
            {icon}
        </button>
    );
};

const ModeToggleButton = () => {
    const { setTheme, resolvedTheme } = useTheme();
    if (!resolvedTheme) return null;

    return (
        <ChangeButton
            icon={
                resolvedTheme === "dark" ? (
                    <Sun className="h-5 w-5" />
                ) : (
                    <Moon className="h-5 w-5" />
                )
            }
            onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
        />
    );
};

export default ModeToggleButton;
