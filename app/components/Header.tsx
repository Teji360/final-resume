import { Bars3Icon } from "@heroicons/react/16/solid"
import Link from "next/link"

const Header = () => {
    return (
        <header className="absolute  items-center text-black bg-white flex flex-row justify-evenly w-screen h-20 p-5 top-0 z-50">

            <div className="w-[50vh] justify-between flex">

                <div className="cursor-pointer">
                    {/* Hambuerger Icon */}
                    <Bars3Icon className="text-white w-5 h-5" />
                </div>

                <div>
                    <Link href="#education">
                        Education
                    </Link>
                </div>

                <div>
                    <Link href="#work">
                        Work
                    </Link>

                </div>

                <div>
                    <Link href="#projects">
                        Projects
                    </Link>
                </div>
            </div>

            <div className="flex w-[50vh] justify-around flex-row-reverse space-x-10">
                <div>
                    <Link href="https://www.linkedin.com/in/david-aror-40a55219a/">
                        LinkedIn
                    </Link>

                </div>

                <div>
                    <Link href="https://drive.google.com/file/d/10wSm_BsiUwcXtfEjeXfNfHl2SAUy4BfI/view?usp=sharing">
                        Resume
                    </Link>

                </div>
            </div>
        </header>


    )
}
export default Header