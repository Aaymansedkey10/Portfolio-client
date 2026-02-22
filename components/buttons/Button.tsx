type Props = {
    label: string;
    func?: () => void;
};

export const Button = ({ label, func }: Props) => {
    return (
        <button
            onClick={func}
            className="text-white bg-primary py-2 px-5 rounded-full font-bold capitalize cursor-pointer transition-transform duration-300 hover:scale-105"
        >
            {label}
        </button>
    );
};
