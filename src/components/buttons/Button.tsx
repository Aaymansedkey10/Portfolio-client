import { ReactNode } from "react";

type Props = {
    label: string | ReactNode;
    func?: () => void;
};

export const Button = ({ label, func }: Props) => {
    return (
        <button
            onClick={func}
            className="text-white bg-primary w-10 h-10 rounded-full font-bold capitalize cursor-pointer flex items-center justify-center transition-transform duration-300 hover:scale-105"
        >
            {label}
        </button>
    );
};
