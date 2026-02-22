import Image from 'next/image';
import me from "@/assets/data/me.png"
const AboutImage = () => {
    return (
        <div className="relative aspect-4/5">
            <Image
                src={me}
                alt="Ayman Sedkey"
                fill
                className="object-contain object-center cursor-pointer transition-all duration-700 group-hover:scale-102"
                quality={90}
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