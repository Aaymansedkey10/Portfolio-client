import { ReactElement, ReactNode } from "react";

type ButtonProps = {
    label?: string;
    func?: () => void;
    icon: ReactElement;
    home?: boolean;
};

export const Button = ({ label, func, home, icon }: ButtonProps) => {
    return (
        <button
            onClick={func}
            className={`text-white bg-primary  rounded-full h-10 font-bold capitalize cursor-pointer flex items-center justify-center transition-transform duration-300 hover:scale-105 ${home ? "w-[150px] gap-3" : 'w-10 '}`}
        >
            <span>{icon}</span>
            <span>{label}</span>

        </button>
    );
};
