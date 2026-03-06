import { MotionInView } from "../animations/MotionInView";


const FrameWorks = ({ frames }: { frames: string[] }) => {
    return (
        <div className="flex items-center justify-center gap-4">
            {
                frames.map((item, i) => {
                    const lastIndex = frames.length - 1 !== i;
                    const isEven = i % 2 === 0;
                    return (
                        <MotionInView key={i} direction={isEven ? "left" : "right"} delay={i * 0.2}>
                            <p className={`text-lg text-muted-foreground border-r-2  pr-5 h-7 leading-3 capitalize font-bold tracking-widest flex items-center justify-center ${lastIndex ? " border-r-2 pr-5 border-primary" : "border-transparent"}`}>
                                {item}
                            </p>
                        </MotionInView>
                    )
                })
            }
        </div>
    )
}

export default FrameWorks