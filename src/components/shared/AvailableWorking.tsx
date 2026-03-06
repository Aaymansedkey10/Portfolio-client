import { Dot } from 'lucide-react';

const AvailableWorking = ({ available }: { available: boolean }) => {
    return (
        <div className="flex items-center justify-center bg-secondary/20 pe-6 py-1 rounded-full w-fit mx-auto mb-4 border shadow-md shadow-primary/5 border-primary/10 h-10 overflow-hidden transition-all duration-500">
            <div className="relative flex items-center justify-center">
                <Dot
                    className={`${available ? "text-primary" : "text-orange-500"} animate-pulse`}
                    size={40}
                />
                {available && (
                    <span className="absolute w-3 h-3 bg-primary rounded-full animate-ping opacity-75"></span>
                )}
            </div>
            <p className="text-[12px] font-semibold text-muted-foreground uppercase tracking-widest">
                {available ? "Available to work" : "Currently Busy"}
            </p>
        </div>
    )
}

export default AvailableWorking;