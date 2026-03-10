"use client";

import { RefreshCcw, AlertTriangle } from "lucide-react";

export default function Error({ error }: { error: Error & { digest?: string }; }) {

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-6">
            <div className="w-full max-w-md p-8 text-center bg-card border border-border rounded-3xl shadow-sm">

                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-primary/10 text-primary">
                    <AlertTriangle size={32} />
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-3">
                    Something went wrong
                </h2>

                <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                    {error ? error.message : " An unexpected error occurred while loading data. You can try restarting the affected section by pressing the button below."}
                </p>

                <div className="flex flex-col gap-3">
                    <button
                        onClick={() => window.location.reload()}
                        className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all active:scale-[0.98]"
                    >
                        <RefreshCcw size={18} />
                        Try Again
                    </button>

                    <button
                        onClick={() => window.location.href = "/"}
                        className="w-full py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
}