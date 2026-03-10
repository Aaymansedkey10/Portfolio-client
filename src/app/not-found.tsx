import { FileQuestion, Home } from 'lucide-react';
import Link from 'next/link';


const notFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[75vh] px-6">
            <div className="text-center">
                <h1 className="text-9xl font-black text-primary/20 select-none">
                    404
                </h1>

                <div className="relative -mt-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-background border-4 border-card shadow-lg">
                        <FileQuestion size={40} className="text-primary" />
                    </div>

                    <h2 className="text-3xl font-bold text-foreground mb-2">
                        Page Not Found
                    </h2>

                    <p className="text-muted-foreground mb-8 max-w-xs mx-auto">
                        Sorry, the page you are looking for does not exist or has been moved to another location.
                    </p>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold shadow-lg shadow-primary/20 hover:scale-105 transition-all active:scale-95"
                    >
                        <Home size={18} />
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default notFound;