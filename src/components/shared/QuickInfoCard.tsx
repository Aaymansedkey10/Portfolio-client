
type QuickInfoCardProps = {
    icon: React.ReactNode;
    label: string;
    val: string;
};
const QuickInfoCard = ({ icon, label, val }: QuickInfoCardProps) => {
    return (
        <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 border border-border/50 cursor-pointer tracking-wider shadow-primary/10 transition-all duration-300 group hover:bg-secondary/50 hover:-translate-y-1 hover:shadow-md hover:border-primary/10 relative overflow-hidden">

            <div className="absolute inset-0 w-0 bg-linear-to-r from-primary/5 to-primary/20 transition-all duration-750 ease-out group-hover:w-full z-0" />

            <div className="absolute top-0 left-1/2 h-0.5 w-0 bg-linear-to-r from-primary via-cyan-400 to-primary transition-all duration-50 group-hover:left-0 group-hover:w-full z-10" />

            <div className="text-primary">{icon}</div>
            <div className="space-y-1">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {label}
                </p>
                <p className="text-sm font-semibold">{val}</p>
            </div>
        </div>
    )
}

export default QuickInfoCard