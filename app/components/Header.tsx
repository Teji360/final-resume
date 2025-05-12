import Link from "next/link"

const Header = () => {
    return (
        <header className="absolute sm:text-sm sm:space-x-1 items-center text-black bg-white flex flex-col sm:flex-row justify-between w-screen h-20 p-5 top-0 z-50">

            <div className="w-full sm:w-[50vh] flex justify-between sm:space-x-4">
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
