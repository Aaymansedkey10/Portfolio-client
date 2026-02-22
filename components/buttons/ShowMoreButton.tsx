"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'


const ShowMoreButton = ({ url }: { url: string }) => {
    const path = usePathname();
    if (path === "/") return (
        <Link href={url}
            className="bg-blue-400 text-white capitalize px-5 py-2 rounded text-center ml-auto font-bold mt-3 block w-fit">
            Show more...
        </Link>
    )
}

export default ShowMoreButton