"use client";
import { X } from 'lucide-react'
import Slider from './Slider'
import { useBoolean } from 'usehooks-ts'

const ProjectInfo = () => {
    const { setFalse, value } = useBoolean()
    if (value) {
        return (
            <section className="fixed w-full h-full bg-black/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
                    {/* <Image src={imag} width={350} height={350} alt="project-image" className="object-cover w-full h-[80vh] rounded-xl object-top" /> */}
                    <Slider />
                    <div className="space-y-6 details">
                        <h6 className="capitalize font-medium text-white">project name </h6>
                        <p className="text-gray-400 font-thin">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem suscipit ab nostrum unde neque expedita architecto molestiae porro eaque, quibusdam pariatur in officiis, placeat iusto corrupti laboriosam dolorum sequi non!
                        </p>
                        <div className="flex items-center gap-2">
                            <div className="text-blue-500 bg-blue-900 px-6 py-2 rounded-full font-medium capitalize">React</div>
                            <div className="text-blue-500 bg-blue-900 px-6 py-2 rounded-full font-medium capitalize">React</div>
                        </div>
                        <div className="flex items-center gap-2 mt-5">
                            <button className="text-blue-800 bg-white px-6 py-2 rounded-full font-medium capitalize">veiw Live</button>
                            <div className="text-blue-800 bg-white px-6 py-2 rounded-full font-medium capitalize">view code</div>
                        </div>
                    </div>
                </div >
                <button onClick={setFalse} className="text-blue-800 bg-white px-6 py-2 rounded-full font-medium capitalize">
                    <X />
                </button>
                {/* <div className="buttons flex items-center justify-end gap-3 mb-5">
              <Link href="/works"
                  className="bg-blue-400 text-white capitalize px-5 py-2 rounded text-center font-bold mt-3 block w-fit">
                  Show more works...
              </Link>
              <Link href="/"
                  className="bg-blue-400 text-white capitalize px-5 py-2 rounded text-center font-bold mt-3 block w-fit">
                  Back to home
              </Link>
          </div> */}
            </section>
        )
    }
}

export default ProjectInfo