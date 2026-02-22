import Image, { StaticImageData } from 'next/image'
type AvatarProps = {
    url: StaticImageData;
    width: number;
    height: number;
    alt: string
}
const Avatar = ({ url, height, width, alt }: AvatarProps) => {
    return (
        <Image
            src={url}
            width={width}
            height={height}
            alt={alt}
            className={`w-[${width}px] h-[${height}px] object-cover rounded-full hidden lg:block object-top`}
        />
    )
}

export default Avatar