import { projects } from "@/data/projects";
import ShowElement from "../animations/ShowElementAnimation";
import SingleWork from "../SingleWork";
import Title from "../Title";
const WorksSection = () => {
    return (
        <ShowElement>
            <section id="works" className="container">
                <Title
                    title="My Works"
                    description="A collection of my projects as a Frontend Developer."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {/* <Carousel
                        opts={{
                            loop: true,
                            align: "start",
                            duration: 50,
                            dragFree: true,
                            containScroll: "trimSnaps",
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="lg:gap-3 py-5">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem
                                    key={index}
                                    className="
                  basis-full
                  sm:basis-1/3
                  lg:basis-1/3
                  xl:basis-1/4
                "
                                >
                                    <SingleWork />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="-left-6 top-1/2 -translate-y-1/2" />
                        <CarouselNext className="-right-6 top-1/2 -translate-y-1/2" />
                    </Carousel> */}
                    {projects.map(({ banner, github, live, technologies, title }, index) => (
                        <SingleWork key={index} banner={banner} github={github} live={live} technologies={technologies} title={title} />
                    ))}
                    {/* {Array.from({ length: 5 }).map((_, index) => (
                        <SingleWork key={index} banner="" github="" live="" technologies={} title=""/>
                    ))} */}
                </div>
            </section>
        </ShowElement>
    );
};

export default WorksSection;
