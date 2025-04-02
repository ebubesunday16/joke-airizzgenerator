import { HeartLogo } from "@/customSVG"
import Link from "next/link"
import Navigation from "./Navigation"

const Header = ({className}: {className: string}) => {

  
  return (
    <header className={`flex items-center justify-between mt-6 ${className}`}>
        {/* Logo SETUP */}
          <Link href={'/'} className="flex items-center gap-4">
            <HeartLogo />
            <span className="block font-semibold text-sm sm:text-base">AI RIZZ GENERATOR</span>
            <span className="block font-semibold text-sm sm:text-base bg-red-500 text-white px-1 rounded-[3px]">
                Joke

            </span>
          </Link>
        {/* NavItems SETUP */}
        <Navigation />
    </header>
  )
}

export default Header
