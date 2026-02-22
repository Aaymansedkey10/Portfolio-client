// "use client";

// import { motion } from "motion/react";
// import { useEffect, useState } from "react";

const titles = [
    "Frontend Developer",
    "React Engineer",
    "Next.js Specialist",
];

// const TYPING_SPEED = 80;
// const DELETING_SPEED = 50;
// const HOLD_DURATION = 1500;

export default function TypingJobTitle() {
    // const [titleIndex, setTitleIndex] = useState(0);
    // const [text, setText] = useState("");
    // const [isDeleting, setIsDeleting] = useState(false);

    // useEffect(() => {
    //     const currentTitle = TITLES[titleIndex];

    //     const timeout = setTimeout(() => {
    //         if (!isDeleting) {
    //             // typing
    //             setText(currentTitle.slice(0, text.length + 1));

    //             if (text === currentTitle) {
    //                 setTimeout(() => setIsDeleting(true), HOLD_DURATION);
    //             }
    //         } else {
    //             // deleting
    //             setText(currentTitle.slice(0, text.length - 1));

    //             if (text === "") {
    //                 setIsDeleting(false);
    //                 setTitleIndex((prev) => (prev + 1) % TITLES.length);
    //             }
    //         }
    //     }, isDeleting ? DELETING_SPEED : TYPING_SPEED);

    //     return () => clearTimeout(timeout);
    // }, [text, isDeleting, titleIndex]);

    return (
        <div className="">
            {
                titles.map((title, index) => (
                    <h1 key={index} className="font-extrabold text-blue-500 capitalize text-[20px] lg:text-[30px]">
                        {title}
                    </h1>
                ))
            }
        </div>
    );
}
