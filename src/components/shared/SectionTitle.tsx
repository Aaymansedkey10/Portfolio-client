import { MotionInView } from "../animations/MotionInView"

const SectionTitle = ({ title, description }: { title: string, description?: string }) => {
  return (
    <section className="py-10 w-full">
      <div className="flex items-center justify-center gap-4">
        <MotionInView direction="left">
          <div className="w-12 md:w-20 h-0.5 bg-primary/40 rounded-full"></div>
        </MotionInView>
        <MotionInView direction="down">
          <h3 className="text-[16px] md:text-[22px] lg:text-[35px] w-fit font-extrabold text-primary uppercase tracking-widest">
            {title}
          </h3>

        </MotionInView>
        <MotionInView direction="right">
          <div className="w-12 md:w-20 h-0.5 bg-primary/40 rounded-full"></div>
        </MotionInView>
      </div>

      {title.toLowerCase() !== "about me." && (
        <MotionInView direction="up" once={false}>
          <p className="text-sm md:text-base font-light text-center w-full max-w-2xl mx-auto text-muted-foreground leading-relaxed px-4">
            {description ? description : "Explore my professional journey and the impact I've made through code and creative problem-solving."}
          </p>
        </MotionInView>
      )}
    </section>
  )
}

export default SectionTitle