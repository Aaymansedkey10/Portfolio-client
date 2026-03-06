"use client";
import { motion } from "framer-motion";

const Loading = () => {
    return (
        <div className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#0a0a0a]">
            {/* Loading Logo or Symbol */}
            <div className="relative flex items-center justify-center">
                {/* Outer Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="h-16 w-16 rounded-full border-t-2 border-b-2 border-primary"
                />
                {/* Inner Ring */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="absolute h-10 w-10 rounded-full border-r-2 border-l-2 border-primary/30"
                />
            </div>

            {/* Loading Text */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="mt-6 text-sm font-medium tracking-[0.2em] text-white/50 uppercase"
            >
                Loading Experience...
            </motion.div>
        </div>
    );
}
export default Loading