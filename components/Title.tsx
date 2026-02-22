const Title = ({ title, description }: { title: string, description?: string }) => {
  return (
    <section className="py-10 w-full">
      <div className="flex items-center justify-center gap-4">
        <div className="w-12 md:w-20 h-0.5 bg-primary/40 rounded-full"></div>
        <h3 className="text-[22px] lg:text-[35px] font-extrabold text-primary uppercase tracking-widest">
          {title}
        </h3>
        <div className="w-12 md:w-20 h-0.5 bg-primary/40 rounded-full"></div>
      </div>

      {title.toLowerCase() !== "about me." && (
        <p className="text-sm md:text-base font-light text-center w-full max-w-2xl mx-auto text-muted-foreground leading-relaxed px-4">
          {description ? description : "Explore my professional journey and the impact I've made through code and creative problem-solving."}
        </p>
      )}
    </section>
  )
}

export default Title