"use client";
import imag from "@/public/1000091188.jpg";
import Image from "next/image"
import { useState } from "react"
import { images } from "@/app/assets/images"
const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handlePrev = () => {
        if (currentIndex === 0) setCurrentIndex(images.length)
        setCurrentIndex((prev) => prev - 1);
        console.log("prev");
    }
    const handleNext = () => {
        if (currentIndex === images.length - 1) setCurrentIndex(0)
        setCurrentIndex((prev) => prev + 1);
    }
    return (
        <div className="flex items-center justify-between gap-2 h-[60dvh]">
            <button className="bg-blue-500 text-white font-bold rounded-full w-10 h-10 text-center cursor-pointer" onClick={() => handlePrev()}>{"<"}</button>
            <Image src={images[currentIndex]} width={500} height={600} alt="project-image"
                className="object-contain rounded-xl" />
            <button className="bg-blue-500 text-white font-bold rounded-full w-10 h-10 text-center cursor-pointer" onClick={() => handleNext()} >{">"}</button>
        </div>
    )
}

export default Slider