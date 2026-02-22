
type QuickInfoCardProps = {
    icon: React.ReactNode;
    label: string;
    val: string;
};
const QuickInfoCard = ({ icon, label, val }: QuickInfoCardProps) => {
    return (
        <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 border border-border/50 cursor-pointer tracking-wider shadow-primary/10 transition-all duration-300 hover:bg-secondary/50 hover:-translate-y-1 hover:shadow-md">
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