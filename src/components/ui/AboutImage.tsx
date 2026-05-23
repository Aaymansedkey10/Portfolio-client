import { StrapiImage } from '@/src/models/globals';
import Image from 'next/image';
const AboutImage = ({ alternativeText, url }: StrapiImage) => {
    return (
        <div className="relative aspect-4/5 group">
            <Image
                src={url}
                alt={alternativeText || "Ayman Sedkey"}
                fill
                className="object-cover object-center cursor-pointer transition-all duration-700 group-hover:scale-102"
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
            />
            {/* Floating Badge */}
            {/* <div
                className="absolute -bottom-8 -right-6 bg-background border border-border p-4 rounded-xl shadow-2xl animate-bounce transition-all duration-200 hidden lg:block"
            >
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                        <Code2 className="text-primary" size={24} />
                    </div>
                    <div>
                        <p className="text-xs text-muted-foreground">Expert in</p>
                        <p className="font-bold">Front-End Dev</p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default AboutImage