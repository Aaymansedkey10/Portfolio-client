export const Highlight = ({ children }: { children: React.ReactNode }) => (
    <span className="relative text-foreground font-semibold group cursor-default">
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
    </span>
);