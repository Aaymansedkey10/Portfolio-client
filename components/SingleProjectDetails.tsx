import { X } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

type singelTech = {
    techTitle: string,
    image: string
}
export const SingleWorkDetails = ({ title, technologies, close }: { title: string, technologies: singelTech[], close: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 dark:bg-blac bg-muted/50 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={close}
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="dark:bg-secondar bg-muted-foreground border border-white/10 p-8 rounded-2xl max-w-2xl w-full relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={close}
                    className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                    <X className="text-white" size={24} />
                </button>
                <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    This is a detailed description of the project. You can pass a specific description as a prop to make it dynamic for each project.
                </p>

                <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-3 mb-8">
                    {technologies.map((tech, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                            <Image src={tech.image} alt={tech.techTitle} width={20} height={20} unoptimized className="object-contain" />
                            <span className="text-sm text-white/80">{tech.techTitle}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}