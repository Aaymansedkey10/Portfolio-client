import { Project } from '@/src/types/project';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'

interface ProjectImageSlider {
    currentImage: number;
    project: Project;
    prevImage: () => void;
    nextImage: () => void;

}

const ProjectImagesSlider = ({ currentImage, nextImage, prevImage, project }: ProjectImageSlider) => {
    return (
        <div className="bg-muted/30 relative group h-full flex items-center justify-center border-b lg:border-b-0 lg:border-r border-border">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="relative w-full h-full p-8"
                >
                    <Image
                        src={project.images[currentImage]?.url || "/placeholder.png"}
                        alt={project.title}
                        fill
                        className="object-contain p-4 drop-shadow-2xl"
                        unoptimized
                    />
                </motion.div>
            </AnimatePresence>

            {/* Slider Nav */}
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity px-4">
                <button onClick={prevImage} className="p-2 bg-background/80 backdrop-blur-md border border-border rounded-full text-foreground hover:bg-primary hover:text-white transition-all shadow-lg cursor-pointer">
                    <ArrowLeft size={15} />
                </button>
                <button onClick={nextImage} className="p-2 bg-background/80 backdrop-blur-md border border-border rounded-full text-foreground hover:bg-primary hover:text-white transition-all shadow-lg cursor-pointer">
                    <ArrowRight size={15} />
                </button>
            </div>

            {/* indecators */}
            <div className="absolute bottom-6 flex gap-2">
                {project.images.map((_, idx) => (
                    <div key={idx} className={`h-1.5 rounded-full transition-all ${idx === currentImage ? "w-8 bg-primary" : "w-2 bg-foreground/20"}`} />
                ))}
            </div>
        </div>
    )
}

export default ProjectImagesSlider