import Title from '../shared/SectionTitle';
import { socialLinks } from '@/src/assets/SocailLinks';
import SingleContactLink from '../shared/SingleContactLink';

const ContactSection = () => {

    return (
        <section id='contact' className="py-24 relative overflow-hidden">
            <Title
                title="Let's work together."
                description="Have a project in mind, an opportunity, or just want to say Hi?"
            />

            <div className="text-center mt-12 relative z-10">
                <h6 className="text-muted-foreground font-medium uppercase tracking-[0.3em] text-[10px] mb-10">
                    Find me on
                </h6>

                <div className="flex flex-wrap items-center justify-center gap-4">
                    {socialLinks.map((link, index) => {
                        const directions = ["up", "down", "left", "right"] as const;
                        const currentDirection = directions[index % 4];
                        return (
                            <SingleContactLink
                                key={link.id}
                                {...link}
                                index={index}
                                currentDirection={currentDirection}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ContactSection;