
import { BioChild } from '@/src/types/about';
import { Highlight } from './Highlight';

export const RenderTextChild = ({ child, index }: { child: BioChild; index: number }) => {
    if (child.bold) {
        return (
            <Highlight key={index}>
                {child.text}
            </Highlight>
        );
    }

    return (
        <span
            key={index}
            className={`${child.italic ? "italic" : ""} text-muted-foreground`}
        >
            {child.text}
        </span>
    );
};