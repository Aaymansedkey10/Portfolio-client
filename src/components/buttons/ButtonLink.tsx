import Link from 'next/link';
import { ElementType } from 'react';

interface ButtonLinkProps {
    url: string;
    label: string;
    icon: ElementType;
    variant?: 'primary' | 'outline';
    className?: string;
}

const ButtonLink = ({ url, label, icon: Icon, variant = 'primary', className = "" }: ButtonLinkProps) => {

    const variants = {
        primary: "bg-primary text-white hover:bg-primary/90 border-transparent",
        outline: "bg-transparent text-foreground border border-border hover:bg-secondary hover:border-primary/50 hover:text-primary transition-all duration-300"
    };

    return (
        <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
                group flex items-center justify-center gap-2 px-4 lg:px-8 py-2 
                rounded-full font-bold transition-all duration-300 border
                hover:scale-[1.02] active:scale-95 shadow-lg
                ${variants[variant]} 
                ${className} 
            `}
        >
            <Icon className="group-hover:rotate-12 transition-transform duration-300" size={20} />
            <span className="whitespace-nowrap">{label}</span>
        </Link>
    );
};

export default ButtonLink;