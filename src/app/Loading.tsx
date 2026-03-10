const Loading = () => {
    return (
        <div className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#0a0a0a]">
            {/* Loading Logo or Symbol */}
            <div className="relative flex items-center justify-center">
                {/* <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="h-16 w-16 rounded-full border-t-2 border-b-2 border-primary animate-spin tran"
                /> */}
                <div
                    className="h-16 w-16 rounded-full border-t-2 border-b-2 border-primary animate-spin"
                />
                <div
                    className="absolute h-10 w-10 rounded-full border-r-2 border-l-2 border-primary/30 animate-spin direction-reverse"
                />
                {/* <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="absolute h-10 w-10 rounded-full border-r-2 border-l-2 border-primary/30"
                /> */}
            </div>
        </div>
    );
}
export default Loading